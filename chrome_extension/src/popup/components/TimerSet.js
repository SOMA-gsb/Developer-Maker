function TimerSet() {
    return (
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
    )
}

export default TimerSet;