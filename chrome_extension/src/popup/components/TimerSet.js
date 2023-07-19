import { useEffect, useState } from "react";

function TimerSet() {
    const [timerSet, setTimerSet] = useState('setTimer');

    useEffect(() => {
        chrome.storage.local.get(['timerSet'], (res) => {
            if (res.timerSet == 'autoTimer') setTimerSet('autoTimer');
            console.log("use " + timerSet);
            
            document.getElementById(timerSet).defaultChecked = true;
        })
    })

    function updateTimerSet(e) {
        setTimerSet(e.target.value);
        chrome.storage.local.set({
            timerSet: e.target.value
        })
    }

    return (
        <div>
            <h2 id="timer-title">Timer Setting</h2>
            <div className="timer-menu">
                <input type="radio" id="setTimer" name="timer-set" value="setTimer" className='timerSet' onChange={updateTimerSet} />
                <label htmlFor="setTimer" className='timerSet'>Timer starts when you press the button</label>
            </div>
            <div className="timer-menu">
                <input type="radio" id="autoTimer" name="timer-set" value="autoTimer" className='timerSet' onChange={updateTimerSet} />
                <label htmlFor="autoTimer" className='timerSet'>Timer starts automatically when you enter the problem page</label>
            </div>
        </div>
    )
}

export default TimerSet;