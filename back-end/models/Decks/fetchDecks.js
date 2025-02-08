import { pool } from "../../db/index.js";

export default async function fetchDecks() {
  let query = "SELECT * FROM decks";
  const poolInstance = await pool;
  const request = poolInstance.request();

  try {
    const result = await request.query(query);
    return result.recordset;
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
}
