import {  useState } from "react";
import axios from "axios";
import { Api } from "utils/requests";
import novo from "../../assests/img/novo.png";
import { Movimento } from "types/Movimento";

interface MainProps {
    idMes: string;
    inserirNovoMovimento: Function;
    atualizarMovimento: Function;
}

const AdicionarNovoMovimento = ({ idMes, inserirNovoMovimento, atualizarMovimento }: MainProps)=> {
    const [codigoMovimento, setCodigoMovimento] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataVencto, setDataVencto] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('0');

    let config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    }

    const onClick = () => {
        if (codigoMovimento === '' || codigoMovimento == null){
            atualizarMovimento(codigoMovimento, descricao, valor, tipo, dataVencto);
        }else{
            inserirNovoMovimento(idMes, descricao, valor, tipo, dataVencto);
        }

        setValor('');
        setDataVencto('');
        setDescricao('');
        setCodigoMovimento('');
        setTipo('');
    }

    function getMovimentoEdicao (codigoMovimento: string) {
        setDescricao(codigoMovimento);
        axios.get(`${Api}/Movimento/RecuperarMovimentoPorId/${codigoMovimento}`, config)
            .then(response => {
                setMovimentoEdicao(response.data);
            });
    }

    function setMovimentoEdicao(movimento: Movimento){
        setValor(movimento.valor.toString());
        setDataVencto(movimento.DataVencto);
        setTipo(movimento.tipo);
        setDescricao(movimento.descricao);
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