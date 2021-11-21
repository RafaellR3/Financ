import {Router} from "express";
import { UsuarioController, ListUsuarioController } from "./controller/UsuarioController";
import { MesController } from "./controller/MesController";
import { MovimentoController } from "./controller/MovimentoController";

const router = Router();

//Usuario
const usuarioController = new UsuarioController();
const listUsuarioController = new ListUsuarioController();
router.post("/usuario", usuarioController.handle);
router.get("/usuario/recuperarpornome", listUsuarioController.RecuperarUsuarioPorNome);

//Mes
const mesController = new MesController();
router.post("/mes", mesController.handle);

//Movimento
const movimentoController = new MovimentoController();
router.post("/movimento", movimentoController.handle);

export {router}