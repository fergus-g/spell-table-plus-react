// Import the required modules
import express from "express";
import morgan from "morgan";
import cors from "cors";

import deckRouter from "./routes/decksRoutes.js";
import cardRouter from "./routes/cardRoutes.js";
import authRoutes from "./routes/auth.js";

// Initialize the express app
const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend's URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Middleware
app.use(morgan("dev")); // Morgan is used for logging HTTP requests to the console in a developer-friendly format
app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests
app.use(cors(corsOptions));

// Use sub-routers
app.use("/decks", deckRouter);
app.use("/cards", cardRouter);
app.use("/api", authRoutes);

export default app;
