import { Request, Response } from "express";
import Filmes from "../models/filmes";

let filmes = [];



export function addFilme(req: Request, res: Response) {
  const novoFilme = req.body;
  novoFilme.id = filmes.length + 1;
  filmes.push(novoFilme);
  res.status(201).json(novoFilme);
}

export async function getNowPlaying(req: Request, res: Response){
  try{
        const resposta = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=YOUR_API_KEY&language=pt-BR&page=1",{
            method: "GET",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODdjOGFhYzYzYzJjNGNmMzA5MTQxMWJkYTc5NTJhNyIsIm5iZiI6MTc1ODcyOTUyOC4wODUsInN1YiI6IjY4ZDQxNTM4Njc3Y2EyNzE3ZjcxOWQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MjaVOiJsyUscImOv_MlS0_uDUu98MGsXlnV6v0wf7lc"

            },
    })
        const dados = await resposta.json()
        const  filmes = dados.results.map((filme: any)=>
          new Filmes(
          filme.id,
          filme.original_title,
          filme.overview,
          filme.release_date,
          filme.status,
        ))
        
        res.json(filmes)

        console.log(filmes)
    }catch(erro){
        console.log(erro)
    }
}
export async function getPopular(req: Request, res: Response) {
  try{
        const resposta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=pt-BR&page=1", {
            method: "GET",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODdjOGFhYzYzYzJjNGNmMzA5MTQxMWJkYTc5NTJhNyIsIm5iZiI6MTc1ODcyOTUyOC4wODUsInN1YiI6IjY4ZDQxNTM4Njc3Y2EyNzE3ZjcxOWQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MjaVOiJsyUscImOv_MlS0_uDUu98MGsXlnV6v0wf7lc"

            },
        })
        const dados = await resposta.json()
        res.json(dados)
        console.log(dados)
    }catch(erro){
        console.log(erro)
    }
}
export async function getFilmeById(req: Request, res: Response) {
  try{
        const ID = req.params.id;
        const resposta = await fetch("https://api.themoviedb.org/3/movie/"+ ID, {
            method: "GET",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODdjOGFhYzYzYzJjNGNmMzA5MTQxMWJkYTc5NTJhNyIsIm5iZiI6MTc1ODcyOTUyOC4wODUsInN1YiI6IjY4ZDQxNTM4Njc3Y2EyNzE3ZjcxOWQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MjaVOiJsyUscImOv_MlS0_uDUu98MGsXlnV6v0wf7lc"

            },
        })
        const dados = await resposta.json()
        res.json(dados)
        console.log(dados)
    }catch(erro){
        console.log(erro)
    }
}
export async function getFilmeByTitulo(req: Request, res: Response) {
  try{
        const MOVIE = req.params.titulo;
        console.log("MOVIE: "+ MOVIE);
        const resposta = await fetch("https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query="+MOVIE+"&language=pt-BR&page=1&api_key=YOUR_API_KEY&query=superman&language=pt-BR&page=1", {
            method: "GET",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODdjOGFhYzYzYzJjNGNmMzA5MTQxMWJkYTc5NTJhNyIsIm5iZiI6MTc1ODcyOTUyOC4wODUsInN1YiI6IjY4ZDQxNTM4Njc3Y2EyNzE3ZjcxOWQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MjaVOiJsyUscImOv_MlS0_uDUu98MGsXlnV6v0wf7lc"

            },
        })
        const dados = await resposta.json()
        res.json(dados)
        console.log(dados)
    }catch(erro){
        console.log(erro)
    }
}