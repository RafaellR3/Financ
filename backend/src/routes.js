"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const AutenticacaoUsuarioController_1 = require("./controller/AutenticacaoUsuarioController");
const UsuarioController_1 = require("./controller/UsuarioController");
const MesController_1 = require("./controller/MesController");
const MovimentoController_1 = require("./controller/MovimentoController");
const VerificaPermissao_1 = require("./middleware/VerificaPermissao");
const router = (0, express_1.Router)();
exports.router = router;
//Autenticacao
const autenticacaoUsuarioController = new AutenticacaoUsuarioController_1.AutenticacaoUsuarioController();
router.post("/Login", autenticacaoUsuarioController.handle);
//router.use(VerificaAutenticacao);
router.get("/VerificaPermissao", VerificaPermissao_1.VerificaPermissao);
//Usuario
const usuarioController = new UsuarioController_1.UsuarioController();
router.post("/usuario", usuarioController.handle);
router.get("/usuario/recuperarpornome", usuarioController.RecuperarUsuarioPorNome);
router.get("/usuario/recuperartodos", usuarioController.RecuperarUsuarioTodos);
//Mes
const mesController = new MesController_1.MesController();
router.post("/mes", mesController.handle);
router.get("/mes/recuperartodos", mesController.RecuperarTodos);
//Movimento
const movimentoController = new MovimentoController_1.MovimentoController();
router.post("/movimento", movimentoController.handle);
router.put("/movimento/editar/:id", movimentoController.Editar);
router.put("/movimento/deletar/:id", movimentoController.Deletar);
router.put("/movimento/pagar/:id", movimentoController.Pagar);
router.put("/movimento/desfazerpagamento/:id", movimentoController.DesfazerPagamento);
router.get("/movimento/RecuperarTodos", movimentoController.RecuperarMovimentoTodos);
router.get("/movimento/RecuperarMovimentoPorId/:id", movimentoController.RecuperarMovimentoPorId);
router.get("/movimento/RecuperarPorMes", movimentoController.RecuperarMovimentoPorMes);
router.get("/movimento/RecuperarPorTipo", movimentoController.RecuperarMovimentoPorTipo);
router.get("/movimento/RecuperarDetalhesMovto/:idmes", movimentoController.RecuperarDetalhesMovto);
