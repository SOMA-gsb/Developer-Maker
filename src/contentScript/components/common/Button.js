function Button(name, id, caret = true, classNm = "") {
    return (
        `<button type="button" class="btn btn-default gsb-dropdown-toggle ${id} ${classNm}" id="${id}-button" data-toggle="gsb-dropdown" href="#">
            <span class=${id} id="${id}-text">
                ${name}
            </span>
            ${caret ? `&nbsp;<span class="caret ${id}"></span>` : ``}
        </button>`
    );
}

export default Button;