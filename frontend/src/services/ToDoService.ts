import {Api} from "utils/requests";
import {IMes} from "interfaces/IMes"

const getMesRecuperarTodos = () => Api.get<IMes[]>('Mes/RecuperarTodos');

export const ToDoService = {
    getMesRecuperarTodos,
}