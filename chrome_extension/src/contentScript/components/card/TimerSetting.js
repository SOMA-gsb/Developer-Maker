import Timer from './Timer';
import StopWatch from './StopWatch';

function TimerSettting(props) {
    return (
        <div className='sub-menus timer-container'>
            <Timer setTimerVisible={props.setTimerVisible} />
            <hr id='timer-hr' />
            <StopWatch />
        </div>
    )
}

export default TimerSettting;