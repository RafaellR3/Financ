
import Footer from "components/Footer";
import ListaMovto from "components/ListaMovto/index";
import MenuFixo from "components/MenuFixo";
import MenuLateral from "components/MenuLateral";
import NavBar from "components/NavBar";
import { useParams } from "react-router";

function Detalhes() {
   const {idMes, nome} = useParams();
    return (
        <>
        <div >
           <MenuFixo/>
           <ListaMovto idMes={idMes} nome={nome}/>
        </div>       
        </>
    );
}

export default Detalhes;