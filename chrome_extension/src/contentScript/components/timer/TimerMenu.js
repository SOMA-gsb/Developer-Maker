/* global chrome */
import RestTime from "./RestTime";
import StopTimer from "./StopTimer";
import TermTimer from "./TermTimer";

function TimerMenu() {
    TermTimer();
    StopTimer();
    RestTime();

    const probNum = window.location.href.split('/').reverse()[0];
    const timerGroup = document.getElementsByClassName('timer-group');

    chrome.storage.local.get([`${probNum}Timer`, `${probNum}isRunning`], (res) => {
        if (`${probNum}Timer` in res && !(res[`${probNum}Timer`] == false && res[`${probNum}isRunning`] == false)) {
            for (let i = 0; i < timerGroup.length; ++i) {
                timerGroup[i].style.display = 'block';
                console.log("block");
            }
        }
        else {
            for (let i = 0; i < timerGroup.length; ++i) {
                timerGroup[i].style.display = 'none';
                console.log("none");
            }
        }
    })
}

export default TimerMenu;