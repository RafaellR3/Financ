import {Router} from "express";
import { UsuarioController } from "./controller/UsuarioController";
import { MesController } from "./controller/MesController";
import { MovimentoController } from "./controller/MovimentoController";

const router = Router();

//Usuario
const usuarioController = new UsuarioController();
router.post("/usuario", usuarioController.handle);

//Mes
const mesController = new MesController();
router.post("/mes", mesController.handle);

//Movimento
const movimentoController = new MovimentoController();
router.post("/movimento", movimentoController.handle);

export {router}