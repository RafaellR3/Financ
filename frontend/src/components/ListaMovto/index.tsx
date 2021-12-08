import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { DetalhesMovto } from "types/Movimento";
import { Api } from "utils/requests";
import pago from 'assests/img/pago.png';
import naopago from 'assests/img/naopago.png';
import deletar from 'assests/img/deletar.png';
import AdicionarNovoMovimento from "components/NovoMovimento";

interface MainProps {
    idMes: string;
}

const ListaMovto = ({ idMes }: MainProps) => {

    const pagarMovimento = useCallback(async (idMovimento) => {
        await axios.put(`${Api}/Movimento/pagar/${idMovimento}`);
    }, [])
    const desfazerPagamentoMovimento = useCallback(async (idMovimento) => {
        await axios.put(`${Api}/Movimento/desfazerpagamento/${idMovimento}`);
    }, [])
    const deletarMovimento = useCallback(async (idMovimento) => {
        await axios.put(`${Api}/Movimento/deletar/${idMovimento}`);
    }, [])

    function Confirmacao(_idMovimento: string, status: string, descricao: string) {
        if (status <= '0') {
            if (window.confirm(`Você tem certeza que deseja pagar a conta ${descricao}?`)) {
                pagarMovimento(_idMovimento);
                atualizadaDados(detalhes);
            }
        } else {
            if (window.confirm(`Você tem certeza que deseja desfazer o pagamento da conta ${descricao}?`)) {
                desfazerPagamentoMovimento(_idMovimento);
                atualizadaDados(detalhes);
            }
        }
    }

    function ConfirmacaoDeletar(_idMovimento: string, status: string, descricao: string) {

        if (window.confirm(`Você tem certeza que deseja deletar a conta ${descricao}?`)) {
            deletarMovimento(_idMovimento);
            atualizadaDados(detalhes);
        }

    }

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

    }, [dados]);

    const atualizadaDados = (detalhes: DetalhesMovto) => {
        setDados(detalhes)
    }

    const inserirNovoMovimento = useCallback(async (idmes: string, descricao: string, valor: string, tipo: string, datavencto: string) => {
        await axios.post(`${Api}/Movimento`, { idmes, descricao, valor, tipo, datavencto })
        .then((response) => {
            atualizadaDados(detalhes)})
        .catch((error) => {
            window.alert(`Erro ao inserir movimento. Erro: ${error}`);
        })
    }, [])


    function AtualizarDetalhes() {

        useEffect(() => {
            axios.get(`${Api}/Movimento/RecuperarDetalhesMovto/${idMes}`)
                .then(response => {
                    setDetalhes(response.data)
                });

        }, []);
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
                                        <td >{item.descricao} {':'}</td>
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
                                        <td >{item.descricao} {':'}</td>
                                        <td >{item.DataVencto}</td>
                                        <td className="monetario">{item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                        <td className="btn btn-lg" width="30px" onClick={() => Confirmacao(item.idmovimento, item.status, item.descricao)}>
                                            {item.status > '0' ? <img src={pago} alt="FinancR3" width="20" /> : <img src={naopago} alt="FinancR3" width="15" />}
                                        </td>
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
