import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Title from './components/card/Title'
import Menu from './components/card/Menu'
import SubMenu from './components/card/SubMenu'
import TimerBar from './components/card/TimerBar'
import './card.css'

function App() {
    const [subMenuState, setSubMenuState] = useState('');
    const [menuVisible, setMenuVisible] = useState(true);
    const [timerVisible, setTimerVisible] = useState(false);
    const [stopState, setStopState] = useState(false);

    const handleTitleBarClick = () => {
        setMenuVisible(!menuVisible)
    }

    const probNum = window.location.href.split('/').reverse()[0];
    useEffect(() => {
        chrome.storage.local.get([`${probNum}Timer`, `${probNum}TimerRunning`, `${probNum}TimerStart`, `${probNum}TimerOption`], (res) => {
            if (`${probNum}Timer` in res && res[`${probNum}Timer`] && (Math.floor((Date.now() - res[`${probNum}TimerStart`]) / 1000) < res[`${probNum}TimerOption`])) {
                if (!res[`${probNum}TimerRunning`]) setStopState(true);
                setTimerVisible(true);
            }
        })
    }, [])

    return (
        <div id='card'>
            <Title onBar={handleTitleBarClick} menuVisible={menuVisible} />
            {timerVisible && <TimerBar setTimerVisible={setTimerVisible} stopState={stopState} setStopState={setStopState}  />}
            {menuVisible && <Menu setSubMenuState={setSubMenuState} />}
            {menuVisible && <SubMenu setSubMenuState={setSubMenuState} subMenuState={subMenuState} setTimerVisible={setTimerVisible} />}
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