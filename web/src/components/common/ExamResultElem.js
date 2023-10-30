import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './ExamResultElem.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function ExamResultElem(props) {
    const data = {
        datasets: [{
            data: [props.successRate, 1 - props.successRate],
            backgroundColor: [
                '#6d9efe',
                '#fc6969',
            ],
        }],
        labels: [
            'Success',
            'Fail',
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const plugins = [{
        beforeDraw: function(chart) {
            var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
            ctx.restore();
            var fontSize = (height / 77).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "top";
            var text = `${props.successRate * 100}%`,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2.3;
            ctx.fillText(text, textX, textY);
            ctx.save();
        } 
    }];

    return (
        <div className={`result-detail exam-prob-lev${props.level}`}>
            <div className="result-detail-bar"></div>
            <div>
                <div className="result-detail-content">
                    <div className="result-detail-title">{props.title}</div>
                    <div className={`result-detail-status ${props.status ? '' : 'status-fail'}`}>{props.status ? 'SUCCESS' : 'FAIL'}</div>
                </div>
                <div className="result-detail-tag">
                    {
                        props.tag.map((elem) => {
                            return (
                                <div className="result-detail-tag-elem">{elem}</div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="result-detail-analysis">
                <div className="result-detail-level">Lv. {props.level}</div>
                <Doughnut 
                    className='result-detail-success-rate'
                    data={data} 
                    options={options}
                    plugins={plugins}
                />
            </div>
        </div>
    );
};

export default ExamResultElem;