function TerminateTimer(props) {
    const probNum = window.location.href.split('/').reverse()[0];

    const handleTerminateClick = (event) => {
        event.preventDefault();
        chrome.storage.local.set({
            [`${probNum}Timer`]: false,
            [`${probNum}TimerRunning`]: false,
        })
        props.setTimerVisible(false);
    }

    return (
        <div id='terminate-btn' onClick={handleTerminateClick}>TERMINATE</div>
    )
}

export default TerminateTimer;