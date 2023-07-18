import { useEffect } from 'react';
import './Menu.css'

function Menu() {
    function changeCheck(e) {
        chrome.storage.local.set({
            active: !e.target.checked
        })
    }

    useEffect(() => {
        chrome.storage.local.get(['active'], (res) => {
            const activeBox = document.getElementById('switch');
            activeBox.checked = 'active' in res && !res.active;
        })
    })

    return (
        <>
            <div>
                <h1 id="menu-title">Developer Maker</h1>
            </div>
            <div id="active-menu">
                <div id="active-title">
                    <h2>Activation</h2>
                </div>
                <div className="wrapper">
                    <input type="checkbox" id="switch" onChange={changeCheck} />
                    <label htmlFor="switch" className="switch_label">
                        <span className="onf_btn"></span>
                    </label>
                </div>
            </div>
            <hr width="95%" color="#333" size="1" />
            <div>
                <h2 id="timer-title">Timer Setting</h2>
                <div className="timer-menu">
                    <input type="radio" id="setTimer" name="timer-set" value="setTimer" className='timerSet' checked />
                    <label htmlFor="setTimer" className='timerSet'>Timer starts when you press the button</label>
                </div>
                <div className="timer-menu">
                    <input type="radio" id="autoTimer" name="timer-set" value="autoTimer" className='timerSet' />
                    <label htmlFor="autoTimer" className='timerSet'>Timer starts automatically when you enter the problem page</label>
                </div>
            </div>
        </>
    );
}

export default Menu;