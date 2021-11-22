import {Router} from "express";
import { UsuarioController} from "./controller/UsuarioController";
import { MesController } from "./controller/MesController";
import { MovimentoController } from "./controller/MovimentoController";

const router = Router();

//Usuario
const usuarioController = new UsuarioController();
router.post("/usuario", usuarioController.handle);
router.get("/usuario/recuperarpornome", usuarioController.RecuperarUsuarioPorNome);
router.get("/usuario/recuperartodos", usuarioController.RecuperarUsuarioTodos);

//Mes
const mesController = new MesController();
router.post("/mes", mesController.handle);

//Movimento
const movimentoController = new MovimentoController();
router.post("/movimento", movimentoController.handle);
router.get("/movimento/RecuperarTodos", movimentoController.RecuperarMovimentoTodos);
router.get("/movimento/RecuperarPorMes", movimentoController.RecuperarMovimentoPorMes);
router.get("/movimento/RecuperarPorTipo", movimentoController.RecuperarMovimentoPorTipo);

export {router}