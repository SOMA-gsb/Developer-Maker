import { useState } from 'react';
import ResultTitle from '../common/ResultTitle';

function Result(props) {
    return (
        <li>
            <div className='result-title'>{props.result.title}</div>
            <div className='result-percentage' id={props.first ? 'first-percentage' : ''}>{props.result.percentage.toFixed(1)}%</div>
            {props.last ? null : <hr className='result-hr' />}
        </li>
    )
}

function TagResult() {
    const [result, setResult] = useState([
        { title: 'Implementation', percentage: 98.715 },
        { title: 'Math', percentage: 95.678 },
        { title: 'Binary Search', percentage: 60.543 },
        { title: 'Brute Force', percentage: 51.600 }
    ])

    return (
        <div className='sub-menus result-container'>
            <ResultTitle title='Tag Prediction Results' />
            <ol id='tag-result-ol'>
                {result.map((item, index) => {
                    return <Result result={item} first={index === 0} last={index === result.length - 1} key={index} />
                })}
            </ol>
        </div>
    )
}

export default TagResult;