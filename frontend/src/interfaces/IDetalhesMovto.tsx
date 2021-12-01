export interface IDetalhesMovto{
    totalEntradas: number;
    totalSaidas: number;
    totalPago: number;
    saldoAtual: number;
    faltaPagar: number;
    Entradas: IMovimento[];
    Saidas: IMovimento[];
}

export interface IMovimento{
    idmovimento: string;
    descricao: string;
    tipo: string;
    valor: number;
    status: string;
    DataVencto: Date;
}