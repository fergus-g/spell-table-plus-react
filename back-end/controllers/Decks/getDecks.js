import fetchDecks from "../../models/Decks/fetchDecks.js";

export default async function getDecks(req, res) {
  const user_id = req.params.user_id;
  try {
    const decks = await fetchDecks(user_id);
    res.status(200).json({ status: "success", data: decks });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
