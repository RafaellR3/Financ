"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AutenticacaoUsuarioController_1 = require("./controller/AutenticacaoUsuarioController");
const mes_routes_1 = __importDefault(require("./routes/mes.routes"));
const routes = (0, express_1.Router)();
//Autenticacao
const autenticacaoUsuarioController = new AutenticacaoUsuarioController_1.AutenticacaoUsuarioController();
routes.use('/mes', mes_routes_1.default);
exports.default = routes;
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
