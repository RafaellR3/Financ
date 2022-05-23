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
exports.Copiar = exports.CreateMesService = void 0;
const typeorm_1 = require("typeorm");
const MesRepositories_1 = require("../../repositories/MesRepositories");
const MovimentoRepositories_1 = require("../../repositories/MovimentoRepositories");
const CreateMovimentoService_1 = require("../movimentoService/CreateMovimentoService");
class CreateMesService {
    execute({ nome }) {
        return __awaiter(this, void 0, void 0, function* () {
            const mesRepository = (0, typeorm_1.getCustomRepository)(MesRepositories_1.MesRepositories);
            if (!nome) {
                throw new Error("Nome incorreto!");
            }
            const mesAlreadyExists = yield mesRepository.findOne({
                nome
            });
            if (mesAlreadyExists) {
                throw new Error("Mês já existe!");
            }
            const mes = mesRepository.create({
                nome
            });
            yield mesRepository.save(mes);
            return mes;
        });
    }
}
exports.CreateMesService = CreateMesService;
class Copiar {
    execute(_idmes, nome) {
        return __awaiter(this, void 0, void 0, function* () {
            const movimentoRepository = (0, typeorm_1.getCustomRepository)(MovimentoRepositories_1.MovimentoRepositories);
            const movimentos = yield movimentoRepository.find({
                where: { idmes: _idmes }
            });
            const createMesServico = new CreateMesService();
            const novoMes = yield createMesServico.execute({ nome });
            for (const item of movimentos) {
                const createMovimentoService = new CreateMovimentoService_1.CreateMovimentoService();
                const novoMovimento = {};
                novoMovimento.idmes = novoMes.idmes;
                novoMovimento.descricao = item.descricao;
                novoMovimento.valor = item.valor;
                novoMovimento.tipo = item.tipo;
                novoMovimento.datavencto = item.datavencto.toString();
                novoMovimento.idcategoria = item.idcategoria;
                const movimento = yield createMovimentoService.execute(novoMovimento);
            }
            return novoMes;
        });
    }
    ;
}
exports.Copiar = Copiar;
