
import axios from 'axios';
import { IMovimentoPorCategoria } from 'interfaces/IDetalhesMovto';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Api } from 'utils/requests';
type ChartData = {
    labels: string[];
    series: number[];
}

function DonutChart() {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        axios.get(`${Api}/Movimento/RecuperarSaidasPorCategoria`, {headers: {'Authorization': 'Bearer ' + localStorage.getItem("token") }})
        .then(response => {
            const data = response.data as IMovimentoPorCategoria[];
            const myLabels = data.map(x => x.categoria_descricao);
            const mySeries = data.map(x => Number(x.sum))
            setChartData({ labels: myLabels, series: mySeries });
        });
    }, []);

    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;

