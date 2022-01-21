import axios from "axios";
import React, { useEffect, useState } from "react";
import AdicionarNovoMes from "components/NovoMes";
import { Api } from "utils/requests";
import { ListaMeses } from "../../types/Mes";
import { Link } from "react-router-dom";

function ListaMes() {

    let config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    }
    const [meses, setMes] = useState<ListaMeses>({
    });

    useEffect(() => {
        axios.get(`${Api}/Mes/RecuperarTodos`, config)
            .then(response => {
                setMes({ meses: response.data })
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="table-responsive table-dark text-center">
                <table className="table table-light table-sm  text-center">
                    <tbody>
                        {meses.meses?.map(item => (
                            <tr key={item.idmes}>
                                <td  width="200px">
                                <Link className = "btn btn-primary btn-lg"  to={"detalhes/" + item.idmes} >
                                        {item.nome}
                                    </Link>
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