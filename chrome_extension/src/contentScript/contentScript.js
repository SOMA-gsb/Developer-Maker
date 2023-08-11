import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './card.css'
import Title from './components/card/Title'
import Menu from './components/card/Menu'
import SubMenu from './components/card/SubMenu'

function App() {
    const [subMenuState, setSubMenuState] = useState('');
    const [menuVisible, setMenuVisible] = useState(true);

    const handleTitleBarClick = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <div id='card'>
            <Title onBar={handleTitleBarClick} menuVisible={menuVisible} />
            {menuVisible && <Menu setSubMenuState={setSubMenuState} />}
            {menuVisible && <SubMenu setSubMenuState={setSubMenuState} subMenuState={subMenuState} />}
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