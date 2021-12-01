import { Double, getCustomRepository } from "typeorm";
import { MovimentoRepositories } from "../../repositories/MovimentoRepositories";
import { StatusMovto, TipoMovimento } from "../../../src/entity/enum/Enums";
import { Movimento } from "../../entity/Movimento";

interface IMovimento {
    idmovimento: string;
    descricao: string;
    tipo: TipoMovimento;
    valor: number;
    status: StatusMovto;
    DataVencto: Date;
}

interface IListaDetalhes {
    idmes: string;
    totalEntradas: number;
    totalSaidas: number;
    totalPago: number;
    saldoAtual: number;
    faltaPagar: number;
    Entradas: Movimento[];
    Saidas: Movimento[];

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
        const recuperarMovimentoPorMes = new RecuperarMovimentoPorMes();
        const movimentoRepository = getCustomRepository(MovimentoRepositories);
        const movimentos = await movimentoRepository.find({
            where: { idmes: _idMes }
        })

        if (movimentos.length <= 0) {
            throw new Error(`Não foi possível localizar o movimentos no mês ${_idMes}!`);
        }

        const detalhes = {} as IListaDetalhes;
        detalhes.idmes = _idMes;
        detalhes.Entradas = (await movimentos).filter(movimento => movimento.tipo === TipoMovimento.Entrada);
        detalhes.Saidas = (await movimentos).filter(movimento => movimento.tipo === TipoMovimento.Saida);

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