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
exports.VerificaPermissao = void 0;
const UsuarioRepositories_1 = require("../repositories/UsuarioRepositories");
const typeorm_1 = require("typeorm");
function VerificaPermissao(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user_id } = request;
        const usuarioRepositories = (0, typeorm_1.getCustomRepository)(UsuarioRepositories_1.UsuarioRepositories);
        const usuario = yield usuarioRepositories.findOne(user_id);
        // Verificar se usuario admin
        if (usuario === null || usuario === void 0 ? void 0 : usuario.admin) {
            return next();
        }
        return response.status(401).json({
            error: "Usuário sem premissão.",
        });
    });
}
exports.VerificaPermissao = VerificaPermissao;
