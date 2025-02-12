import { pool } from "../../db/index.js"; // Ensure this matches your DB connection file
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const poolConnection = await pool;
    const result = await poolConnection
      .request()
      .input("email", email)
      .query("SELECT * FROM users WHERE email = @email");

    if (result.recordset.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = result.recordset[0];

    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const isSecure = process.env.NODE_ENV === "production";
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: isSecure,
      sameSite: "Strict",
      maxAge: 60 * 60 * 1000,
    });

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const poolConnection = await pool;

    // Check if email already exists
    const existingUser = await poolConnection
      .request()
      .input("email", email)
      .query("SELECT * FROM users WHERE email = @email");

    if (existingUser.recordset.length > 0) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert user into database
    await poolConnection
      .request()
      .input("username", username)
      .input("email", email)
      .input("password_hash", hashedPassword)
      .query(
        "INSERT INTO users (username, email, password_hash) VALUES (@username, @email, @password_hash)"
      );

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Sign-up error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const checkSession = (req, res) => {
  const token = req.cookies.authToken;
  if (!token) return res.status(401).json({ loggedIn: false });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ loggedIn: true, user: decoded });
  } catch (err) {
    res.status(401).json({ loggedIn: false });
  }
};
