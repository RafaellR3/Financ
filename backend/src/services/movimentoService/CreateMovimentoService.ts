import { getCustomRepository } from "typeorm";
import { TipoMovimento } from "../../entity/enum/Enums";
import { MovimentoRepositories } from "../../repositories/MovimentoRepositories";

interface IMovimentoRequest{
    idmes: string;
    descricao: string;
    valor: number;
    tipo: TipoMovimento;
    datavencto: string;
    idcategoria: string;
}

class CreateMovimentoService{
    async execute({  idmes, descricao, valor, tipo, datavencto, idcategoria}: IMovimentoRequest){
        const movimentoRepository = getCustomRepository(MovimentoRepositories);
        if (!descricao){ throw new Error("Informe uma descrição!"); }
        if (!valor){ throw new Error("Informe um valor!"); }
        if (!idcategoria){ throw new Error("Não foi informado nenhama categoria!"); }

        const movimentoAlreadyExists = await movimentoRepository.findOne({
            idmes, descricao
        });

        if (movimentoAlreadyExists){
            throw new Error("Movimento já existe!");
        }
        
        const movimento = movimentoRepository.create({
            idmes, descricao, valor, tipo, datavencto, idcategoria
        });

        await movimentoRepository.save(movimento);

        return movimento;
    }
}

export{CreateMovimentoService}