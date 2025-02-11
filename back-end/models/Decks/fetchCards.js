import { pool } from "../../db/index.js";

export default async function fetchCards(deck_id) {
  let query = "SELECT * FROM cards WHERE deck_id = @deck_id";
  const poolInstance = await pool;
  const request = poolInstance.request();

  try {
    const result = await request.input("deck_id", deck_id).query(query);
    return result.recordset;
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw error;
  }
}
