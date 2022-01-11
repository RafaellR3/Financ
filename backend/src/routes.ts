import {application, Router} from "express";
import { AutenticacaoUsuarioController} from "./controller/AutenticacaoUsuarioController";
import mesRouter from "./routes/mes.routes";

const routes = Router();

//Autenticacao
const autenticacaoUsuarioController = new AutenticacaoUsuarioController();

routes.use('/mes', mesRouter);

export default routes;

/* router.post("/Login", autenticacaoUsuarioController.handle);

//router.use(VerificaAutenticacao);

router.get("/VerificaPermissao", VerificaPermissao);

//Usuario
const usuarioController = new UsuarioController();
router.post("/usuario",  usuarioController.handle);
router.get("/usuario/recuperarpornome",  usuarioController.RecuperarUsuarioPorNome);
router.get("/usuario/recuperartodos", usuarioController.RecuperarUsuarioTodos);

//Movimento
const movimentoController = new MovimentoController();
router.post("/movimento", movimentoController.handle);
router.put("/movimento/editar/:id", movimentoController.Editar);
router.put("/movimento/deletar/:id", movimentoController.Deletar);
router.put("/movimento/pagar/:id", movimentoController.Pagar);
router.put("/movimento/desfazerpagamento/:id", movimentoController.DesfazerPagamento);
router.get("/movimento/RecuperarTodos", movimentoController.RecuperarMovimentoTodos);
router.get("/movimento/RecuperarMovimentoPorId/:id", movimentoController.RecuperarMovimentoPorId);
router.get("/movimento/RecuperarPorMes", movimentoController.RecuperarMovimentoPorMes);
router.get("/movimento/RecuperarPorTipo", movimentoController.RecuperarMovimentoPorTipo);
router.get("/movimento/RecuperarDetalhesMovto/:idmes", movimentoController.RecuperarDetalhesMovto); */

