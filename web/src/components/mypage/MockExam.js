import { calanderIcon, levelIcon, questionIcon } from '../../assets/mypage';
import './MockExam.css'

function MockExam(props) {
    return (
        <div className="profile-exam">
            <div className="profile-exam-top">
                <div>Mock Exam</div>
                <img src={questionIcon}/>
            </div>

            <div className="profile-exam-contents">
                <div className="profile-exam-title">{props.title}</div>
                <div className="profile-exam-lev">
                    <img src={levelIcon} />
                    <div>{props.level}</div>
                </div>
                <div className="profile-exam-date">
                    <img src={calanderIcon} />
                    <div>{props.date}</div>
                </div>
            </div>
            
            <div className="profile-exam-comment">
                Check Your Algorithm Skill !
            </div>
            <div className="profile-exam-btn">Register</div>
        </div>
    );
};

export default MockExam;