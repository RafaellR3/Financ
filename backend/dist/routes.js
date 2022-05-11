"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AutenticacaoUsuarioController_1 = require("./controller/AutenticacaoUsuarioController");
const VerificaAutenticacao_1 = require("./middleware/VerificaAutenticacao");
const VerificaPermissao_1 = require("./middleware/VerificaPermissao");
const categoria_routes_1 = __importDefault(require("./routes/categoria.routes"));
const mes_routes_1 = __importDefault(require("./routes/mes.routes"));
const movimento_route_1 = __importDefault(require("./routes/movimento.route"));
const usuario_route_1 = __importDefault(require("./routes/usuario.route"));
const routes = (0, express_1.Router)();
//Autenticacao
const autenticacaoUsuarioController = new AutenticacaoUsuarioController_1.AutenticacaoUsuarioController();
routes.post("/Login", autenticacaoUsuarioController.handle);
routes.get("/VerificaPermissao", VerificaPermissao_1.VerificaPermissao);
routes.use(VerificaAutenticacao_1.VerificaAutenticacao);
routes.use('/mes', mes_routes_1.default);
routes.use('/movimento', movimento_route_1.default);
routes.use('/usuario', usuario_route_1.default);
routes.use('/categoria', categoria_routes_1.default);
exports.default = routes;
