import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController';

const usuarioRoute = Router();
const usuarioController = new UsuarioController();

usuarioRoute.post("/usuario",  usuarioController.handle);
usuarioRoute.get("/usuario/recuperarpornome",  usuarioController.RecuperarUsuarioPorNome);
usuarioRoute.get("/usuario/recuperartodos", usuarioController.RecuperarUsuarioTodos);

export default usuarioRoute;