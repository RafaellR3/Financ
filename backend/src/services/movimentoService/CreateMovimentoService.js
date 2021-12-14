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
exports.CreateMovimentoService = void 0;
const typeorm_1 = require("typeorm");
const MovimentoRepositories_1 = require("../../repositories/MovimentoRepositories");
class CreateMovimentoService {
    execute({ idmes, descricao, valor, tipo, datavencto }) {
        return __awaiter(this, void 0, void 0, function* () {
            const movimentoRepository = (0, typeorm_1.getCustomRepository)(MovimentoRepositories_1.MovimentoRepositories);
            if (!descricao) {
                throw new Error("Informe uma descrição!");
            }
            const movimentoAlreadyExists = yield movimentoRepository.findOne({
                idmes, descricao
            });
            if (movimentoAlreadyExists) {
                throw new Error("Movimento já existe!");
            }
            const movimento = movimentoRepository.create({
                idmes, descricao, valor, tipo, datavencto
            });
            yield movimentoRepository.save(movimento);
            return movimento;
        });
    }
}
exports.CreateMovimentoService = CreateMovimentoService;
