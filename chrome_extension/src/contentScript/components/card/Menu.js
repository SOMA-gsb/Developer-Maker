import Recommend from "./Recommend";
import Tag from "./Tag";
import Timer from "./Timer";

function Menu() {
    return (
        <div id='menu'>
            <Tag />
            <Recommend />
            <Timer />
        </div>
    )
}

export default Menu;