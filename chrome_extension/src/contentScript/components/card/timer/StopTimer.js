function StopTimer(props) {
    const probNum = window.location.href.split('/').reverse()[0];

    const handleStopClick = () => { 
        props.setStopState(!props.stopState);
        chrome.storage.local.get([`${probNum}Timer`, `${probNum}TimerRunning`, `${probNum}TimerStart`, `${probNum}TimerStop`, `${probNum}StopwatchRunning`, `${probNum}StopwatchStart`, `${probNum}StopwatchStop`], (res) => {
            if (res[`${probNum}Timer`]) {
                chrome.storage.local.set({
                    [`${probNum}TimerRunning`]: !res[`${probNum}TimerRunning`],
                    [`${probNum}TimerStart`]: (res[`${probNum}TimerRunning`] ? 0 : (Date.now() - res[`${probNum}TimerStop`])) + res[`${probNum}TimerStart`],
                    [`${probNum}TimerStop`]: Date.now(),
                })
            }
            else {
                chrome.storage.local.set({
                    [`${probNum}StopwatchRunning`]: !res[`${probNum}StopwatchRunning`],
                    [`${probNum}StopwatchStart`]: (res[`${probNum}StopwatchRunning`] ? 0 : (Date.now() - res[`${probNum}StopwatchStop`])) + res[`${probNum}StopwatchStart`],
                    [`${probNum}StopwatchStop`]: Date.now(),
                })
            }
        })
    }

    return (
        <div className='timer-bar-btns' id='stop-btn' onClick={handleStopClick}>{props.stopState ? 'START' : 'STOP'}</div>
    )
}

export default StopTimer;