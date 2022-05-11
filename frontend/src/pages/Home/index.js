import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
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
                </div>
                <Link className = "btn btn-primary btn-lg" to ="/dashboard"> Acessar o Dashboard</Link>

                <DonutChart/>
            </div> 
            <Footer/>
        </>
    );
}

export default Home;