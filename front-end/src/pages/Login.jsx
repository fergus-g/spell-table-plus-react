import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
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

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Login failed");
      }

      const data = await response.json();
      setUser({ id: data.user.id, username: data.user.username });
      console.log("Login successful!", data);

      navigate("/board");
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
    <>
      <img
        src="/assets/Magic-The-Gathering.webp"
        alt="Magic: The Gathering background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.5,
        }}
      />
      <Container maxWidth="xs">
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" sx={{ mb: 3 }}>
                Login
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ width: "100%" }}
              >
                <TextField
                  fullWidth
                  label="Email"
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  sx={{ backgroundColor: "white", borderRadius: 1 }}
                />
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  sx={{ backgroundColor: "white", borderRadius: 1 }}
                />
                {error && (
                  <Typography color="error" sx={{ mt: 2 }}>
                    {error}
                  </Typography>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    mt: 2,
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
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    mt: 2,
                  }}
                >
                  {" "}
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    &lt; Go Back
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Login;
