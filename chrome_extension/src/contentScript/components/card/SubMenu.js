import InputDescription from "./InputDescription";
import TagLoading from "./TagLoading";
import TagResult from "./TagResult";

function SubMenu(props) {
    if (props.subMenuState === '') return null

    console.log(props.subMenuState)
    return (
        <>
            {props.subMenuState === 'input' && <InputDescription setSubMenuState={props.setSubMenuState} />}
            {props.subMenuState === 'loading' && <TagLoading setSubMenuState={props.setSubMenuState} />}
            {props.subMenuState === 'result' && <TagResult />}
        </>
    )
}

export default SubMenu;