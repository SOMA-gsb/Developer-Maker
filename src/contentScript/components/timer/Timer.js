import Button from "../common/Button";
import TimeSet from "./TimeSet";
import TimerMenu from "./TimerMenu";

function Timer() {
    document.querySelector('.btn-group').insertAdjacentHTML('afterbegin', Button("타이머", "timer"))

    TimeSet();
    const timerSet = document.getElementById('timer-set');
    if (document.getElementById("lang-select-button") == null) {
        timerSet.style.right = '134px';
    }

    document.getElementById('timer-button').addEventListener('click', (event) => {
        timerSet.style.display = (timerSet.style.display == "none" ? "block" : "none");
    })

    document.querySelector('body').addEventListener('click', (event) => {
        if (event.target.classList.contains('timer') == false) {
            timerSet.style.display = "none";
        }
    })

    TimerMenu();
    document.getElementById('timer-set').addEventListener('submit', (event) => {
        event.preventDefault();
        //TimerMenu();
        console.log(timerFrm.hour.value);
    })
}

export default Timer;