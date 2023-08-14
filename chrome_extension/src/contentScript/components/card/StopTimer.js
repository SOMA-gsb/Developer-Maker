function StopTimer(props) {
    const probNum = window.location.href.split('/').reverse()[0];

    const handleStopClick = () => { 
        props.setStopState(!props.stopState);
        chrome.storage.local.get([`${probNum}TimerRunning`, `${probNum}TimerStart`, `${probNum}TimerStop`], (res) => {
            chrome.storage.local.set({
                [`${probNum}TimerRunning`]: !res[`${probNum}TimerRunning`],
                [`${probNum}TimerStart`]: (res[`${probNum}TimerRunning`] ? 0 : (Date.now() - res[`${probNum}TimerStop`])) + res[`${probNum}TimerStart`],
                [`${probNum}TimerStop`]: Date.now(),
            })
        })
    }

    return (
        <div id='stop-btn' onClick={handleStopClick}>{props.stopState ? 'START' : 'STOP'}</div>
    )
}

export default StopTimer;