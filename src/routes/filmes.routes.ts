import { Router } from "express";
import { getNowPlaying, getPopular, getFilmeById, getFilmeByTitulo } from "../controllers/filmesController";
import { autenticar } from "../middlewares/authMiddleware";



const router = Router();


router.get("/now-playing", autenticar, getNowPlaying)

router.get("/popular", autenticar, getPopular)

router.get("/:id", autenticar, getFilmeById)

router.get("/titulo/:titulo", autenticar, getFilmeByTitulo)




export default router;
