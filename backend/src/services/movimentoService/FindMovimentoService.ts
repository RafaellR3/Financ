import { Double, getCustomRepository } from "typeorm";
import { MovimentoRepositories } from "../../repositories/MovimentoRepositories";
import { StatusMovto, TipoMovimento } from "../../entity/enum/Enums";
import { Movimento } from "../../entity/Movimento";
import { Categoria } from "../../entity/Categoria";
import { CategoriaRepositories } from "../../repositories/CategoriaRepositories";

interface IMovimento {
    idmovimento: string;
    descricao: string;
    tipo: TipoMovimento;
    valor: number;
    status: StatusMovto;
    datavencto: Date;
    idcategoria: string;
    categoria: Categoria;
}

interface ICategoria{
    idcategoria: string;
    descricao: string;
    tipo: TipoMovimento;
}

interface IListaDetalhes {
    idmes: string;
    totalEntradas: number;
    totalSaidas: number;
    totalPago: number;
    saldoAtual: number;
    faltaPagar: number;
    Entradas: IMovimento[];
    Saidas: IMovimento[];

    
}

class RecuperarMovimentoPorId {
    async execute(_idMovimento: string) {

        const movimentoRepository = getCustomRepository(MovimentoRepositories);
        const movimento = await movimentoRepository.findOne({
            where: { idmovimento: _idMovimento }
        })
        return movimento;
    };
}
class RecuperarMovimentoPorMes {
    async execute(_idMes: string) {

        const movimentoRepository = getCustomRepository(MovimentoRepositories);
        const movimentos = await movimentoRepository.find({
            where: { idmes: _idMes }
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
    async execute(idMes: string, tipo: TipoMovimento) {

        const movimentoRepository = getCustomRepository(MovimentoRepositories);
        const movimentos = await movimentoRepository.find({
            where: { idmes: idMes, tipo: tipo }
        })
        return movimentos;
    };
}

class RecuperarDetalhesMovto {

    async execute(_idMes: string) {
        const movimentoRepository = getCustomRepository(MovimentoRepositories);
        const movimentos = await movimentoRepository.find({relations:["categoria"],  where: { idmes: _idMes }
        })

        const detalhes = {} as IListaDetalhes;
        detalhes.idmes = _idMes;
        detalhes.Entradas = (await movimentos).filter(movimento => movimento.tipo === TipoMovimento.Entrada).sort((a, b) => 1 - 2)
        detalhes.Saidas = (await movimentos).filter(movimento => movimento.tipo === Number(TipoMovimento.Saida)).sort((a, b) => 1 - 2);

        var valoresEntrada = detalhes.Entradas.map(function (movimento) {
            return movimento.valor.toString()
        });
        var valoresSaidas = detalhes.Saidas.map(function (movimento) {
            return movimento.valor.toString()
        });
        
        var valoresPagos = (await detalhes.Saidas).filter(movimento => movimento.status === StatusMovto.pago ).map(function (movimento) {
            return movimento.valor.toString()
        });

        var totalEntradas = 0;
        var totalSaidas = 0;
        var totalPagos = 0;

        valoresEntrada.forEach(item => {
            totalEntradas += parseFloat(item);
        });
        valoresSaidas.forEach(item => {
            totalSaidas += parseFloat(item);
        });
        valoresPagos.forEach(item => {
            totalPagos += parseFloat(item);
        });

         detalhes.totalEntradas = totalEntradas;
         detalhes.totalSaidas = totalSaidas;
         detalhes.totalPago = totalPagos;
         detalhes.saldoAtual = totalEntradas - totalPagos;
        return detalhes;
    };
}
export { RecuperarMovimentoPorMes }
export { RecuperarMovimentoPorTipo }
export { RecuperarTodos }
export { RecuperarDetalhesMovto }
export { RecuperarMovimentoPorId }