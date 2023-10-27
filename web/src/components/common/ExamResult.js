import { useState } from "react";
import { checkIcon, resultIcon } from "../../assets/mockexam";

function ExamResult(props) {
    const [detail, setDetail] = useState(false);

    return (
        <>
            <tr key={props.id}>
                <th>
                    <img className="pencil-icon" src={detail ? checkIcon : resultIcon} alt='study' onClick={() => setDetail(!detail)} />
                </th>
                <td className='tag-list-title list-bolder'>{props.date}</td>
                <td>
                    <div className={`level-box lev${props.level}`}>Lv. {props.level}</div>
                </td>
                <td>
                    <progress className={`tag-progress-bar lev${props.level}`} value={props.score} min="0" max={props.totalScore}></progress>
                    <span>{props.score} / {props.totalScore}</span>
                </td>
                <td>{props.percentage}%</td>
            </tr>
        </>
    );
};

export default ExamResult;