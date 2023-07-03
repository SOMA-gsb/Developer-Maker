import Button from "../common/Button";

function terminateTimer() {
    chrome.storage.local.set({
        timer: 0,
        isRunning: false,
    }, () => {
        const timerGroup = document.getElementsByClassName('timer-group');
        for (let i = 0; i < timerGroup.length; ++i) {
            timerGroup[i].style.display = 'none';
        }
        const timerStopTxt = document.getElementById('timer-stop-text');
        timerStopTxt.innerHTML = '일시정지';
    })
}

function TermTimer() {
    const container = document.querySelector('.btn-group');
    container.insertAdjacentHTML('afterbegin', Button("종료", "timer-terminate", false, 'timer-group'));

    const terminateBtn = document.getElementsByClassName('timer-terminate');
    for (let i = 0; i < terminateBtn.length; ++i) {
        terminateBtn[i].addEventListener('click', terminateTimer)
    } 
}

export default TermTimer;