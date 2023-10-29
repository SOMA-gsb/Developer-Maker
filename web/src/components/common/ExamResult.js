import { useState } from "react";
import { checkIcon, resultIcon } from "../../assets/mockexam";

function ExamResult(props) {
    const [detail, setDetail] = useState(false);

    return (
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
    );
};

export default ExamResult;