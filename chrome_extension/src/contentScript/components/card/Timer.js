import timer from './images/timer.svg'

function Timer() {
    return (
        <div className='buttons' id='timer-btn'>
            <img className='button-imgs' src={timer} title='Timer setting' />
        </div>
    )
}

export default Timer;