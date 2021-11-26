import axios from "axios";
import { useEffect } from "react";
import { useToDo } from "hooks";
import AdicionarNovoMes from "components/Botoes";

function ListaMes() {

    const { tasks, getMesRecuperarTodos } = useToDo();

    useEffect(() => {
        getMesRecuperarTodos();
    }, [getMesRecuperarTodos])


    return (
        <>
            <div className="table-responsive">
                <table className="table table-dark table-sm  text-center">

                    <tbody>
                        {tasks.map(mes => (
                            <tr key={mes.idmes}>
                                <td className="btn btn-primary btn-lg center" width="200px">
                                    {mes.nome}
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td>
                                <AdicionarNovoMes />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListaMes;