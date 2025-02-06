import insertDeck from "../../models/decks/insertDeck.js";

export default async function createDeck(req, res) {
  try {
    const { user_id, name } = req.body;
    if (!user_id || !name) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const deck = await insertDeck(user_id, name);
    res.status(201).json({ status: "success", data: deck });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
