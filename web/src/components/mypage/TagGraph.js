import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import styled from 'styled-components';
  
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const RadarGraphContainer = styled.div`
    width: 25vw;
    height: 39vh;
    background-color: #FFFEFE;
    border-radius: 0.3rem;
    margin: 1vw 2vw 1vw 0vw;
    box-shadow: 0rem 0rem 0.1rem 0rem #b2b2b2;
`;

function TagGraph() {
    return (
        <RadarGraphContainer>
            <Radar data={data} options={config} style={{margin: 'auto'}} />
        </RadarGraphContainer>
    );
};

export default TagGraph;
  
const data = {
    labels: ['Math', 'DP', 'Greedy', 'Geometry', 'Graph', 'String'],
    datasets: [
        {
            label: 'Past Level',
            data: [25, 20, 10, 30, 40, 30],
            backgroundColor: '#CFCFCF58',
            borderColor: '#AEAEAE',
            borderWidth: 1,
        },
        {
            label: 'Current Level',
            data: [28, 25, 15, 35, 45, 31],
            backgroundColor: '#C8E6C058',
            borderColor: '#9DC593',
            borderWidth: 1,
        },
    ],
};
  
const config = {
    scales: {
        r: {
            backgroundColor: '#FFFDF9',
            grid: {
                circular: true,
            },
            ticks: {
                display: false,
                stepSize: 10,
            },
            beginAtZero: true,
            // suggestedMin: 50,
            // suggestedMax: 100
        },
    },
    elements: {
        line: {
            borderWidth: 1
        }
    },
};