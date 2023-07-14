/* global chrome */
import TimeElem from "./TimeElem";

function TimeSet() {
    const container = document.querySelector(".btn-group");
    container.insertAdjacentHTML('beforeend', `<form name="timerFrm" class="dropdown-menu" id="timer-set" style="display: none">
        ${TimeElem('hour', '시간', 99)}
        ${TimeElem('minute', '분')}
        ${TimeElem('second', '초')}
        <button class="timer" id="timer-start">타이머 시작</button>
    </form>`);
    
    document.getElementById('timer-set').addEventListener('submit', (event) => {
        event.preventDefault();
        const hour = document.getElementById('hour').value;
        const minute = document.getElementById('minute').value;
        const second = document.getElementById('second').value;
        let probNum = window.location.href.split('/').reverse()[0];

        chrome.storage.local.set({
            [`${probNum}Timer`]: true,
            [`${probNum}TimeOption`]: Number(hour) * 3600 + Number(minute) * 60 + Number(second),
            [`${probNum}Start`]: Date.now(),
            [`${probNum}isRunning`]: true,
            [`${probNum}Stop`]: Date.now(),
        })
        
        document.getElementById('timer-set').style.display = "none";
        
        const restTime = document.getElementById("rest-time-text");
        restTime.innerHTML = `남은&nbsp시간&nbsp&nbsp&nbsp<b>${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:${second.padStart(2, '0')}</b>`;

        const timerStopTxt = document.getElementById('timer-stop-text');
        timerStopTxt.innerHTML = '일시정지';

        const timerGroup = document.getElementsByClassName('timer-group');
        for (let i = 0; i < timerGroup.length; ++i) {
            timerGroup[i].style.display = 'block';
        }
    })
}

export default TimeSet;