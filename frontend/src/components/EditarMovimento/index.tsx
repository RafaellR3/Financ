
import editar from 'assests/img/editar.png';

interface MainProps {
    idmovimento: string;
    status: string;
    descricao: string;
    Editar: Function;
}

function EditarMovimento ({ idmovimento, status, descricao, Editar }: MainProps) {

    const onClick = () => {
        Editar(idmovimento, status, descricao);
    }

    return (
        <img onClick={onClick} src={editar} alt="FinancR3" width="20" /> 
    )
}
export default EditarMovimento;