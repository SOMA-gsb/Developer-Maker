function TimeElem(name, text) {
    return (`
        <input type="number" class="timer-elem timer" name="${name}" value="0">
        <span class="timer">${text}</span>
    `);
}

export default TimeElem;