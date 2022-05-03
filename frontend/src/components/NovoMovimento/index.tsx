import {  useState } from "react";
import novo from "../../assests/img/novo.png";

interface MainProps {
    idMes: string;
    inserirNovoMovimento: Function;
}

const AdicionarNovoMovimento = ({ idMes, inserirNovoMovimento }: MainProps)=> {
    const [codigoMovimento, setCodigoMovimento] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('0');

    const onClick = () => {
        if (codigoMovimento === '' || codigoMovimento == null){
            inserirNovoMovimento(idMes, descricao, valor, tipo, new Date().toString());
        }

        setValor('');
        setDescricao('');
        setCodigoMovimento('');
        setTipo('');
    }

    return (
        <div className="container text-left">
            <div className="row ">

                <h5  >Nova conta</h5>
                <div className="col-sm table-striped text-left 50%" >
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="detalhes">
                            <tr>
                                <td><input  id="idDescricao"
                                            className="btn btn-light btn-sm left border" 
                                            placeholder="Descrição"  
                                            type="text"  
                                            value = {descricao}
                                            onChange={(e) => setDescricao(e.target.value)} /></td>
                                <td><select className="btn btn-light btn-sm left border"
                                    value={tipo} onChange={(e) => setTipo(e.target.value)}>
                                    <option value='0' selected >Entrada</option>
                                    <option value='1'>Saída</option>
                                </select>
                                </td>
                                <td><input className="btn btn-light btn-sm left border" 
                                           placeholder="Valor" 
                                           type='number' value={valor} 
                                           onChange={(e) => setValor(e.target.value)} /></td>
                                <td></td>
                                <td className="btn btn-lg" onClick={onClick} >
                                    <img src={novo} alt="FinancR3" width="25" />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="col-sm">
                </div>
                <div className="col-sm">
                </div>
            </div>
        </div>
    )
}

export default AdicionarNovoMovimento;