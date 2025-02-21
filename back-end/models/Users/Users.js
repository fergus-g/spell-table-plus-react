import { pool } from "../../db/index.js";
import sql from "mssql";

export const getUserByEmail = async (email) => {
  try {
    const result = await (await pool)
      .request()
      .input("email", sql.VarChar, email)
      .query("SELECT * FROM users WHERE email = @email");

    return result.recordset[0];
  } catch (err) {
    console.error("Database query error:", err);
    throw err;
  }
};
