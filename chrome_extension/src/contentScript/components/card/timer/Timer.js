import { useState } from 'react';

function TimerInput(props) {
    return (
        <>
            <input className='timer-setting' type='number' min='0' max={props.max} onChange={event => props.setElement(event.target.value)} />
            {props.span && <span className='timer-division'>:</span>}
        </>
    )
}

function Timer(props) {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const probNum = window.location.href.split('/').reverse()[0];

    const handleTimerStartClick = (event) => {
        event.preventDefault();
        props.setTimerVisible(true);
        props.setSubMenuState('');
        props.setMenuState('');
        props.setTimerTitle('REST TIME');
        chrome.storage.local.set({
            [`${probNum}Timer`]: true,
            [`${probNum}Stopwatch`]: false,
            [`${probNum}TimerOption`]: Number(hour) * 3600 + Number(minute) * 60 + Number(second),
            [`${probNum}TimerRunning`]: true,
            [`${probNum}TimerStart`]: Date.now(),
            [`${probNum}TimerStop`]: Date.now(),
            [`${probNum}Time`]: [hour, minute, second],
        })
    }

    return (
        <form>
            <TimerInput max={99} span={true} setElement={setHour} />
            <TimerInput max={59} span={true} setElement={setMinute} />
            <TimerInput max={59} span={false} setElement={setSecond} />
            <button className='timer-btns' id='timer-start' onClick={handleTimerStartClick}>START</button>
        </form>
    )
}

export default Timer;