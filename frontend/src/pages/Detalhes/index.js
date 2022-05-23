
import ListaMovto from "components/ListaMovto/index";
import MenuFixo from "components/MenuFixo";
import { useParams } from "react-router";

function Detalhes() {
   const {idMes} = useParams();
    return (
        <>
        <div >
           <MenuFixo/>
           <ListaMovto idMes={idMes}/>
        </div>       
        </>
    );
}

export default Detalhes;