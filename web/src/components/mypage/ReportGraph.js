import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { lowerTriangle } from '../../assets/common';
import './ReportGraph.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function ReportGraph() {
    return (
        <div className='mypage-line-graph'>
            <div className='line-graph-title-bar'>
                <div className='line-graph-title'>Problem Solving Report</div>
                <div className='line-graph-btn'>
                    <div className='line-graph-btn-content'>All</div>
                    <img className='line-graph-btn-icon' src={lowerTriangle} />
                </div>
            </div>
            <Line className='line-graph' options={options} data={data} />
        </div>
    );
};

export default ReportGraph;
  
const labels = ['', '23.04', '23.05', '23.06', '23.07', '23.08', '23.09', '23.10'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Growth Points',
            data: [0, 350, 350, 500, 550, 700, 700, 900],
            borderColor: '#BEDAB7',
            backgroundColor: '#9DC593',
        },
    ],
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            }
        },
        y: {
            grid: {
                color: "#897B5F",
            },
            border: {
                dash: [7, 3],
                display: false
            },
            ticks: {
                stepSize: 250,
            },
            suggestedMax: 1000,
        }
    }
};