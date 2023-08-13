function StopWatch() {
    const handleStopWatchClick = (event) => {
        event.preventDefault();
        console.log('Stop Watch button clicked');
    }

    return (
        <button className='timer-btns' id='stop-watch-btn' onClick={handleStopWatchClick}>Stop Watch</button>
    )
}

export default StopWatch;