
import Footer from "components/Footer";
import ListaMovto from "components/ListaMovto/index";
import NavBar from "components/NavBar";
import { useParams } from "react-router";

function Detalhes() {
   const {idMes} = useParams();
    return (
        <>
            <NavBar/> 
            <ListaMovto idMes={idMes}/>
            <Footer/>
        </>
    );
}

export default Detalhes;