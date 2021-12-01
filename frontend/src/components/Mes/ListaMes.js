import axios from "axios";
import { useEffect, useState } from "react";
import { useToDo } from "hooks";
import AdicionarNovoMes from "components/Botoes";

function ListaMes() {

    const { meses, getMesRecuperarTodos } = useToDo();
    const [idmes, setMesNome] = useState('');

    const abrirDetalhes ={
    }
        useEffect(() => {
            getMesRecuperarTodos();
        }, [getMesRecuperarTodos])


    return (
        <>
            <div className="table-responsive">
                <table className="table table-dark table-sm  text-center">

                    <tbody>
                        {meses.map(mes => (
                            <tr key={mes.idmes}>
                                <td className="btn btn-primary btn-lg center" width="200px"  >
                                    <a value={mes.idmes} onChange={(e) => setMesNome(e.target.value)} onClick={abrirDetalhes}>
                                        {mes.nome}
                                    </a>
                                </td>
                            </tr>
                        ))}
                        <td>
                            <AdicionarNovoMes />
                        </td>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListaMes;