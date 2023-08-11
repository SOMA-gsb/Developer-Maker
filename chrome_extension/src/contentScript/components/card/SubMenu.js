import InputDescription from "./InputDescription";
import TagLoading from "./TagLoading";

function SubMenu(props) {
    if (props.subMenuState === '') return null

    console.log(props.subMenuState)
    return (
        <>
            {props.subMenuState === 'input' && <InputDescription setSubMenuState={props.setSubMenuState} />}
            {props.subMenuState === 'loading' && <TagLoading setSubMenuState={props.setSubMenuState} />}
            {props.subMenuState === 'result' && <InputDescription />}
        </>
    )
}

export default SubMenu;