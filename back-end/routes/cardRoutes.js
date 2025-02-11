import express from "express";
import { createCards } from "../controllers/Decks/createCards.js";
import getCards from "../controllers/Decks/getCards.js";

const router = express.Router();

router.post("/", createCards);
router.get("/:deck_id", getCards);

export default router;
