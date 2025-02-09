import { pool } from "../../db/index.js";

export default async function insertDeck(user_id, name) {
  const poolInstance = await pool;
  const query = `
    INSERT INTO decks (user_id, name) 
    VALUES (@user_id, @name);

    SELECT * FROM decks WHERE id = SCOPE_IDENTITY();
  `;

  try {
    const result = await poolInstance
      .request()
      .input("user_id", user_id)
      .input("name", name)
      .query(query);

    return result.recordset[0];
  } catch (error) {
    console.error("Error inserting deck:", error);
    throw error;
  }
}
