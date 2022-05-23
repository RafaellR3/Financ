import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import MenuFixo from "components/MenuFixo";

function Home() {
    return (
        <>
        <div>
            <MenuFixo/>
            <DonutChart/>
            <BarChart/>
        </div>
        </>
    );
}

export default Home;