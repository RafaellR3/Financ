import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { DetalhesMovto } from "types/Movimento";
import { Api } from "utils/requests";
import deletar from 'assests/img/deletar.png';
import AdicionarNovoMovimento from "components/NovoMovimento";
import PagarMovimento from "components/PagarMovimento";

interface MainProps {
    idMes: string;
}

const ListaMovto = ({ idMes }: MainProps) => {

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
        axios.get(`${Api}/Movimento/RecuperarDetalhesMovto/${idMes}`)
            .then(response => {
                setDetalhes(response.data)
            });

    }, [idMes,dados]);

    const atualizadaDados = (detalhes: DetalhesMovto) => {
        setDados(detalhes)
    }

    function AtualizarDetalhes() {

        useEffect(() => {
            axios.get(`${Api}/Movimento/RecuperarDetalhesMovto/${idMes}`)
                .then(response => {
                    setDetalhes(response.data)
                });

        }, []);
    }

    const pagarMovimento = useCallback(async (idMovimento) => {
        await axios.put(`${Api}/Movimento/pagar/${idMovimento}`)
        .then((response) => {
            atualizadaDados(detalhes)})
        .catch((error) => {
            window.alert(`Erro ao pagar movimento. Erro: ${error}`);
        })
    }, [detalhes]);

    const desfazerPagamentoMovimento = useCallback(async (idMovimento) => {
        await axios.put(`${Api}/Movimento/desfazerpagamento/${idMovimento}`)
        .then((response) => {
            atualizadaDados(detalhes)})
        .catch((error) => {
            window.alert(`Erro ao desfazer pagamento do movimento. Erro: ${error}`);
        })
    }, [detalhes]);

    const deletarMovimento = useCallback(async (idMovimento) => {
        await axios.put(`${Api}/Movimento/deletar/${idMovimento}`) 
        .then((response) => {
            atualizadaDados(detalhes)})
        .catch((error) => {
            window.alert(`Erro ao deletar movimento. Erro: ${error}`);
        })
    }, [detalhes]);

    const inserirNovoMovimento = useCallback(async (idmes: string, descricao: string, valor: string, tipo: string, datavencto: string) => {
        await axios.post(`${Api}/Movimento`, { idmes, descricao, valor, tipo, datavencto })
        .then((response) => {
            atualizadaDados(detalhes)})
        .catch((error) => {
            window.alert(`Erro ao inserir movimento. Erro: ${error}`);
        })
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

    function ConfirmacaoDeletar(_idMovimento: string, status: string, descricao: string) {

        if (window.confirm(`Você tem certeza que deseja deletar a conta ${descricao}?`)) {
            deletarMovimento(_idMovimento);
            atualizadaDados(detalhes);
        }
    }

    return (
        <>
            {AtualizarDetalhes}
            <div className="container">
                <div className="row ">
                    {/* ----------ENTRADAS----------------- */}
                    <div className="col-sm table-striped text-center">
                        <h5 style={{ color: 'green' }} >ENTRADAS</h5>
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr key={detalhes.idMes}>
                                    <th >Total: </th>
                                    <th >{detalhes.totalEntradas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="detalhes">
                                {detalhes.Entradas.sort().map(item => (
                                    <tr key={item.idmovimento}>
                                        <td >{item.descricao}</td>
                                        <td className="monetario">{item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>

                                        <td className="btn btn-lg" onClick={() => ConfirmacaoDeletar(item.idmovimento, item.status, item.descricao)}>
                                            <img src={deletar} alt="FinancR3" width="10" />
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* ----------SAIDAS----------------- */}
                    <div className="col-sm table-striped text-center">
                        <h5 style={{ color: 'red' }} >SAÍDAS</h5>
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr key={detalhes.idMes}>
                                    <th>Total: </th>
                                    <th></th>
                                    <th >{detalhes.totalSaidas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="detalhes">
                                {detalhes.Saidas.sort().map(item => (
                                    <tr key={item.idmovimento}>
                                        <td >{item.descricao} </td>
                                        <td >{item.DataVencto}</td>
                                        <td className="monetario">{item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                        <td className="btn btn-lg" width="30px">{<PagarMovimento idmovimento={item.idmovimento} status={item.status} descricao={item.descricao} Confirmacao={Confirmacao}/>} </td>
                                        <td className="btn btn-lg" width="30px" onClick={() => ConfirmacaoDeletar(item.idmovimento, item.status, item.descricao)}>
                                            <img src={deletar} alt="FinancR3" width="10" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* ----------TOTAIS----------------- */}
                    <div className="col-sm table-striped text-left" >
                        <h5 >SALDO ATUAL</h5>
                        <div>
                            <h5 style={{ color: 'blue' }}> {detalhes.saldoAtual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </h5>
                        </div>
                        <h5 >EM ABERTO</h5>
                        <div>
                            <h5 style={{ color: 'red' }}>{(detalhes.totalSaidas - detalhes.totalPago).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h5>
                        </div>
                    </div>
                </div>
            </div>

            {<AdicionarNovoMovimento idMes={idMes} inserirNovoMovimento={inserirNovoMovimento} />}
        </>
    )
}

export default ListaMovto;
