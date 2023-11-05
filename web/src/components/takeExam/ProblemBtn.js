import Tooltip from '@mui/material/Tooltip';
import './ProblemBtn.css'

function Button({ probTitle, probNum, setProbNum, probResult }) {
    const resultClass = probResult == 0 ? '' : probResult == 1 ? 'correct-prob' : 'wrong-prob';

    return (
        <Tooltip 
            title={probTitle} 
            followCursor arrow placement='right' 
            className={`take-exam-prob-num num${probNum} ${resultClass}`}>
            <div onClick={() => setProbNum(probNum)}>
                {probNum}
            </div>
        </Tooltip>
    );
};

function ProblemBtn({ probList, probNum, setProbNum, probResult }) {
    const resultClass = probResult[probNum] == 0 ? '' : probResult[probNum] == 1 ? 'correct' : 'wrong';

    return (
        <div className='take-exam-prob-nums'>
            {probList.map((prob, i) => (
                <Button
                    probTitle={prob.title}
                    probNum={i+1}
                    setProbNum={setProbNum}
                    probResult={probResult[i + 1]}
                />
            ))}
            <div className={`take-exam-overlay on${probNum} ${resultClass}`}></div>
        </div>
    );
};

export default ProblemBtn;