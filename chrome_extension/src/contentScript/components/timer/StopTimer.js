import Button from "../common/Button";

function pauseAndStop() {
    const probNum = window.location.href.split('/').reverse()[0];
    const timerStopTxt = document.getElementById('timer-stop-text');
    
    chrome.storage.local.get([`${probNum}isRunning`, `${probNum}isRunning`, `${probNum}Stop`, `${probNum}Start`], (res) => {
        chrome.storage.local.set({
            [`${probNum}isRunning`]: !res[`${probNum}isRunning`],
            [`${probNum}Start`]: (res[`${probNum}isRunning`] ? 0 : (Date.now() - res[`${probNum}Stop`])) + res[probNum + 'Start'],
            [`${probNum}Stop`]: Date.now(),
        }, () => {
            timerStopTxt.innerHTML = res[`${probNum}isRunning`] ? "시작" : "일시정지"
        })
    })
}

function StopTimer() {
    const probNum = window.location.href.split('/').reverse()[0];
    const container = document.querySelector('.btn-group');
    container.insertAdjacentHTML('afterbegin', Button("일시정지", "timer-stop", false, 'timer-group'));

    chrome.storage.local.get([`${probNum}isRunning`], (res) => {
        if (res[`${probNum}isRunning`] == false) {
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