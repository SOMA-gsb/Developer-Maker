import { useState } from "react";
import { checkIcon, resultIcon } from "../../assets/mockexam";
import './ExamResult.css';
import ExamResultElem from "./ExamResultElem";

function ExamResult(props) {
    const [detail, setDetail] = useState(false);

    return (
        <div className={`exam-result ${detail ? 'result-detail-visibility' : ''}`}>
            <div className="list-elem">
                <div className="list-link-wrapper">
                    <img className="pencil-icon" src={detail ? checkIcon : resultIcon} alt='study' onClick={() => setDetail(!detail)} />
                </div>
                <div className='list-title'>{props.date}</div>
                <div className="list-level-wrapper">
                    <div className={`level-box lev${props.level}`}>Lv. {props.level}</div>
                </div>
                <div className="list-progress">
                    <progress className={`tag-progress-bar lev${props.level}`} value={props.score} min="0" max={props.totalScore}></progress>
                    <span>{props.score} / {props.totalScore}</span>
                </div>
                <div className="exam-result-percentage">{props.percentage}%</div>
            </div>
            <div className='result-details'>
                {
                    mockExamResult.map((elem) => {
                        return (
                            <ExamResultElem
                                key={elem.id}
                                title={elem.title}
                                status={elem.status}
                                tag={elem.tag}
                                successRate={elem.successRate}
                                level={elem.level}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ExamResult;

const mockExamResult = [
    {
        id: 1,
        title: 'A + B',
        status: true,
        tag: ['Math', 'Implement'],
        successRate: 0.87,
        level: 1,
    },
    {
        id: 2,
        title: 'Hello World!',
        status: true,
        tag: ['BFS', 'Greedy', 'Graph Theory'],
        successRate: 0.47,
        level: 2,
    },
    {
        id: 3,
        title: 'Take A Rest',
        status: false,
        tag: ['DP'],
        successRate: 0.21,
        level: 5,
    },
    {
        id: 4,
        title: 'Fibonacci',
        status: false,
        tag: ['DP', 'Graph Theory'],
        successRate: 0.50,
        level: 6,
    },
    {
        id: 5,
        title: 'Bubble Bubble',
        status: true,
        tag: ['Math', 'Sorting'],
        successRate: 0.8,
        level: 7,
    }
]