import { getCustomRepository } from "typeorm";
import { MesRepositories } from "../../repositories/MesRepositories";

class RecuperarTodos {
    async execute() {

        const mesRepository = getCustomRepository(MesRepositories);
        const mes = await mesRepository.find()
        return mes;
    };
}

class RecuperarPorCodigo {
    async execute(_idmes: string) {

        const mesRepository = getCustomRepository(MesRepositories);
        const mes = await mesRepository.find({
            where: {idmes: _idmes } 
        })
        return mes;
    };
}

export { RecuperarTodos }
export { RecuperarPorCodigo }