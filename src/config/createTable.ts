import { pool } from "./db"

async function createTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS filmes (
        id int PRIMARY KEY,
        original_title TEXT NOT NULL,
        overview TEXT,
        release_date TEXT,
        status TEXT
      );
    `);

    console.log("✅ Tabela 'filmes' criada com sucesso!");
  } catch (err) {
    console.error("❌ Erro ao criar tabela:", err);
  } finally {
    await pool.end();
  }
}

createTable();
