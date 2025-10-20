import { Request, Response } from "express";

let filmes = [
  { id: 1, titulo: "Vingadores", genero: "Ação" },
  { id: 2, titulo: "Interestelar", genero: "Ficção Científica" },
];

export function getFilmes(req: Request, res: Response) {
  res.json(filmes);
}

export function addFilme(req: Request, res: Response) {
  const novoFilme = req.body;
  novoFilme.id = filmes.length + 1;
  filmes.push(novoFilme);
  res.status(201).json(novoFilme);
}
