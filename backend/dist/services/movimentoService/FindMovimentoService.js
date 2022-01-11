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
exports.RecuperarMovimentoPorId = exports.RecuperarDetalhesMovto = exports.RecuperarTodos = exports.RecuperarMovimentoPorTipo = exports.RecuperarMovimentoPorMes = void 0;
const typeorm_1 = require("typeorm");
const MovimentoRepositories_1 = require("../../repositories/MovimentoRepositories");
const Enums_1 = require("../../entity/enum/Enums");
class RecuperarMovimentoPorId {
    execute(_idMovimento) {
        return __awaiter(this, void 0, void 0, function* () {
            const movimentoRepository = (0, typeorm_1.getCustomRepository)(MovimentoRepositories_1.MovimentoRepositories);
            const movimento = yield movimentoRepository.findOne({
                where: { idmovimento: _idMovimento }
            });
            return movimento;
        });
    }
    ;
}
exports.RecuperarMovimentoPorId = RecuperarMovimentoPorId;
class RecuperarMovimentoPorMes {
    execute(_idMes) {
        return __awaiter(this, void 0, void 0, function* () {
            const movimentoRepository = (0, typeorm_1.getCustomRepository)(MovimentoRepositories_1.MovimentoRepositories);
            const movimentos = yield movimentoRepository.find({
                where: { idmes: _idMes }
            });
            return movimentos;
        });
    }
    ;
}
exports.RecuperarMovimentoPorMes = RecuperarMovimentoPorMes;
class RecuperarTodos {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const movimentoRepository = (0, typeorm_1.getCustomRepository)(MovimentoRepositories_1.MovimentoRepositories);
            const movimentos = yield movimentoRepository.find();
            return movimentos;
        });
    }
    ;
}
exports.RecuperarTodos = RecuperarTodos;
class RecuperarMovimentoPorTipo {
    execute(idMes, tipo) {
        return __awaiter(this, void 0, void 0, function* () {
            const movimentoRepository = (0, typeorm_1.getCustomRepository)(MovimentoRepositories_1.MovimentoRepositories);
            const movimentos = yield movimentoRepository.find({
                where: { idmes: idMes, tipo: tipo }
            });
            return movimentos;
        });
    }
    ;
}
exports.RecuperarMovimentoPorTipo = RecuperarMovimentoPorTipo;
class RecuperarDetalhesMovto {
    execute(_idMes) {
        return __awaiter(this, void 0, void 0, function* () {
            const movimentoRepository = (0, typeorm_1.getCustomRepository)(MovimentoRepositories_1.MovimentoRepositories);
            const movimentos = yield movimentoRepository.find({
                where: { idmes: _idMes },
            });
            const detalhes = {};
            detalhes.idmes = _idMes;
            detalhes.Entradas = (yield movimentos).filter(movimento => movimento.tipo === Enums_1.TipoMovimento.Entrada).sort((a, b) => 1 - 2);
            detalhes.Saidas = (yield movimentos).filter(movimento => movimento.tipo === Enums_1.TipoMovimento.Saida).sort((a, b) => 1 - 2);
            var valoresEntrada = detalhes.Entradas.map(function (movimento) {
                return movimento.valor.toString();
            });
            var valoresSaidas = detalhes.Saidas.map(function (movimento) {
                return movimento.valor.toString();
            });
            var valoresPagos = (yield detalhes.Saidas).filter(movimento => movimento.status === Enums_1.StatusMovto.pago).map(function (movimento) {
                return movimento.valor.toString();
            });
            var totalEntradas = 0;
            var totalSaidas = 0;
            var totalPagos = 0;
            valoresEntrada.forEach(item => {
                totalEntradas += parseFloat(item);
            });
            valoresSaidas.forEach(item => {
                totalSaidas += parseFloat(item);
            });
            valoresPagos.forEach(item => {
                totalPagos += parseFloat(item);
            });
            detalhes.totalEntradas = totalEntradas;
            detalhes.totalSaidas = totalSaidas;
            detalhes.totalPago = totalPagos;
            detalhes.saldoAtual = totalEntradas - totalPagos;
            return detalhes;
        });
    }
    ;
}
exports.RecuperarDetalhesMovto = RecuperarDetalhesMovto;
