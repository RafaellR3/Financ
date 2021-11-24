import Footer from "components/Footer";
import ListaMes from "components/Mes/ListaMes";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Controle financeiro R3</h1>
                    <hr />
                    <p>.</p>
                    
                </div>

                <ListaMes/>
            </div>
            <Footer/>
        </>
    );
}

export default Home;