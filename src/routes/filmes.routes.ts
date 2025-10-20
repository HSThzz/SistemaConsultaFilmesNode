import { Router } from "express";
import { getFilmes, addFilme } from "../controllers/filmesController";




const router = Router();
//rota get a partir de filmes
router.get("/", getFilmes);
//rota post
router.post("/adicionar", addFilme);

router.get("/now-playing", async (req, res)=>{
    try{
        const resposta = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=YOUR_API_KEY&language=pt-BR&page=1",{
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
})

router.get("/popular", async (req, res)=>{
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
})

router.get("/:id", async (req, res)=>{
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
})
router.get("/titulo/:titulo", async (req, res)=>{
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
})




export default router;
