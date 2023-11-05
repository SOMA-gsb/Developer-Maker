import { Link } from "react-router-dom";
import ProblemBtn from './ProblemBtn';
import MenuBtn from "./MenuBtn";
import MainLogo from '../../assets/mainLogo.png';
import './ExamNav.css'

function ExamNav({ probList, probNum, setProbNum, probResult }) {
    return (
        <div className="take-exam-nav">
            <Link to='/mockexam'>
                <img src={MainLogo} alt="logo" className="take-exam-logo"/>
            </Link>
            <ProblemBtn
                probList={probList}
                probNum={probNum}
                setProbNum={setProbNum}
                probResult={probResult}
            />
            <MenuBtn />
        </div>
    );
};

export default ExamNav;