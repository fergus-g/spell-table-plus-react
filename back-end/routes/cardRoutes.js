import express from "express";
import { createCards } from "../controllers/Decks/createCards.js";

const router = express.Router();

router.post("/", createCards);

export default router;
