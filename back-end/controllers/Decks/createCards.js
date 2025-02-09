import { insertCards } from "../../models/Decks/insertCards.js";

export async function createCards(req, res) {
  try {
    const { cards } = req.body;

    if (!cards || cards.length === 0) {
      return res.status(400).json({ error: "No cards provided" });
    }

    const insertedCards = await insertCards(cards);

    res.status(201).json({
      message: "Cards inserted successfully",
      data: insertedCards,
    });
  } catch (error) {
    console.error("Error inserting cards:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
