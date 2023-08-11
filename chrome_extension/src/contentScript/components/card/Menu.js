import Recommend from "./Recommend";
import Tag from "./Tag";
import Timer from "./Timer";

function Menu(props) {
    return (
        <div id='menu'>
            <Tag setSubMenuState={props.setSubMenuState} />
            <Recommend />
            <Timer />
        </div>
    )
}

export default Menu;