import express from "express"

import filmesRoutes from "./routes/filmes.routes"

const app = express();

app.use(express.json())

//rota principal e secundarias
//app.use("/filmes", filmesRoutes)

app.use("/filmes", filmesRoutes)

const PORT = 3000;

//subindo servidor
app.listen(PORT, ()=>{
    console.log("Servidor ouvindo na porta: " + PORT);
})


