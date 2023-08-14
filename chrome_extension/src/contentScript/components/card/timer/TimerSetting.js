import Timer from './Timer';
import StopWatch from './StopWatch';

function TimerSettting(props) {
    return (
        <div className='sub-menus timer-container'>
            <Timer setTimerVisible={props.setTimerVisible} setTimerTitle={props.setTimerTitle} />
            <hr id='timer-hr' />
            <StopWatch setTimerVisible={props.setTimerVisible} setTimerTitle={props.setTimerTitle} />
        </div>
    )
}

export default TimerSettting;