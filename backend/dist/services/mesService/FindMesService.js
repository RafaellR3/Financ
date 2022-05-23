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
exports.RecuperarFechamentoMes = exports.RecuperarPorCodigo = exports.RecuperarTodos = void 0;
const typeorm_1 = require("typeorm");
const Movimento_1 = require("../../entity/Movimento");
const MesRepositories_1 = require("../../repositories/MesRepositories");
class RecuperarTodos {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const mesRepository = (0, typeorm_1.getCustomRepository)(MesRepositories_1.MesRepositories);
            const mes = yield mesRepository.find();
            return mes;
        });
    }
    ;
}
exports.RecuperarTodos = RecuperarTodos;
class RecuperarPorCodigo {
    execute(_idmes) {
        return __awaiter(this, void 0, void 0, function* () {
            const mesRepository = (0, typeorm_1.getCustomRepository)(MesRepositories_1.MesRepositories);
            const mes = yield mesRepository.findOne({
                where: { idmes: _idmes }
            });
            return mes;
        });
    }
    ;
}
exports.RecuperarPorCodigo = RecuperarPorCodigo;
class RecuperarFechamentoMes {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const dados = yield (0, typeorm_1.getCustomRepository)(MesRepositories_1.MesRepositories)
                .createQueryBuilder("mes")
                .innerJoinAndSelect(Movimento_1.Movimento, "movimento", "movimento.idmes = mes.idmes")
                .select("mes.nome")
                .addSelect("SUM(case when movimento.tipo = '0' then movimento.valor end)", "entradas")
                .addSelect("SUM(case when movimento.tipo = '1' then movimento.valor end)", "saidas")
                .groupBy("mes.nome")
                .groupBy("mes.idmes")
                .orderBy("mes.idmes", "ASC")
                .limit(6)
                .getRawMany();
            return dados;
        });
    }
    ;
}
exports.RecuperarFechamentoMes = RecuperarFechamentoMes;
