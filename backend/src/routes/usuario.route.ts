import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController';
import { AutenticacaoUsuarioController } from '../controller/AutenticacaoUsuarioController';

const usuarioRouter = Router();
const usuarioController = new UsuarioController();
const autenticarUsuarioController = new AutenticacaoUsuarioController();

usuarioRouter.post("/",  usuarioController.handle);
usuarioRouter.get("/recuperarpornome",  usuarioController.RecuperarUsuarioPorNome);
usuarioRouter.get("/recuperartodos", usuarioController.RecuperarUsuarioTodos);
usuarioRouter.get("/Autenticar", autenticarUsuarioController.handle);

export default usuarioRouter;