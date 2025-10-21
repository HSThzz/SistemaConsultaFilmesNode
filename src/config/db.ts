// src/config/db.ts
import { Pool } from "pg"

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "filmedb",
  password: "postgres",
  port: 5433, // porta padrão do PostgreSQL
})
