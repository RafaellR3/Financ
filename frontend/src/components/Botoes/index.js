import { useCallback, useState } from "react";
import { useToDo } from "hooks";
import ListaMes from "components/ListaMes";

function AdicionarNovoMes() {

    const { tasks, postInserirNovoMes, getMesRecuperarTodos } = useToDo();
    const [ nome, setMesNome ] = useState('');
    
    const inserirNovoMes = useCallback(async () => {
        await postInserirNovoMes( nome );
        await getMesRecuperarTodos();
        <ListaMes/>;
    }, [postInserirNovoMes, getMesRecuperarTodos, nome])

    return (
        <div >
            <input className="btn btn-light btn-sm center" value={nome} type="text" onChange={(e) => setMesNome(e.target.value)} />
            <a className="btn btn-primary btn-sm center" role="button" onClick={inserirNovoMes}>+</a>
        </div>
    )
}

export default AdicionarNovoMes;