import Button from "./Button";

function Timer() {
    const container = document.querySelector('.btn-group');
    container.insertAdjacentHTML('afterbegin', Button("타이머", "gsb-select-button"))
}

export default Timer;