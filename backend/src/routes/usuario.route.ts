import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController';

const usuarioRouter = Router();
const usuarioController = new UsuarioController();

usuarioRouter.post("/usuario",  usuarioController.handle);
usuarioRouter.get("/usuario/recuperarpornome",  usuarioController.RecuperarUsuarioPorNome);
usuarioRouter.get("/usuario/recuperartodos", usuarioController.RecuperarUsuarioTodos);

export default usuarioRouter;