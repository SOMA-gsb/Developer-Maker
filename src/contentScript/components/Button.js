function Button(name, id) {
    return (
        `<button type="button" class="btn btn-default gsb-dropdown-toggle" id="${id}" data-toggle="gsb-dropdown" href="#">
            <span class="gsb-select-text">
                ${name}
            </span>
            &nbsp;
            <span class="caret"></span>
        </button>`
    );
}

export default Button;