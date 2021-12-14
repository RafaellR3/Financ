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
exports.CreateUsuarioService = void 0;
const typeorm_1 = require("typeorm");
const UsuarioRepositories_1 = require("../../repositories/UsuarioRepositories");
const bcryptjs_1 = require("bcryptjs");
class CreateUsuarioService {
    execute({ nome, email, senha, admin = false }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioRepository = (0, typeorm_1.getCustomRepository)(UsuarioRepositories_1.UsuarioRepositories);
            if (!email) {
                throw new Error("Email incorreto!");
            }
            const usuarioAlreadyExists = yield usuarioRepository.findOne({
                email
            });
            if (usuarioAlreadyExists) {
                throw new Error("Usuário já existe!");
            }
            const senhaHash = yield (0, bcryptjs_1.hash)(senha, 8);
            const usuario = usuarioRepository.create({
                nome,
                email,
                senha: senhaHash,
                admin
            });
            yield usuarioRepository.save(usuario);
            return usuario;
        });
    }
}
exports.CreateUsuarioService = CreateUsuarioService;
