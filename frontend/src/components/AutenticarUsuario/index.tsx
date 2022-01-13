import axios from "axios";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "utils/requests";

function Autenticarusuario(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const Autenticar = useCallback(async () => {
         await axios.post(`${Api}/usuario/Autenticar`, { email, senha })
         .then((response) => {
             console.log(response.data);
         }).catch((error) => {
             window.alert(`Usuário ou senha inválidos`);
         })
    },[email, senha]);

    const onClick = () => {
        Autenticar();
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="card mt-5 w-50">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="nickName">E-mail</label>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                />
                        </div>
                        <Link to="#"  className="btn btn-primary" onClick={onClick} >Entrar </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Autenticarusuario;