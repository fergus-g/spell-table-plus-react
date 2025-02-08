import fetchDecks from "../../models/Decks/fetchDecks.js";

export default async function getDecks(req, res) {
  try {
    const decks = await fetchDecks();
    res.status(200).json({ status: "success", data: decks });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
