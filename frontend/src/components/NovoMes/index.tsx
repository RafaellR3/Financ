import axios from "axios";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "utils/requests";
import novo from "assests/img/novo.png";

function AdicionarNovoMes() {

    let config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    }
    const [nome, setMesNome] = useState('');


    const inserirNovoMes = useCallback(async () => {
        await axios.post(`${Api}/Mes`, {nome }, config)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nome])

    const onClick = () => {
        inserirNovoMes()
    }

    return (
        <div >
            <input className="btn btn-light btn-sm left border" value={nome} type="text" onChange={(e) => setMesNome(e.target.value)} />
            <Link to="#">
                < img src={novo} alt="novo" width="25" onClick={onClick} />
            </Link>
        </div>
    )
}

export default AdicionarNovoMes;