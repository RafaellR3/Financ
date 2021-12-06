import {application, Router} from "express";
import { AutenticacaoUsuarioController} from "./controller/AutenticacaoUsuarioController";
import { UsuarioController} from "./controller/UsuarioController";
import { MesController } from "./controller/MesController";
import { MovimentoController } from "./controller/MovimentoController";
import { VerificaAutenticacao } from "./middleware/VerificaAutenticacao";
import { VerificaPermissao } from "./middleware/VerificaPermissao";

const router = Router();

//Autenticacao
const autenticacaoUsuarioController = new AutenticacaoUsuarioController();
router.post("/Login", autenticacaoUsuarioController.handle);

//router.use(VerificaAutenticacao);

router.get("/VerificaPermissao", VerificaPermissao);

//Usuario
const usuarioController = new UsuarioController();
router.post("/usuario",  usuarioController.handle);
router.get("/usuario/recuperarpornome",  usuarioController.RecuperarUsuarioPorNome);
router.get("/usuario/recuperartodos", usuarioController.RecuperarUsuarioTodos);

//Mes
const mesController = new MesController();
router.post("/mes", mesController.handle);
router.get("/mes/recuperartodos", mesController.RecuperarTodos);

//Movimento
const movimentoController = new MovimentoController();
router.post("/movimento", movimentoController.handle);
router.put("/movimento/editar/:id", movimentoController.Editar);
router.put("/movimento/pagar/:id", movimentoController.Pagar);
router.put("/movimento/desfazerpagamento/:id", movimentoController.DesfazerPagamento);
router.get("/movimento/RecuperarTodos", movimentoController.RecuperarMovimentoTodos);
router.get("/movimento/RecuperarMovimentoPorId/:id", movimentoController.RecuperarMovimentoPorId);
router.get("/movimento/RecuperarPorMes", movimentoController.RecuperarMovimentoPorMes);
router.get("/movimento/RecuperarPorTipo", movimentoController.RecuperarMovimentoPorTipo);
router.get("/movimento/RecuperarDetalhesMovto/:idmes", movimentoController.RecuperarDetalhesMovto);

export {router}