import './ExamTitle.css'

function ExamTitle({ probNum, probTitle}) {
    return (
        <div className="take-exam-prob-title">
            <div className='take-exam-title-num'>{probNum}</div>
            <div className='take-exam-title'>{probTitle}</div>
            <div className='take-exam-timer'></div>
        </div>
    );
};

export default ExamTitle;