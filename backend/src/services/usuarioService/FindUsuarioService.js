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
exports.RecuperarTodos = exports.RecuperarUsuarioPorNome = void 0;
const typeorm_1 = require("typeorm");
const UsuarioRepositories_1 = require("../../repositories/UsuarioRepositories");
const typeorm_2 = require("typeorm");
class RecuperarUsuarioPorNome {
    execute(_nome) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioRepository = (0, typeorm_1.getCustomRepository)(UsuarioRepositories_1.UsuarioRepositories);
            const usuario = yield usuarioRepository.find({
                where: { nome: (0, typeorm_2.ILike)("%" + _nome + "%"), }
            });
            return usuario;
        });
    }
    ;
}
exports.RecuperarUsuarioPorNome = RecuperarUsuarioPorNome;
class RecuperarTodos {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioRepository = (0, typeorm_1.getCustomRepository)(UsuarioRepositories_1.UsuarioRepositories);
            const usuario = yield usuarioRepository.find();
            return usuario;
        });
    }
    ;
}
exports.RecuperarTodos = RecuperarTodos;
