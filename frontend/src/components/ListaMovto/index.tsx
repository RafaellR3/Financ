import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { DetalhesMovto, Movimento } from "types/Movimento";
import { Api } from "utils/requests";
import deletar from 'assests/img/deletar.png';
import PagarMovimento from "components/PagarMovimento";
import BotaoEditarMovimento from "components/BotaoEditarMovimento";
import EditarMovimento from "components/EditarMovimento";
import novo from "../../assests/img/novo.png";

interface MainProps {
    idMes: string;
}

const ListaMovto = ({ idMes }: MainProps) => {

    let config = {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem("token") }
    }

    const [descricaoSaida, setDescricaoSaida] = useState('');
    const [valorSaida, setValorSaida] = useState('');
    const [descricaoEntrada, setDescricaoEntrada] = useState('');
    const [valorEntrada, setValorEntrada] = useState('');
    const [isModalVisible , setIsModalVisible] = useState(false);
    const [movimento, setMovimento] = useState<Movimento>({idmovimento:'', datavencto:'', descricao:'', idmes: idMes, status: '0', tipo:'0', valor: 0, idcategoria: '' })
    const [detalhes, setDetalhes] = useState<DetalhesMovto>({
        idMes: '',
        totalEntradas: 0,
        totalSaidas: 0,
        totalPago: 0,
        saldoAtual: 0,
        faltaPagar: 0,
        Entradas: [],
        Saidas: []
    });

    const [dados, setDados] = useState({});
    useEffect(() => {
        axios.get(`${Api}/Movimento/RecuperarDetalhesMovto/${idMes}`, config)
            .then(response => {
                setDetalhes(response.data)
            });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idMes,dados]);

    const atualizadaDados = (detalhes: DetalhesMovto) => {
        setDados(detalhes)
    }

    function inserirSaida(){
        postinserirSaida(idMes, descricaoSaida, valorSaida, '1', new Date().toString())
    }
    const postinserirSaida = useCallback(async (idmes: string, descricao: string, valor: string, tipo: string, datavencto: string) => {
        await axios.post(`${Api}/Movimento`, { idmes, descricao, valor, tipo, datavencto }, config)
        .then((response) => {
            atualizadaDados(detalhes)})
        .catch((error) => {
            window.alert(`Erro ao inserir movimento. Erro: ${error}`);
        })
        setDescricaoSaida('');
        setValorSaida('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detalhes]);

    function inserirEntrada(){
        postinserirEntrada(idMes, descricaoEntrada, valorEntrada, '0', new Date().toString())
    }
    const postinserirEntrada = useCallback(async (idmes: string, descricao: string, valor: string, tipo: string, datavencto: string) => {
        await axios.post(`${Api}/Movimento`, { idmes, descricao, valor, tipo, datavencto }, config)
        .then((response) => {
            atualizadaDados(detalhes)})
        .catch((error) => {
            window.alert(`Erro ao inserir movimento. Erro: ${error}`);
        })
        setDescricaoEntrada('');
        setValorEntrada('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detalhes]);
    const atualizarMovimento = useCallback(async (idmovimento: string, idmes: string, descricao: string, valor: string, tipo: string, datavencto: string) => {
        await axios.put(`${Api}/Movimento/Editar/${idmovimento}`, { idmes, descricao, valor, tipo, datavencto }, config)
        .then((response) => {
            atualizadaDados(detalhes)})
        .catch((error) => {
            window.alert(`Erro ao inserir movimento. Erro: ${error}`);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detalhes]);

    function AtualizarDetalhes() {
        useEffect(() => {
            axios.get(`${Api}/Movimento/RecuperarDetalhesMovto/${idMes}`, config)
                .then(response => {
                    setDetalhes(response.data)
                });

        }, []);
    }

    const pagarMovimento = useCallback(async (idMovimento) => {
        await axios.put(`${Api}/Movimento/pagar/${idMovimento}`, null, config)
        .then((response) => {
            atualizadaDados(detalhes)})
        .catch((error) => {
            window.alert(`Erro ao pagar movimento. Erro: ${error}`);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detalhes]);

    const desfazerPagamentoMovimento = useCallback(async (idMovimento) => {
        await axios.put(`${Api}/Movimento/desfazerpagamento/${idMovimento}`, null,  config)
        .then((response) => {
            atualizadaDados(detalhes)})
        .catch((error) => {
            window.alert(`Erro ao desfazer pagamento do movimento. Erro: ${error}`);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detalhes]);

    const deletarMovimento = useCallback(async (idMovimento) => {
        await axios.put(`${Api}/Movimento/deletar/${idMovimento}`, null, config) 
        .then((response) => {
            atualizadaDados(detalhes)})
        .catch((error) => {
            window.alert(`Erro ao deletar movimento. Erro: ${error}`);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detalhes]);

    function Confirmacao(_idMovimento: string, status: string, descricao: string) {
        if (status <= '0') {
            if (window.confirm(`Você tem certeza que deseja pagar a conta ${descricao}?`)) {
                pagarMovimento(_idMovimento);
            }
        } else {
            if (window.confirm(`Você tem certeza que deseja desfazer o pagamento da conta ${descricao}?`)) {
                desfazerPagamentoMovimento(_idMovimento);
            }
        }
    }

    function Editar(_idMovimento: string, status: string, descricao: string) {
        if (status > '0') {
            window.alert(`${descricao} já foi pago, portanto não pode ser editado.`);
        } else {
            axios.get(`${Api}/Movimento/RecuperarMovimentoPorId/${_idMovimento}`, config)
                .then(response => {
                    setMovimento(response.data);
                    setIsModalVisible(true);
                });
        }
    }

    function ConfirmacaoDeletar(_idMovimento: string, status: string, descricao: string) {
        if (window.confirm(`Você tem certeza que deseja deletar a conta ${descricao}?`)) {
            deletarMovimento(_idMovimento);
        }
    }

    const _editarMovimento = <EditarMovimento movimento={movimento}  atualizarMovimento={atualizarMovimento} onClose={() =>setIsModalVisible(false)}/>;
    
    return (
        <>
            {AtualizarDetalhes}
            <div className="container">                    
                <div className="col-lg table-striped text-center" >
                <table className="table table-striped table-lg table-borderless">
                    <thead  className= "thead-dark">
                        <th className = "totais" ><h5 style={{ color: 'blue' }}> SALDO ATUAL</h5></th>
                        <th className = "totais" ><h5 style={{ color: 'red' }}>EM ABERTO</h5></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </thead>
                    <tbody>
                        <td className = "totais" width="20%" ><b>{detalhes.saldoAtual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </b></td>
                        <td className = "totais" width="20%"><b>{(detalhes.totalSaidas - detalhes.totalPago).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></td>
                    </tbody>
                </table>
                 <hr></hr>  
                </div>
                <div className="row ">                

                    {/* ----------ENTRADAS----------------- */}
                    <div className="col-lg table-striped text-center">
                        <h5 style={{ color: 'green' }} >ENTRADAS</h5>
                        <table className="table table-striped table-lg thead-dark">
                            <thead >
                                <tr key={detalhes.idMes}>
                                    <th >Total: </th>
                                    <th >{detalhes.totalEntradas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="detalhes">
                                {detalhes.Entradas.sort().map(item => (
                                    <tr key={item.idmovimento}>
                                        <td >{item.descricao}</td>
                                        <td className="monetario">{item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                        <td className="btn btn-secondary" width="30px">{<BotaoEditarMovimento idmovimento={item.idmovimento} status={item.status} descricao={item.descricao} Editar={Editar}/>} </td>
                                        <td className="btn btn-secondary" width="30px" onClick={() => ConfirmacaoDeletar(item.idmovimento, item.status, item.descricao)}>
                                            <img src={deletar} alt="FinancR3" width="15" />
                                        </td>
                                    </tr>
                                ))}                                
                            <tr>
                                <td>
                                    <input  id="idDescricao"
                                            className="btn btn-light btn-sm left border" 
                                            placeholder="Descrição"  
                                            type="text"  
                                            value = {descricaoEntrada}
                                            onChange={(e) => setDescricaoEntrada(e.target.value)} />
                                </td>
                                <td>
                                    <input className="btn btn-light btn-sm left border" 
                                        placeholder="Valor" 
                                        type='number' value={valorEntrada} 
                                        onChange={(e) => setValorEntrada(e.target.value)} />
                                </td>
                                <td className="btn btn-secondary"  width="30px" onClick={inserirEntrada} >
                                    <img src={novo} alt="FinancR3" width="16" />
                                </td>  
                                <td >
                                    
                                </td>    
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* ----------SAIDAS----------------- */}
                    <div className="col-sm table-striped text-center">
                        <h5 style={{ color: 'red' }} >SAÍDAS</h5>
                        <table className="table table-striped table-lg">
                            <thead>
                                <tr key={detalhes.idMes}>
                                    <th>Total: </th>
                                    <th >{detalhes.totalSaidas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="detalhes">
                                {detalhes.Saidas.sort().map(item => (
                                    <tr key={item.idmovimento}>
                                        <td >{item.descricao} </td>
                                        <td className="monetario">{item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                        <td className="btn btn-secondary" width="30px">{<PagarMovimento idmovimento={item.idmovimento} status={item.status} descricao={item.descricao} Confirmacao={Confirmacao}/>} </td>
                                        <td className="btn btn-secondary" width="30px">{<BotaoEditarMovimento idmovimento={item.idmovimento} status={item.status} descricao={item.descricao} Editar={Editar}/>} </td>
                                        <td className="btn btn-secondary" width="30px" onClick={() => ConfirmacaoDeletar(item.idmovimento, item.status, item.descricao)}>
                                            <img src={deletar} alt="FinancR3" width="15" />
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>
                                        <input  id="idDescricao"
                                                className="btn btn-light btn-sm left border" 
                                                placeholder="Descrição"  
                                                type="text"  
                                                value = {descricaoSaida}
                                                onChange={(e) => setDescricaoSaida(e.target.value)} />
                                    </td>
                                    <td>
                                        <input className="btn btn-light btn-sm left border" 
                                            placeholder="Valor" 
                                            type='number' value={valorSaida} 
                                            onChange={(e) => setValorSaida(e.target.value)} />
                                    </td>
                                    <td className="btn btn-secondary"  width="30px" onClick={inserirSaida} >
                                        <img src={novo} alt="FinancR3" width="15" />
                                    </td>  
                                    <td></td> 
                                    <td></td>      
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  
                  </div>
            </div>
                
            {isModalVisible ? _editarMovimento: null}
        </>
    )
}

export default ListaMovto;
