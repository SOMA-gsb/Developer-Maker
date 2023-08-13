import Timer from './Timer';
import StopWatch from './StopWatch';

function TimerSettting() {
    return (
        <div className='sub-menus timer-container'>
            <Timer />
            <hr id='timer-hr' />
            <StopWatch />
        </div>
    )
}

export default TimerSettting;