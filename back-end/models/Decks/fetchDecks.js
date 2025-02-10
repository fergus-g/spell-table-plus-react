import { pool } from "../../db/index.js";

export default async function fetchDecks(user_id) {
  let query = "SELECT * FROM decks WHERE user_id = @user_id";
  const poolInstance = await pool;
  const request = poolInstance.request();

  try {
    const result = await request.input("user_id", user_id).query(query);
    return result.recordset;
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
}
