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

    chrome.storage.local.get([`${probNum}TimeOption`, `${probNum}Start`, `${probNum}Timer`, `${probNum}isRunning`, 'timerSet'], (res) => {
        if (`${probNum}Timer` in res && !(res[`${probNum}Timer`] == false && res[`${probNum}isRunning`] == false) && (Math.floor((Date.now() - res[`${probNum}Start`]) / 1000) < res[`${probNum}TimeOption`])) {
            for (let i = 0; i < timerGroup.length; ++i) {
                timerGroup[i].style.display = 'block';
            }
        }
        else if (res.timerSet === 'autoTimer') {
            for (let i = 0; i < timerGroup.length; ++i) {
                timerGroup[i].style.display = 'block';
            }

            chrome.storage.local.set({
                [`${probNum}Timer`]: true,
                [`${probNum}TimeOption`]: 3600,
                [`${probNum}Start`]: Date.now(),
                [`${probNum}isRunning`]: true,
                [`${probNum}Stop`]: Date.now(),
            })

            const restTime = document.getElementById("rest-time-text");
            restTime.innerHTML = `남은&nbsp시간&nbsp&nbsp&nbsp<b>01:00:00</b>`;

            const timerStopTxt = document.getElementById('timer-stop-text');
            timerStopTxt.innerHTML = '일시정지';
        }
        else {
            for (let i = 0; i < timerGroup.length; ++i) {
                timerGroup[i].style.display = 'none';
            }
        }
    })
}

export default TimerMenu;