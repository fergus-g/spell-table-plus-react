import removeDeck from "../../models/Decks/removeDeck.js";

export default async function deleteDeck(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ status: "fail", message: "No deck ID provided" });
    }

    const result = await removeDeck(id);

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ status: "fail", message: "Deck not found" });
    }

    res.status(200).json({ status: "success", message: "Deck deleted" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
