export type DetalhesMovto = {
    idMes: string;
    totalEntradas: number;
    totalSaidas: number;
    totalPago: number;
    saldoAtual: number;
    faltaPagar: number;
    Entradas: Movimento[];
    Saidas: Movimento[];
}

export type Movimento = {
    idmovimento: string;
    descricao: string; 
    tipo: string;
    valor: number;
    status: string;
    datavencto: string;
    idmes: string;
}