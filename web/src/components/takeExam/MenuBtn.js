import { Link } from "react-router-dom";
import { exitIcon, noteIcon, questionIcon } from '../../assets/takeExam';
import './MenuBtn.css'

function MenuBtn() {
    return (
        <div className='take-exam-prob-btns'>
            <img src={noteIcon} alt="note" />
            <img src={questionIcon} alt="question" />
            <hr />
            <Link to='/mockexam'>
                <img src={exitIcon} alt="exit" />
            </Link>
        </div>
    );
};

export default MenuBtn;