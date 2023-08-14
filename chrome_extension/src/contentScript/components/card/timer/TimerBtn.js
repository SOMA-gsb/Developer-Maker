import timer from '../images/timer.svg'
import timerGray from '../images/timerGray.svg'

function Timer(props) {
    const handleTimerBtnClick = () => {
        props.setSubMenuState('timerSetting')
        props.setMenuState('timer')
    }

    return (
        <div className='buttons' id='timer-btn'>
            <img className='button-imgs' src={props.menuState == '' || props.menuState == 'timer' ? timer : timerGray} title='Timer setting' onClick={handleTimerBtnClick} />
        </div>
    )
}

export default Timer;