import {Router} from "express";
import { UsuarioController, 
         ListUsuarioTodosController, 
         ListUsurioPorNomeController } from "./controller/UsuarioController";
import { MesController } from "./controller/MesController";
import { MovimentoController } from "./controller/MovimentoController";

const router = Router();

//Usuario
const usuarioController = new UsuarioController();
const listUsurioPorNomeController = new ListUsurioPorNomeController();
const listUsuarioTodosController = new ListUsuarioTodosController();
router.post("/usuario", usuarioController.handle);
router.get("/usuario/recuperarpornome", listUsurioPorNomeController.RecuperarUsuarioPorNome);
router.get("/usuario/recuperartodos", listUsuarioTodosController.RecuperarUsuarioTodos);

//Mes
const mesController = new MesController();
router.post("/mes", mesController.handle);

//Movimento
const movimentoController = new MovimentoController();
router.post("/movimento", movimentoController.handle);

export {router}