import { getCustomRepository } from "typeorm";
import { StatusMovto, TipoMovimento } from "../../entity/enum/Enums";
import { Movimento } from "../../entity/Movimento";
import { MesRepositories } from "../../repositories/MesRepositories";
import { MovimentoRepositories } from "../../repositories/MovimentoRepositories";
import { CreateMovimentoService } from "../movimentoService/CreateMovimentoService";

interface IMesRequest{
    nome: string;
}

interface IMovimentoRequest{
    idmes: string;
    descricao: string;
    valor: number;
    tipo: TipoMovimento;
    datavencto: string;
    idcategoria: string;
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

class Copiar{
    async execute(_idmes: string, nome: string) {

        const movimentoRepository = getCustomRepository(MovimentoRepositories);
        const movimentos = await movimentoRepository.find({
            where: {idmes: _idmes } 
        })
        
        const createMesServico = new CreateMesService();
        const novoMes = await createMesServico.execute({nome});

        for (const item of movimentos) {  
            const createMovimentoService = new CreateMovimentoService();
            const novoMovimento = {} as IMovimentoRequest;
            novoMovimento.idmes = novoMes.idmes;
            novoMovimento.descricao = item.descricao;
            novoMovimento.valor = item.valor;
            novoMovimento.tipo = item.tipo;
            novoMovimento.datavencto = item.datavencto.toString();
            novoMovimento.idcategoria = item.idcategoria;

            const movimento = await createMovimentoService.execute(novoMovimento
            );
          }
        return novoMes
    };


}

export{CreateMesService}
export{Copiar}