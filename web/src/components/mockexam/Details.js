import { personIcon, probIcon, timerIcon, levelIcon, scoreIcon, calenderIcon } from "../../assets/mockexam";
import "./Details.css";

function DetailElem({ icon, title, value }) {
    return (
        <div className="exam-detail-elem">
            <img className="exam-detail-img" src={icon} alt="icon" width="50" height="50"/>
            <div className="exam-detail-contents">
                <div className="exam-detail-title">{title}</div>
                <div className="exam-detail-value">{value}</div>
            </div>
        </div>
    );
};

function Details() {
    return (
        <>
            <div className="exam-details">
                <DetailElem icon={personIcon} title="Registered People" value="300" />
                <DetailElem icon={probIcon} title="Number Of Questions" value="5" />
                <DetailElem icon={timerIcon} title="Time Required" value="2 Hour" />
            </div>
            <div className="exam-details">
                <DetailElem icon={levelIcon} title="Average Level" value="Green" />
                <DetailElem icon={scoreIcon} title="Total Score" value="700" />
                <DetailElem icon={calenderIcon} title="Date Of Mock Exam" value="23.11.25" />
            </div>
        </>
    );
};

export default Details;