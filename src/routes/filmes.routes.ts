import { Router } from "express";
import { getNowPlaying, addFilme, getPopular, getFilmeById, getFilmeByTitulo } from "../controllers/filmesController";




const router = Router();

router.post("/adicionar", addFilme);

router.get("/now-playing", getNowPlaying)

router.get("/popular", getPopular)

router.get("/:id", getFilmeById)

router.get("/titulo/:titulo", getFilmeByTitulo)




export default router;
