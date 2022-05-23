/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { logout } from 'services/auth';
import { useEffect, useState } from "react";
import { Api } from "utils/requests";
import sair from "../../assests/img/sair.png";
import detalhes from "../../assests/img/detalhes.png";
import { Link} from "react-router-dom";
import Autenticarusuario from "components/AutenticarUsuario";

const MenuLateral =() => {

    let config = {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}
    }

    const [meses, setMeses] = useState([]);
    const [mes, setMes] = useState('');

    useEffect(() => {
        axios.get(`${Api}/Mes/RecuperarTodos`, config)
            .then(response => {
                setMeses(response.data)
                setMes(response.data[0].idmes)
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onClick = () => {
        if (window.confirm(`Você tem certeza que deseja sair?`)) {
            <Autenticarusuario/>
            logout();
        }   
    }

return (
    <>
    <div className="wrapper">
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Menu</h3>
            </div>
            <ul className="list-unstyled components">
                <li>
                    <br></br>
                    Selecione o período
                    <select className="form-control" value={mes} onChange={e => setMes(e.target.value)}>
                                    {(meses && meses.length > 0) && meses.map((item) =>(
                                        <option value={item.idmes}> {item.nome} </option>
                                    ))}
                    </select>
                </li>  
                <Link className = "btn btn-secundary btn-sm"  to={"detalhes/" + mes} >
                    <img src={detalhes} alt="FinancR3" width="20" /> Detalhes                     
                </Link>
               
                <br></br><br></br><hr></hr> <br></br>
                <li>
                    <button className="form-control">Copiar período</button>
                </li>
                <li>
                    <button className="form-control">Novo período</button>
                </li>
                <br></br>
                <hr></hr> 
                <br></br>
                <button className = "btn btn-secundary btn-sm" width="50px" onClick={onClick} href='#' > 
                    <img src={sair} alt="FinancR3" width="30" /> Sair
                </button>                          
            </ul>

        </nav>
    </div>
    </>
)}
export default MenuLateral;