import React from 'react'
import ReactDOM from 'react-dom/client'
import './card.css'
import Title from './components/card/Title'
import Menu from './components/card/Menu'
// import Recommend from './components/recommend/Recommend';
// import Timer from './components/timer/Timer';
// import TimerMenu from './components/timer/TimerMenu';

function App() {
    return (
        <div id='card'>
            <Title />
            <Menu />
        </div>
    )
}

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)

// chrome.storage.local.get(['loginCheck', 'active'], (res) => {
//     if (res.loginCheck && res.active &&  document.getElementById("favorite_button")) {
//         Recommend();
//         Timer();
//         TimerMenu();
//     }
// })