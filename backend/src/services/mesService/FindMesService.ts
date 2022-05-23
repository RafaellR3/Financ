import { getCustomRepository } from "typeorm";
import { Movimento } from "../../entity/Movimento";
import { MesRepositories } from "../../repositories/MesRepositories";

class RecuperarTodos {
    async execute() {

        const mesRepository = getCustomRepository(MesRepositories);
        const mes = await mesRepository.find({ order:{seq: "ASC" }})
        return mes;
    };
}

class RecuperarPorCodigo {
    async execute(_idmes: string) {

        const mesRepository = getCustomRepository(MesRepositories);
        const mes = await mesRepository.findOne({
            where: {idmes: _idmes } 
        })
        return mes;
    };
}

class RecuperarFechamentoMes {
    async execute() {
        const dados = await getCustomRepository(MesRepositories)
                                .createQueryBuilder("mes")
                                .innerJoinAndSelect(Movimento, "movimento", "movimento.idmes = mes.idmes")
                                .select("mes.nome")
                                .addSelect("mes.seq")
                                .addSelect("SUM(case when movimento.tipo = '0' then movimento.valor end)", "entradas")
                                .addSelect("SUM(case when movimento.tipo = '1' then movimento.valor end)", "saidas")
                                .groupBy("mes.nome")
                                .groupBy("mes.idmes")
                                .orderBy("mes.seq", "ASC")
                                .limit(6)
                                .getRawMany();
        return dados;
    };
}

export { RecuperarTodos }
export { RecuperarPorCodigo }
export { RecuperarFechamentoMes }