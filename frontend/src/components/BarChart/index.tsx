
import axios from 'axios';
import { IFechamentoMes } from 'interfaces/IMes';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Api } from 'utils/requests';

type SeriesData = {
    name: string;
    data: number[];
}
type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}

function BarChart() {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    });

    useEffect(() => {
        axios.get(`${Api}/Mes/RecuperarFechamentoMes`, {headers: {'Authorization': 'Bearer ' + localStorage.getItem("token") }})
        .then(response => {
            const data = response.data as IFechamentoMes[];
            const myLabels = data.map(x => x.mes_nome);
            const myEntradas = data.map(x => x.entradas);
            const mySaidas = data.map(x => x.saidas);


            setChartData({
                labels: {
                    categories: myLabels

                },
                series: [
                    {
                        name: "Entradas",
                        data: myEntradas
                    },
                    {                    
                        name: "Saídas",
                        data: mySaidas
                    }
                ]
            });
        });
    }, []);

    const options = {
        legend: {
            show: true
        },
        
        plotOptions:{
            bar:{
                horizontal: false,
            }
        }
    }
    return (    
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">

                <div className="container">
                <Chart
                    options={{ ...options, title:{text: 'Balanço por mês', style:{fontSize:'20px', color: 'grey'}},  xaxis: chartData.labels }}
                    series={chartData.series}
                    type="bar"
                    height="240"
                    title="Balanço por mês"
                />
                </div>

        </div>
    );
}

export default BarChart;

