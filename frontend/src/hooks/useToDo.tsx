import { IMes } from 'interfaces/IMes';
import {useCallback, useState} from 'react'
import { ToDoService } from 'services'

export const useToDo = () => {
    const [tasks, setTasks] = useState<IMes[]>([]);
    const getMesRecuperarTodos = useCallback(async () => {
        const {status, data} = await ToDoService.getMesRecuperarTodos();
        if (status !== 200 ) throw new Error();

        setTasks(data);
    }, [])

    return {
        tasks,
        getMesRecuperarTodos
    }
}