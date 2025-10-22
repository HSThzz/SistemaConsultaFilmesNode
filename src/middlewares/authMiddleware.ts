import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET = "chave-secreta-super-segura";

export function autenticar(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token inválido" });

    (req as any).usuario = user; // adiciona o usuário no req
    next();
  });
}
