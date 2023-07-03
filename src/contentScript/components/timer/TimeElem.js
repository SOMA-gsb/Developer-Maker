function TimeElem(name, text, max = 59) {
    return (`
        <input type="number" min="0" max="${max}" class="timer-elem timer" name="${name}" id="${name}" value="0">
        <span class="timer">${text}</span>
    `);
}

export default TimeElem;