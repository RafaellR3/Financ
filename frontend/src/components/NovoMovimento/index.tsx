
import {  useState } from "react";
import novo from "../../assests/img/novo.png";

interface MainProps {
    idMes: string;
    inserirNovoMovimento: Function;
}

function AdicionarNovoMovimento ({ idMes, inserirNovoMovimento }: MainProps) {
    const [descricao, setDescricao] = useState('');
    const [dataVencto, setDataVencto] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('0');

    // const inserirNovoMovimento = (descricao: string, valor: string, tipo: string, datavencto: string) => {
    //      axios.post(`${Api}/Movimento`, { idmes, descricao, valor, tipo, datavencto });
    // };

    const onClick = () => {
        inserirNovoMovimento(idMes, descricao, valor,tipo,dataVencto);
        setValor('');
        setDataVencto('');
        setTipo('');
        setDescricao('');
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="detalhes">
                            <tr>
                                <td><input className="btn btn-light btn-sm left border" 
                                            placeholder="Descrição"  
                                            type="text"  
                                            onChange={(e) => setDescricao(e.target.value)} /></td>
                                <td><input className="btn btn-light btn-sm left border" 
                                           placeholder="Data vencto" value={dataVencto} 
                                           type="date"  
                                           onChange={(e) => setDataVencto(e.target.value)} /></td>
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