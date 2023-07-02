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

        chrome.storage.local.set({
            timer: 0,
            isRunning: true,
            timeOption: Number(hour) * 3600 + Number(minute) * 60 + Number(second)
        })
        
        document.getElementById('timer-set').style.display = "none";
        
        const restTime = document.getElementById("rest-time-text");
        restTime.innerHTML = `남은\u00A0시간\u00A0\u00A0\u00A0<b>${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:${second.padStart(2, '0')}</b>`;

        const timerStopTxt = document.getElementById('timer-stop-text');
        timerStopTxt.innerHTML = '일시정지';

        const timerGroup = document.getElementsByClassName('timer-group');
        for (let i = 0; i < timerGroup.length; ++i) {
            timerGroup[i].style.display = 'block';
        }
    })
}

export default TimeSet;