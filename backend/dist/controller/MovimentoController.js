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
exports.MovimentoController = void 0;
const CreateMovimentoService_1 = require("../services/movimentoService/CreateMovimentoService");
const UpdateMovimentoService_1 = require("../services/movimentoService/UpdateMovimentoService");
const DeleteMovimentoService_1 = require("../services/movimentoService/DeleteMovimentoService");
const FindMovimentoService_1 = require("../services/movimentoService/FindMovimentoService");
class MovimentoController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idmes, descricao, valor, tipo, datavencto, idcategoria } = request.body;
            const createMovimentoService = new CreateMovimentoService_1.CreateMovimentoService();
            const movimento = yield createMovimentoService.execute({ idmes, descricao, valor, tipo, datavencto, idcategoria });
            return response.json(movimento);
        });
    }
    Editar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idmes, descricao, valor, tipo, datavencto, idcategoria } = request.body;
            const idmovimento = request.params.id;
            const updateMovimentoService = new UpdateMovimentoService_1.UpdateMovimentoService();
            const movimento = yield updateMovimentoService.execute({ idmovimento, idmes, descricao, valor, tipo, datavencto, idcategoria });
            return response.json(movimento);
        });
    }
    Deletar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const idmovimento = request.params.id;
            const deleteMovimentoService = new DeleteMovimentoService_1.DeleteMovimentoService();
            const movimento = yield deleteMovimentoService.execute({ idmovimento });
            return response.json(movimento);
        });
    }
    Pagar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const idmovimento = request.params.id;
            const { datapagto } = request.body;
            const updateMovimentoService = new UpdateMovimentoService_1.UpdateMovimentoService();
            const movimento = yield updateMovimentoService.pagar({ idmovimento }, { datapagto });
            return response.json(movimento);
        });
    }
    DesfazerPagamento(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const idmovimento = request.params.id;
            const updateMovimentoService = new UpdateMovimentoService_1.UpdateMovimentoService();
            const movimento = yield updateMovimentoService.desfazerPagamento({ idmovimento });
            return response.json(movimento);
        });
    }
    RecuperarMovimentoPorId(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const idmovimento = request.params.id;
            const recuperarMovimentoPorId = new FindMovimentoService_1.RecuperarMovimentoPorId();
            const movimentos = yield recuperarMovimentoPorId.execute(idmovimento);
            return response.json(movimentos);
        });
    }
    RecuperarMovimentoPorMes(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigoMes } = request.body;
            const recuperarMovimentoPorMes = new FindMovimentoService_1.RecuperarMovimentoPorMes();
            const movimentos = yield recuperarMovimentoPorMes.execute(codigoMes);
            return response.json(movimentos);
        });
    }
    RecuperarMovimentoPorTipo(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigoMes, tipo } = request.body;
            const recuperarMovimentoPorTipo = new FindMovimentoService_1.RecuperarMovimentoPorTipo();
            const movimentos = yield recuperarMovimentoPorTipo.execute(codigoMes, tipo);
            return response.json(movimentos);
        });
    }
    RecuperarMovimentoTodos(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const recuperarTodos = new FindMovimentoService_1.RecuperarTodos();
            const movimentos = yield recuperarTodos.execute();
            return response.json(movimentos);
        });
    }
    RecuperarDetalhesMovto(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const codigoMes = request.params.idmes;
            const recuperarDetalhesMovto = new FindMovimentoService_1.RecuperarDetalhesMovto();
            const movimentos = yield recuperarDetalhesMovto.execute(codigoMes);
            return response.json(movimentos);
        });
    }
    RecuperarSaidasPorCategoria(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const recuperarSaidasPorCategoria = new FindMovimentoService_1.RecuperarSaidasPorCategoria();
            const movimentos = yield recuperarSaidasPorCategoria.execute();
            return response.json(movimentos);
        });
    }
}
exports.MovimentoController = MovimentoController;
