import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import ResultTitle from '../common/ResultTitle';

function Result(props) {
    return (
        <li>
            <a className='recommend-number' href={props.result.ref}><FontAwesomeIcon icon={faLink} className='faLink' />{props.result.number}</a>
            <div>{props.result.title}</div>
            {props.last ? null : <hr className='result-hr' />}
        </li>
    )
}

function RecommendResult() {
    const [result, setResult] = useState([
        { title: 'Triangle Platinum?', number: '1847E', ref: 'https://codeforces.com/problemset/problem/1847/E' },
        { title: 'Professor Higashikata', number: '1847D', ref: 'https://codeforces.com/problemset/problem/1847/D' },
        { title: 'Vampiric Powers?', number: '1847C', ref: 'https://codeforces.com/problemset/problem/1847/C' },
        { title: 'Hamon Odyssey', number: '1847B', ref: 'https://codeforces.com/problemset/problem/1847/B' }
    ])
    
    return (
        <div className='sub-menus result-container recommend-menus'>
            <ResultTitle boxId='recommend-title-box' titleId='recommend-title-name' title='Recommended Problems' />
            <ul id='recommend-ul'>
                {result.map((item, index) => {
                    return <Result result={item} last={index === result.length - 1} key={index} />
                })}
            </ul>
        </div>
    )
}

export default RecommendResult;