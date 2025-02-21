import { pool } from "../../db/index.js";

// export default async function removeDeck(id) {
//   try {
//     const poolInstance = await pool; // Ensure pool is correctly used
//     const query = "DELETE FROM decks WHERE id = @id"; // Corrected SQL syntax

//     const result = await poolInstance.request().input("id", id).query(query);

//     return result.rowsAffected[0]; // Returns the number of deleted rows
//   } catch (error) {
//     console.error("Error deleting deck:", error);
//     throw error;
//   }
// }

export default async function removeDeck(id) {
  const poolInstance = await pool;
  const transaction = poolInstance.transaction();
  try {
    await transaction.begin();

    await transaction
      .request()
      .input("id", id)
      .query("DELETE FROM cards WHERE deck_id = @id");

    await transaction
      .request()
      .input("id", id)
      .query("DELETE FROM decks WHERE id = @id");

    await transaction.commit();
    return true;
  } catch (error) {
    console.error("Error deleting deck:", error);
    await transaction.rollback();
    throw error;
  }
}
