export type Mes = {
    idmes: string;
    nome: string;
}
export type MesPage = {
    content?: Mes[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}