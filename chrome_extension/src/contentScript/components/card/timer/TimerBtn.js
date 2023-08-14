import timer from '../images/timer.svg'

function Timer(props) {
    return (
        <div className='buttons' id='timer-btn'>
            <img className='button-imgs' src={timer} title='Timer setting' onClick={() => props.setSubMenuState('timerSetting')} />
        </div>
    )
}

export default Timer;