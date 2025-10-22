import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../config/db";

const SECRET = "chave-secreta-super-segura"; // Idealmente, use variável de ambiente (.env)

export async function registrar(req: Request, res: Response) {
  try {
    const { nome, email, senha } = req.body;

    // Verifica se já existe
    const existe = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
    if (existe.rows.length > 0) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }

    // Criptografa senha
    const senhaHash = await bcrypt.hash(senha, 10);

    // Salva no banco
    await pool.query("INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)", [
      nome,
      email,
      senhaHash,
    ]);

    res.status(201).json({ message: "Usuário criado com sucesso!" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao registrar", error: err });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, senha } = req.body;

    const usuario = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
    if (usuario.rows.length === 0) {
      return res.status(400).json({ message: "Usuário não encontrado" });
    }

    const valido = await bcrypt.compare(senha, usuario.rows[0].senha);
    if (!valido) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    // Gera token JWT
    const token = jwt.sign({ id: usuario.rows[0].id, email: usuario.rows[0].email }, SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Erro no login", error: err });
  }
}
