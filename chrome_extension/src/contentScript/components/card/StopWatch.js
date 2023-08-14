function StopWatch(props) {
    const probNum = window.location.href.split('/').reverse()[0];

    const handleStopWatchClick = (event) => {
        event.preventDefault();
        props.setTimerVisible(true);
        props.setTimerTitle('PAST TIME');
        chrome.storage.local.set({
            [`${probNum}Stopwatch`]: true,
            [`${probNum}Timer`]: false,
            [`${probNum}StopwatchRunning`]: true,
            [`${probNum}StopwatchStart`]: Date.now(),
            [`${probNum}StopwatchStop`]: Date.now(),
            [`${probNum}StopwatchTime`]: [0, 0, 0],
        })
    }

    return (
        <button className='timer-btns' id='stop-watch-btn' onClick={handleStopWatchClick}>Stop Watch</button>
    )
}

export default StopWatch;