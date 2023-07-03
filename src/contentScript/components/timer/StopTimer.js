import Button from "../common/Button";

function pauseAndStop() {
    const timerStopTxt = document.getElementById('timer-stop-text');
    chrome.storage.local.get(['isRunning'], (res) => {
        chrome.storage.local.set({
            isRunning: !res.isRunning
        }, () => {
            timerStopTxt.innerHTML = res.isRunning ? "시작" : "일시정지"
        })
    })
}

function StopTimer() {
    const container = document.querySelector('.btn-group');
    container.insertAdjacentHTML('afterbegin', Button("일시정지", "timer-stop", false, 'timer-group'));

    chrome.storage.local.get(['isRunning'], (res) => {
        if (res.isRunning == false) {
            const stopTimer = document.getElementById("timer-stop-text");
            stopTimer.innerHTML = '시작';
        }
    })

    const timerStopBtn = document.getElementsByClassName('timer-stop');
    for (let i = 0; i < timerStopBtn.length; ++i) {
        timerStopBtn[i].addEventListener('click', pauseAndStop)
    }
}

export default StopTimer;