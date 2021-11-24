import { getCustomRepository } from "typeorm";
import { Mes } from "../../entity/Mes";
import { MovimentoRepositories } from "../../repositories/MovimentoRepositories";

interface IMovimentoNovo{
    idmovimento: string;
    idmes: string;
    descricao: string;
    valor: number;
    tipo: number;
    datavencto: Date;
}

interface IMovimentoCodigo{
    idmovimento: string;
}

class UpdateMovimentoService{
    async execute({  idmovimento, idmes, descricao, valor, tipo, datavencto}: IMovimentoNovo){
        const movimentoRepository = getCustomRepository(MovimentoRepositories);
        if (!descricao){
            throw new Error("Informe uma descrição!");
        }

        const movimento = await movimentoRepository.findOne({
            idmovimento
        });

        if (!movimento){
            throw new Error(`Não foi possível localizar o movimento de código ${idmovimento}!`);
        }
        
        await movimentoRepository.update({idmovimento}, 
            {
                descricao: descricao, 
                idmes: idmes, 
                valor: valor,
                tipo: tipo,
                datavencto: datavencto
            });

        return movimento;
    }

    async pagar({ idmovimento}: IMovimentoCodigo){
        const movimentoRepository = getCustomRepository(MovimentoRepositories);
    
        const movimento = await movimentoRepository.findOne({
            idmovimento
        });

        if (!movimento){
            throw new Error(`Não foi possível localizar o movimento de código ${idmovimento}!`);
        }
        await movimentoRepository.update({idmovimento}, {status: 1, datapagto: Date.now()});

        return movimento;
    }
}

export{UpdateMovimentoService}