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

async function createTableUsuario(){
  try{
    await pool.query(
      `CREATE TABLE IF NOT EXISTS usuarios(
      id int PRIMARY KEY,
      nome varchar(100),
      email varchar(100) unique not null,
      senha varchar(255) not null
      );`
    )
    console.log("Tabela usuario criada com sucesso!")
  }catch(erro){
    console.log("Erro ao criar tabela de usuarios", erro)
  }finally{
    pool.end()
  }
}

createTableUsuario()
createTable();
