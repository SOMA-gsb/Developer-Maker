import Button from "../common/Button";

function TimerMenu() {
    const container = document.querySelector('.btn-group');
    container.insertAdjacentHTML('afterbegin', Button("종료", "timer-terminate", false, 'timer-group'));
    container.insertAdjacentHTML('afterbegin', Button("일시정지", "timer-stop", false, 'timer-group'));
    container.insertAdjacentHTML('afterbegin', Button("남은 시간", "rest-time", false, 'timer-group'));
}

export default TimerMenu;