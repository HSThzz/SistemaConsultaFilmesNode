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



export default router;
