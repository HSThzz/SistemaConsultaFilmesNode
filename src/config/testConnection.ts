import { pool } from "./db"

async function testarConexao() {
  try {
    const res = await pool.query("SELECT NOW()")
    console.log("✅ Conectado ao PostgreSQL com sucesso!")
    console.log("Hora atual no banco:", res.rows[0].now)
  } catch (err) {
    console.error("❌ Erro ao conectar no banco:", err)
  } finally {
    pool.end()
  }
}

testarConexao()
