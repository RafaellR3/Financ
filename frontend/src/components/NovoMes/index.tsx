import axios from "axios";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "utils/requests";
import novo from "assests/img/novo.png";

function AdicionarNovoMes() {

    const [nome, setMesNome] = useState('');

    const inserirNovoMes = useCallback(async () => {
        await axios.post(`${Api}/Mes`, {nome })
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