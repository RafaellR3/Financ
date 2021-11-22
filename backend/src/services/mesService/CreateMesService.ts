import { getCustomRepository } from "typeorm";
import { MesRepositories } from "../../repositories/MesRepositories";

interface IMesRequest{
    nome: string;
}

class CreateMesService{
    async execute({ nome}: IMesRequest){
        const mesRepository = getCustomRepository(MesRepositories);
        if (!nome){
            throw new Error("Nome incorreto!");
        }

        const mesAlreadyExists = await mesRepository.findOne({
            nome
        });

        if (mesAlreadyExists){
            throw new Error("Mês já existe!");
        }
        
        const mes = mesRepository.create({
            nome
        });

        await mesRepository.save(mes);

        return mes;
    }
}

export{CreateMesService}