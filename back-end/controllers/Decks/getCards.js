import fetchCards from "../../models/Decks/fetchCards.js";

export default async function getCards(req, res) {
  const deck_id = req.params.deck_id;
  try {
    const cards = await fetchCards(deck_id);
    res.status(200).json({ status: "success", data: cards });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
