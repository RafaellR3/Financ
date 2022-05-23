
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function Dashboard() {
    return (
        <>       
        <div className="container">
            <NavBar/> 
            <Dashboard/>
            <Footer/>
        </div>
        </>
    );
}

export default Dashboard;