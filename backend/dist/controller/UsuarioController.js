"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const CreateUsuarioService_1 = require("../services/usuarioService/CreateUsuarioService");
const FindUsuarioService_1 = require("../services/usuarioService/FindUsuarioService");
class UsuarioController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, senha, admin } = request.body;
            const createUsuarioServico = new CreateUsuarioService_1.CreateUsuarioService();
            const usuario = yield createUsuarioServico.execute({ nome, email, senha, admin });
            return response.json(usuario);
        });
    }
    RecuperarUsuarioPorNome(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome } = request.body;
            const recuperarUsuarioPorNome = new FindUsuarioService_1.RecuperarUsuarioPorNome();
            const usuario = yield recuperarUsuarioPorNome.execute(nome);
            return response.json(usuario);
        });
    }
    RecuperarUsuarioTodos(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const recuperarTodos = new FindUsuarioService_1.RecuperarTodos();
            const usuario = yield recuperarTodos.execute();
            return response.json(usuario);
        });
    }
}
exports.UsuarioController = UsuarioController;
