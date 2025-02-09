import { pool } from "../../db/index.js";
import sql from "mssql"; // Ensure you're importing the 'mssql' package

export async function insertCards(cards) {
  const poolInstance = await pool;

  // Create a transaction using the `Transaction` class from 'mssql'
  const transaction = new sql.Transaction(poolInstance);

  try {
    // Start the transaction
    await transaction.begin();

    // Instead of reusing a single request, create a new request per query
    for (const card of cards) {
      const request = new sql.Request(transaction);
      const query = `
        INSERT INTO cards (deck_id, name, lang, image_uri, type_line)
        VALUES (@deck_id, @name, @lang, @image_uri, @type_line)
      `;

      await request
        .input("deck_id", sql.Int, card.deck_id)
        .input("name", sql.NVarChar, card.name)
        .input("lang", sql.NVarChar, card.lang)
        .input("image_uri", sql.NVarChar, card.image_uri)
        .input("type_line", sql.NVarChar, card.type_line)
        .query(query);
    }

    // Commit the transaction after all queries are successful
    await transaction.commit();

    return { message: "Cards inserted successfully" };
  } catch (error) {
    // If an error occurs, rollback the transaction
    await transaction.rollback();
    console.error("Error inserting cards:", error);
    throw new Error("Failed to insert cards");
  }
}
