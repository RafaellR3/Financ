import {application, Router} from "express";
import { AutenticacaoUsuarioController} from "./controller/AutenticacaoUsuarioController";
import { Usuario } from "./entity/Usuario";
import { VerificaAutenticacao } from "./middleware/VerificaAutenticacao";
import { VerificaPermissao } from "./middleware/VerificaPermissao";
import mesRouter from "./routes/mes.routes";
import movimentoRouter from "./routes/movimento.route";
import usuarioRouter from "./routes/usuario.route";

const routes = Router();

//Autenticacao
const autenticacaoUsuarioController = new AutenticacaoUsuarioController();

routes.post("/Login", autenticacaoUsuarioController.handle);
routes.get("/VerificaPermissao", VerificaPermissao);
//routes.use(VerificaAutenticacao);

routes.use('/mes', mesRouter);
routes.use('/movimento', movimentoRouter);
routes.use('/usuario', usuarioRouter);

export default routes;







 

