import axios from "axios";
import { useCallback, useState } from "react";
import { Api } from "utils/requests";
import novo from "../../assests/img/novo.png"

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
            <input className="btn btn-light btn-sm center border" value={nome} type="text" onChange={(e) => setMesNome(e.target.value)} />
            <a role="button" >
                <img src={novo} alt="novo" width="25" onClick={onClick} />
            </a>
        </div>
    )
}

export default AdicionarNovoMes;