import Button from "../common/Button";

function updateTime() {
    chrome.storage.local.get(["timer", "timeOption", "isRunning"], (res) => {
        const restTime = document.getElementById("rest-time-text");
        let timer = res.timeOption - res.timer;

        let hour = "00";
        if (Math.floor(timer / 3600) != 0) {
            hour = `${Math.floor(timer / 3600)}`.padStart(2, "0");
        }
        timer -= Math.floor(timer / 3600) * 3600;

        let minute = "00";
        if (Math.floor(timer / 60) != 0) {
            minute = `${Math.floor(timer / 60)}`.padStart(2, "0");
        }
        timer -= Math.floor(timer / 60) * 60;
        
        let second = "00";
        if (timer != 0) {
            second = `${timer}`.padStart(2, "0");
        }

        restTime.innerHTML = `남은\u00A0시간\u00A0\u00A0\u00A0<b>${hour}:${minute}:${second}</b>`;
    })
}

function RestTime() {
    const container = document.querySelector('.btn-group');
    container.insertAdjacentHTML('afterbegin', Button("남은&nbsp;시간&nbsp;&nbsp;&nbsp;<b>00:00:00</b>", "rest-time", false, 'timer-group'));

    updateTime();
    setInterval(updateTime, 1000);
}

export default RestTime;