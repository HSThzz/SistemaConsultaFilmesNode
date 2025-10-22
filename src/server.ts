import express from "express"

import filmesRoutes from "./routes/filmes.routes"
import loginRoutes from "./routes/authRoutes"

const app = express();

app.use(express.json())


app.use("/filmes", filmesRoutes)
app.use("/filmes", loginRoutes)

const PORT = 3000;

//subindo servidor
app.listen(PORT, ()=>{
    console.log("Servidor ouvindo na porta: " + PORT);
})


