import express from "express";
import createDeck from "../controllers/Decks/createDeck.js";
import getDecks from "../controllers/Decks/getDecks.js"; // This is fine as long as it's named appropriately

const router = express.Router();

router.get("/", getDecks); // Handles GET request for decks
router.post("/", createDeck); // Handles POST request to create a deck

export default router;
