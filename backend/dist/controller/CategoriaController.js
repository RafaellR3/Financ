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
exports.CategoriaController = void 0;
const FindCategoriaService_1 = require("../services/categoriaService/FindCategoriaService");
class CategoriaController {
    RecuperarCategoriaPorTipo(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipo = request.params.tipo;
            const recuperarCategoriaPorNome = new FindCategoriaService_1.RecuperarCategoriaPorTipo();
            const categoria = yield recuperarCategoriaPorNome.execute(tipo);
            return response.json(categoria);
        });
    }
    RecuperarCategoriaTodos(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const recuperarTodos = new FindCategoriaService_1.RecuperarTodos();
            const categoria = yield recuperarTodos.execute();
            return response.json(categoria);
        });
    }
}
exports.CategoriaController = CategoriaController;
