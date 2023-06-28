function Button({name, id}) {
    return (
        <button type="button" className="btn btn-default gsb-dropdown-toggle ${id}" data-toggle="gsb-dropdown" href="#">
            <span className="gsb-select-text">
                ${name}
            </span>
            &nbsp;
            <span className="caret"></span>
        </button>
    );
}

export default Button;