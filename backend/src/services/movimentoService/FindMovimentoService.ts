import { getCustomRepository } from "typeorm";
import { MovimentoRepositories } from "../../repositories/MovimentoRepositories";
import {TipoMovimento} from "../../../src/entity/enum/Enums"

class RecuperarMovimentoPorMes {
    async execute(_idMes: string ) {

        const movimentoRepository = getCustomRepository(MovimentoRepositories);
        const movimentos = await movimentoRepository.find({
            where: { idmes: _idMes}
        })
        return movimentos;
    };
}

class RecuperarTodos {
    async execute() {

        const movimentoRepository = getCustomRepository(MovimentoRepositories);
        const movimentos = await movimentoRepository.find()
        return movimentos;
    };
}

class RecuperarMovimentoPorTipo {
    async execute(_idMes: string , _tipo : TipoMovimento) {

        const movimentoRepository = getCustomRepository(MovimentoRepositories);
        const movimentos = await movimentoRepository.find({
            where: { idmes: _idMes, tipo: _tipo}
        })
        return movimentos;
    };
}


export { RecuperarMovimentoPorMes }
export { RecuperarMovimentoPorTipo }
export { RecuperarTodos }