import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useUser } from "../context/UserContext";

const Login = () => {
  const { setUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // Check if the response is OK (status code 200)
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Login failed");
      }

      const data = await response.json();
      setUser({ id: data.user.id, username: data.user.username });
      console.log("Login successful!", data);

      navigate("/"); // Navigate to the home page after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch(
        "http://localhost:5000/api/auth/check-session",
        {
          credentials: "include",
        }
      );

      const data = await response.json();
      if (data.loggedIn) {
        console.log("User is logged in:", data.user);
      } else {
        console.log("User is not logged in");
      }
    };

    checkAuth();
  }, [setUser]);

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Login</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Login
          </Button>
          <Typography
            variant="h6"
            style={{
              marginTop: "10px",
            }}
          >
            Not a user?{" "}
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                color: "blue",
              }}
            >
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
