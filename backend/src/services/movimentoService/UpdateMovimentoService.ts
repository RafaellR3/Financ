import { getCustomRepository } from "typeorm";
import { MovimentoRepositories } from "../../repositories/MovimentoRepositories";

interface IMovimentoNovo{
    idmovimento: string;
    idmes: string;
    descricao: string;
    valor: number;
    tipo: number;
    datavencto: string;
}

interface IMovimentoCodigo{
    idmovimento: string;
}

interface IPagarMovimento{
    datapagto: string;
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

    async pagar({ idmovimento}: IMovimentoCodigo, { datapagto }: IPagarMovimento){
        const movimentoRepository = getCustomRepository(MovimentoRepositories);
    
        const movimento = await movimentoRepository.findOne({
            idmovimento
        });

        if (!movimento){
            throw new Error(`Não foi possível localizar o movimento de código ${idmovimento}!`);
        }
        await movimentoRepository.update({idmovimento}, {status: 1, datapagto: datapagto});

        return movimento;
    }    
    
    async desfazerPagamento({ idmovimento}: IMovimentoCodigo){
        const movimentoRepository = getCustomRepository(MovimentoRepositories);
    
        const movimento = await movimentoRepository.findOne({
            idmovimento
        });

        if (!movimento){
            throw new Error(`Não foi possível localizar o movimento de código ${idmovimento}!`);
        }
        await movimentoRepository.update({idmovimento}, {status: 0});

        return movimento;
    }
}

export{UpdateMovimentoService}