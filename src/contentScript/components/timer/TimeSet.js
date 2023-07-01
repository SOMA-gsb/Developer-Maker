import TimeElem from "./TimeElem";

function TimeSet() {
    const container = document.querySelector(".btn-group");
    container.insertAdjacentHTML('beforeend', `<form name="timerFrm" class="dropdown-menu" id="timer-set" style="display: none">
        ${TimeElem('hour', '시간')}
        ${TimeElem('minute', '분')}
        ${TimeElem('second', '초')}
        <button class="timer" id="timer-start">타이머 시작</button>
    </form>`);
}

export default TimeSet;