import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import ResultTitle from '../common/ResultTitle';

import './RecommendResult.css';

function Result({ href, number, last}) {
    const [title, setTitle] = useState('');
    const axios = require('axios');
    async function getProblemInfo() {
        try {
            const response = await axios.get(href);
            setTitle(response.data.split('<div class="title">')[1].split('</div>')[0]);
        } catch (error) {
            console.error(error);
        }
    }
    getProblemInfo();

    return (
        <li>
            <a className='recommend-number' href={href}><FontAwesomeIcon icon={faLink} className='faLink' />{number}</a>
            <div>{title}</div>
            {last ? null : <hr className='result-hr' />}
        </li>
    )
}

function Level({ level, rating }) {
    const state = rating < level ? '' : rating == level ? 'active' : 'completed';
    
    return (
        <div class={`stepper-item ${state} lv${level}`}>
            <div class="step-counter">{rating == level ? `Lv. ${level}` : ""}</div>
        </div>
    )
}

function RecommendResult({ rating, curPage }) {
    const [result, setResult] = useState([])
    const [recommendLevel, setRecommendLevel] = useState('');

    var x = curPage == 'boj' ? document.getElementById('problem_description') : document.getElementsByClassName('problem-statement').item(0).childNodes.item(1);

    x = x.textContent.split(/\n| |\t/).filter(item=>item).join(' ').split('$');
    const len = x.length;
    for (var i = 1; i < len; i += 2) {
        x[i-1] = ' ' + x[i - 1].split(' ').slice(0, -1).join(' ') + ' ';
    }
    x = x.join('$')

    let curProbLevel = document.getElementsByClassName('tag-box');
    curProbLevel = Number(curProbLevel[curProbLevel.length - 1].innerText.substr(1));

    let ourProbLevel = 0;
    if (curProbLevel >= 3400) ourProbLevel = 7;
    else if (curProbLevel >= 3000) ourProbLevel = 6;
    else if (curProbLevel >= 2600) ourProbLevel = 5;
    else if (curProbLevel >= 2200) ourProbLevel = 4;
    else if (curProbLevel >= 1800) ourProbLevel = 3;
    else if (curProbLevel >= 1300) ourProbLevel = 2;
    else ourProbLevel = 1;
    

    function handleRecommendLevelChange(level) {
        setRecommendLevel(level);

        chrome.runtime.sendMessage({ type: 'recommendProb', problem_des: x, mode: level, rating: ourProbLevel }, function (response) {
            // props.setTagList(response)
            const newArray = response.problem;
            setResult(newArray)
        })
    }
    
    return (
        <div className='sub-menus result-container recommend-menus'>
            <ResultTitle boxId='recommend-title-box' titleId='recommend-title-name' title='Predict Problem Level' />
            <div class="stepper-wrapper">
                {[1, 2, 3, 4, 5, 6, 7].map((level) => {
                    return <Level level={level} rating={rating} />
                })}
            </div>

            <hr className='recommend-hr' />

            <ResultTitle boxId='recommend-title-box' titleId='recommend-title-name' title='Recommended Problems' />
            <div className='recommend-levels'>
                <div className={`recommend-level ${recommendLevel == 'easy' ? 'active' : ''}`} onClick={() => handleRecommendLevelChange('easy')}>EASY</div>
                <div className={`recommend-level ${recommendLevel == 'similar' ? 'active' : ''}`} onClick={() => handleRecommendLevelChange('similar')}>SIMILAR</div>
                <div className={`recommend-level ${recommendLevel == 'hard' ? 'active' : ''}`} onClick={() => handleRecommendLevelChange('hard')}>HARD</div>
            </div>
            <ul id='recommend-ul'>
                {result.length > 0 && result.map((item, index) => {
                    return <Result 
                        // result={item}
                        href={`https://codeforces.com/problemset/problem/${item}`}
                        number={`${item.substr(0, item.length - 2)}${item[item.length - 1]}`}
                        last={index === result.length - 1} 
                        key={index} 
                    />
                })}
            </ul>
        </div>
    )
}

export default RecommendResult;