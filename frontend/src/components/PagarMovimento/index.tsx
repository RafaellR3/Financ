
import pago from 'assests/img/pago.png';
import naopago from 'assests/img/naopago.png';

interface MainProps {
    idmovimento: string;
    status: string;
    descricao: string;
    Confirmacao: Function;
}

function PagarMovimento ({ idmovimento, status, descricao, Confirmacao }: MainProps) {

    const onClick = () => {
        Confirmacao(idmovimento, status, descricao);
    }

    return (
        status > '0' ? <img onClick={onClick} src={pago} alt="FinancR3" width="15" /> : <img onClick={onClick} src={naopago} alt="FinancR3" width="15" />
    )
}
export default PagarMovimento;