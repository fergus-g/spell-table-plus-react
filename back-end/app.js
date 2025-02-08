// Import the required modules
import express from "express";
import morgan from "morgan";
import cors from "cors";

import deckRouter from "./routes/decksRoutes.js";
import authRoutes from "./routes/auth.js";

// Initialize the express app
const app = express();

// Middleware
app.use(morgan("dev")); // Morgan is used for logging HTTP requests to the console in a developer-friendly format
app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests
app.use(cors());

// Use sub-routers
app.use("/decks", deckRouter);
app.use("/api", authRoutes);

export default app;
