import { memoryIcon, scoreIcon, timeIcon } from '../../assets/takeExam';
import './DescTitle.css';

function ProbCondition({ type, value, icon, unit }) {
    return (
        <div className='take-exam-condition'>
            <img src={icon} alt={type} />
            <div>{value} {unit}</div>
        </div>
    );
};

function DescTitle({ title, time, memory, score }) {
    const propList = {
        time: { type: 'time', value: time, icon: timeIcon, unit: 'Sec' },
        memory: { type: 'memory', value: memory, icon: memoryIcon, unit: 'MB' },
        score: { type: 'score', value: score, icon: scoreIcon, unit: 'Points' }
    }

    return (
        <>
            <div className="take-exam-desc-title">
                <div className="take-exam-desc-title-name">{title}</div>
                <div className="take-exam-desc-condition">
                    {Object.keys(propList).map((key) => {
                        const { type, value, icon, unit } = propList[key];
                        return <ProbCondition type={type} value={value} icon={icon} unit={unit} key={key} />
                    })}
                </div>
            </div>
            <hr className='take-exam-desc-hr' />
        </>
    );
};

export default DescTitle;