import { useCallback, useState } from "react";
import novo from "../../assests/img/novo.png"

function AdicionarNovoMes() {

    //const { tasks, postInserirNovoMes, getMesRecuperarTodos } = useToDo();
    const [nome, setMesNome] = useState('');

    // const inserirNovoMes = useCallback(async () => {
    //     await postInserirNovoMes( nome );
    //     await getMesRecuperarTodos();
    //     <ListaMes/>;
    // }, [postInserirNovoMes, getMesRecuperarTodos, nome])

    //onClick={inserirNovoMes}

    return (
        <div >
            <input className="btn btn-light btn-sm center border" value={nome} type="text" onChange={(e) => setMesNome(e.target.value)} />
            <a role="button" >
                <img src={novo} alt="novo" width="25" />
            </a>
        </div>
    )
}

export default AdicionarNovoMes;