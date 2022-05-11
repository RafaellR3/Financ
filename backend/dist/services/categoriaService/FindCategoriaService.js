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
exports.RecuperarTodos = exports.RecuperarCategoriaPorTipo = void 0;
const typeorm_1 = require("typeorm");
const CategoriaRepositories_1 = require("../../repositories/CategoriaRepositories");
class RecuperarCategoriaPorTipo {
    execute(tipo) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaRepository = (0, typeorm_1.getCustomRepository)(CategoriaRepositories_1.CategoriaRepositories);
            const categoria = yield categoriaRepository.find({
                where: { tipo: tipo }
            });
            return categoria;
        });
    }
    ;
}
exports.RecuperarCategoriaPorTipo = RecuperarCategoriaPorTipo;
class RecuperarTodos {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaRepository = (0, typeorm_1.getCustomRepository)(CategoriaRepositories_1.CategoriaRepositories);
            const categoria = yield categoriaRepository.find();
            return categoria;
        });
    }
    ;
}
exports.RecuperarTodos = RecuperarTodos;
