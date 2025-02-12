// Import the required modules
import express from "express";
import morgan from "morgan";
import cors from "cors";

import deckRouter from "./routes/decksRoutes.js";
import cardRouter from "./routes/cardRoutes.js";
import authRoutes from "./routes/auth.js";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(morgan("dev"));
app.use(express.json());
app.use(cors(corsOptions));

app.use("/decks", deckRouter);
app.use("/cards", cardRouter);
app.use("/api", authRoutes);

export default app;
