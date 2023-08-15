import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Title from './components/card/Title'
import Menu from './components/card/Menu'
import SubMenu from './components/card/SubMenu'
import TimerBar from './components/card/timer/TimerBar'
import './card.css'

function App() {
    const [curPage, setCurPage] = useState('boj');
    useEffect(() => {
        const url = window.location.href;
        const bojRegExp = /https:\/\/www.acmicpc.net\/problem\/[0-9]+/;
        const codeforceRegExp = /https:\/\/codeforces.com\/problemset\/problem\/[0-9]+\/[A-Z]+/;
        if (!bojRegExp.test(url)) {
            setCurPage('codeforce');
            if (!codeforceRegExp.test(url)) return null;
        }
    }, [])

    const [menuState, setMenuState] = useState('');
    const [subMenuState, setSubMenuState] = useState('');
    const [menuVisible, setMenuVisible] = useState(true);
    const [timerVisible, setTimerVisible] = useState(false);
    const [stopState, setStopState] = useState(false);
    const [timerTitle, setTimerTitle] = useState('');

    const handleTitleBarClick = () => {
        setMenuVisible(!menuVisible)
    }

    const probNum = window.location.href.split('/').reverse()[0];
    useEffect(() => {
        chrome.storage.local.get([`${probNum}Timer`, `${probNum}TimerRunning`, `${probNum}TimerStart`, `${probNum}TimerOption`, `${probNum}Stopwatch`, `${probNum}StopwatchRunning`], (res) => {
            if (res[`${probNum}Timer`] && (Math.floor((Date.now() - res[`${probNum}TimerStart`]) / 1000) < res[`${probNum}TimerOption`])) {
                if (!res[`${probNum}TimerRunning`]) setStopState(true);
                setTimerVisible(true);
                setTimerTitle('REST TIME')
            }
            else if (res[`${probNum}Stopwatch`]) {
                if (!res[`${probNum}StopwatchRunning`]) setStopState(true);
                setTimerVisible(true);
                setTimerTitle('PAST TIME')
            }
        })
    }, [])

    return (
        <div id='card'>
            <Title onBar={handleTitleBarClick} menuVisible={menuVisible} />
            {timerVisible && <TimerBar setTimerVisible={setTimerVisible} stopState={stopState} setStopState={setStopState} timerTitle={timerTitle} />}
            {menuVisible &&
                <Menu
                    setMenuState={setMenuState}
                    menuState={menuState}
                    setSubMenuState={setSubMenuState}
                    subMenuState={subMenuState}
                />
            }
            {menuVisible && setSubMenuState != '' &&
                <SubMenu
                    curPage={curPage}
                    setMenuState={setMenuState}
                    menuState={menuState}
                    setSubMenuState={setSubMenuState}
                    subMenuState={subMenuState}
                    setTimerVisible={setTimerVisible}
                    setTimerTitle={setTimerTitle}
                />
            }
        </div>
    )
}

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)



// import Recommend from './components/recommend/Recommend';
// import Timer from './components/timer/Timer';
// import TimerMenu from './components/timer/TimerMenu';

// chrome.storage.local.get(['loginCheck', 'active'], (res) => {
//     if (res.loginCheck && res.active &&  document.getElementById("favorite_button")) {
//         Recommend();
//         Timer();
//         TimerMenu();
//     }
// })