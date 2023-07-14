import Button from "../common/Button";

function updateTime() {
    const probNum = window.location.href.split('/').reverse()[0];
    const restTime = document.getElementById("rest-time-text");
    
    chrome.storage.local.get([`${probNum}TimeOption`, `${probNum}Start`, `${probNum}isRunning`, `${probNum}H`, `${probNum}M`, `${probNum}S`], (res) => {
        if (res[`${probNum}isRunning`]) {
            const diffTime = Math.floor((Date.now() - res[`${probNum}Start`]) / 1000);
            let timer = res[`${probNum}TimeOption`] - diffTime;
            let hour = "00", minute = "00", second = "00";

            if (timer > 0) {
                if (Math.floor(timer / 3600) != 0) {
                    hour = `${Math.floor(timer / 3600)}`.padStart(2, "0");
                }
                timer -= Math.floor(timer / 3600) * 3600;

                if (Math.floor(timer / 60) != 0) {
                    minute = `${Math.floor(timer / 60)}`.padStart(2, "0");
                }
                timer -= Math.floor(timer / 60) * 60;
                
                if (timer != 0) {
                    second = `${timer}`.padStart(2, "0");
                }
            }
            restTime.innerHTML = `남은&nbsp시간&nbsp&nbsp&nbsp<b>${hour}:${minute}:${second}</b>`;

            chrome.storage.local.set({
                [`${probNum}H`]: hour,
                [`${probNum}M`]: minute,
                [`${probNum}S`]: second,
            })

            if (hour == '00' && minute == '00' && second == '00') {
                chrome.storage.local.set({
                    [`${probNum}Timer`]: false,
                    [`${probNum}isRunning`]: false,
                })
                const timerGroup = document.getElementsByClassName('timer-group');
                for (let i = 0; i < timerGroup.length; ++i) {
                    timerGroup[i].style.display = 'none';
                }
                const timerStopTxt = document.getElementById('timer-stop-text');
                timerStopTxt.innerHTML = '일시정지';
            }
        }
        else {
            restTime.innerHTML = `남은&nbsp시간&nbsp&nbsp&nbsp<b>${res[`${probNum}H`]}:${res[`${probNum}M`]}:${res[`${probNum}S`]}</b>`;
        }
    })
}

function RestTime() {
    const container = document.querySelector('.btn-group');
    container.insertAdjacentHTML('afterbegin', Button("남은&nbsp;시간&nbsp;&nbsp;&nbsp;<b>00:00:00</b>", "rest-time", false, 'timer-group'));

    updateTime();
    setInterval(updateTime, 10);
}

export default RestTime;