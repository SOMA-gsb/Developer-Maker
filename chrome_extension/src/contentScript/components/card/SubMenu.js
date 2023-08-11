import InputDescription from "./InputDescription";

function SubMenu(props) {
    if (props.subMenuState === '') return null

    return (
        <>
            {props.subMenuState === 'input' && <InputDescription />}
            {props.subMenuState === 'loading' && <InputDescription />}
            {props.subMenuState === 'result' && <InputDescription />}
        </>
    )
}

export default SubMenu;