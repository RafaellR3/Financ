import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController';
import { AutenticacaoUsuarioController } from '../controller/AutenticacaoUsuarioController';

const usuarioRouter = Router();
const usuarioController = new UsuarioController();
const autenticarUsuarioController = new AutenticacaoUsuarioController();

usuarioRouter.post("/usuario",  usuarioController.handle);
usuarioRouter.get("/usuario/recuperarpornome",  usuarioController.RecuperarUsuarioPorNome);
usuarioRouter.get("/usuario/recuperartodos", usuarioController.RecuperarUsuarioTodos);
usuarioRouter.get("/usuario/Autenticar", autenticarUsuarioController.handle);

export default usuarioRouter;