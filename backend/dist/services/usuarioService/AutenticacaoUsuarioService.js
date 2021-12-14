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
exports.AutenticacaoUsuarioService = void 0;
const typeorm_1 = require("typeorm");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const UsuarioRepositories_1 = require("../../repositories/UsuarioRepositories");
class AutenticacaoUsuarioService {
    execute({ email, senha }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioRepositories = (0, typeorm_1.getCustomRepository)(UsuarioRepositories_1.UsuarioRepositories);
            const usuario = yield usuarioRepositories.findOne({
                email,
            });
            if (!usuario) {
                throw new Error("Email/senha incorreta");
            }
            const senhaMatch = yield (0, bcryptjs_1.compare)(senha, usuario.senha);
            if (!senhaMatch) {
                throw new Error("Email/Password incorrect");
            }
            const token = (0, jsonwebtoken_1.sign)({
                email: usuario.email,
            }, "c60791440436aa6dac1d6a7f7b84602a", //financrafaelr3
            {
                subject: usuario.idusuario,
                expiresIn: "1d",
            });
            return token;
        });
    }
}
exports.AutenticacaoUsuarioService = AutenticacaoUsuarioService;
