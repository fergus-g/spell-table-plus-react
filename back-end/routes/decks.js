import express from "express";
import createDeck from "../controllers/Decks/createDeck.js";

const router = express.Router();

// router.get("/", getDecks);
router.post("/", createDeck);

export default router;
