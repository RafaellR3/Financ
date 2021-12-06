import axios from "axios";
import React, { useEffect, useState } from "react";
import AdicionarNovoMes from "components/NovoMes";
import { Api } from "utils/requests";
import { ListaMeses } from "../../types/Mes";

function ListaMes() {

    const [meses, setMes] = useState<ListaMeses>({
    });

    useEffect(() => {
        axios.get(`${Api}/Mes/RecuperarTodos`)
            .then(response => {
                setMes({ meses: response.data })
            });
    }, []);

    return (
        <>
            <div className="table-responsive text-center">
                <table className="table table-dark table-sm  text-center">
                    <tbody>
                        {meses.meses?.map(item => (
                            <tr key={item.idmes}>
                                <td className="btn btn-primary btn-lg" width="200px"  >
                                    <a href={"detalhes/" + item.idmes} > {item.nome}</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    
                </table>
                <AdicionarNovoMes />
            </div>
        </>
    )
}

export default ListaMes;