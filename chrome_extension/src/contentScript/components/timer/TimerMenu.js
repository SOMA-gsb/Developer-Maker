/* global chrome */
import RestTime from "./RestTime";
import StopTimer from "./StopTimer";
import TermTimer from "./TermTimer";

function TimerMenu() {
    TermTimer();
    StopTimer();
    RestTime();

    chrome.storage.local.get(['timer', 'isRunning'], (res) => {
        if (!(res.timer == 0 && res.isRunning == false)) {
            const timerGroup = document.getElementsByClassName('timer-group');
            for (let i = 0; i < timerGroup.length; ++i) {
                timerGroup[i].style.display = 'block';
            }
        }
    })
}

export default TimerMenu;