import { Link } from "react-router-dom";
import { exitIcon, noteIcon, questionIcon } from '../../assets/takeExam';
import './MenuBtn.css'

function MenuBtn({ setExamCodeVisible, examCodeVisible, setCodeState }) {
    function handleNoteBtn() {
        setExamCodeVisible(!examCodeVisible);
        setCodeState('loading');
    }

    return (
        <div className='take-exam-prob-btns'>
            <img src={noteIcon} alt="note" onClick={handleNoteBtn} />
            {/* <img src={questionIcon} alt="question" /> */}
            <hr />
            <Link to='/mockexam'>
                <img src={exitIcon} alt="exit" />
            </Link>
        </div>
    );
};

export default MenuBtn;