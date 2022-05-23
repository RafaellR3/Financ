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
exports.MesController = void 0;
const CreateMesService_1 = require("../services/mesService/CreateMesService");
const FindMesService_1 = require("../services/mesService/FindMesService");
class MesController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome } = request.body;
            const createMesServico = new CreateMesService_1.CreateMesService();
            const mes = yield createMesServico.execute({ nome });
            return response.json(mes);
        });
    }
    Copiar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { descricao } = request.body;
            const idmes = request.params.id;
            const copiar = new CreateMesService_1.Copiar();
            const mes = yield copiar.execute(idmes, descricao);
            return response.json(mes);
        });
    }
    RecuperarPorCodigo(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const idmes = request.params.id;
            const recuperarPorCodigo = new FindMesService_1.RecuperarPorCodigo();
            const mes = yield recuperarPorCodigo.execute(idmes);
            return response.json(mes);
        });
    }
    RecuperarTodos(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const recuperarTodos = new FindMesService_1.RecuperarTodos();
            const mes = yield recuperarTodos.execute();
            return response.json(mes);
        });
    }
    RecuperarFechamentoMes(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const recuperarFechamentoMes = new FindMesService_1.RecuperarFechamentoMes();
            const mes = yield recuperarFechamentoMes.execute();
            return response.json(mes);
        });
    }
}
exports.MesController = MesController;
