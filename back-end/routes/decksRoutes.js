import express from "express";
import createDeck from "../controllers/Decks/createDeck.js";
import getDecks from "../controllers/Decks/getDecks.js";

const router = express.Router();

router.get("/:user_id", getDecks);
router.post("/", createDeck);

export default router;
