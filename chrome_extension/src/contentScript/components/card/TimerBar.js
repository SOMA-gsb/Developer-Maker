import RestTime from "./RestTime";
import StopTimer from "./StopTimer";
import TerminateTimer from "./TerminateTimer";

function TimerBar(props) {
    return (
        <div id='timer-bar'>
            <RestTime timerTitle={props.timerTitle} />
            <StopTimer stopState={props.stopState} setStopState={props.setStopState} />
            <TerminateTimer setTimerVisible={props.setTimerVisible} />
        </div>
    )
}

export default TimerBar;