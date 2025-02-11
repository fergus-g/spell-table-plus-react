import express from "express";
import createDeck from "../controllers/Decks/createDeck.js";
import getDecks from "../controllers/Decks/getDecks.js";
import deleteDeck from "../controllers/Decks/deleteDeck.js";

const router = express.Router();

router.get("/:user_id", getDecks);
router.post("/", createDeck);
router.delete("/:id", deleteDeck);

export default router;
