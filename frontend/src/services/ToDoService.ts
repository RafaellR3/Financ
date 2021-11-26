import { Api } from "utils/requests";
import { IMes } from "interfaces/IMes";

const getMesRecuperarTodos = () => Api.get<IMes[]>('Mes/RecuperarTodos');
const postInserirNovoMes = (nome: string) => Api.post('/Mes', { nome: nome });

export const ToDoService = {
    getMesRecuperarTodos,
    postInserirNovoMes,
}