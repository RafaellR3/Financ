import { getCustomRepository } from "typeorm";
import { StatusMovto, TipoMovimento } from "../../entity/enum/Enums";
import { MovimentoRepositories } from "../../repositories/MovimentoRepositories";

interface IMovimentoNovo{
    idmovimento: string;
    idmes: string;
    descricao: string;
    valor: number;
    tipo: TipoMovimento;
    datavencto: string;
    idcategoria: string;
}

interface IMovimentoCodigo{
    idmovimento: string;
}

interface IPagarMovimento{
    datapagto: string;
}

class UpdateMovimentoService{
    async execute({  idmovimento, idmes, descricao, valor, tipo, datavencto, idcategoria}: IMovimentoNovo){
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
                datavencto: datavencto,
                idcategoria: idcategoria
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
        await movimentoRepository.update({idmovimento}, {status: StatusMovto.pago, datapagto: datapagto});

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
        await movimentoRepository.update({idmovimento}, {status: StatusMovto.Aberto});

        return movimento;
    }
}

export{UpdateMovimentoService}