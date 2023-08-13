import RecommendBtn from "./RecommendBtn";
import TagBtn from "./TagBtn";
import TimerBtn from "./TimerBtn";

function Menu(props) {
    return (
        <div id='menu'>
            <TagBtn setSubMenuState={props.setSubMenuState} />
            <RecommendBtn setSubMenuState={props.setSubMenuState} />
            <TimerBtn setSubMenuState={props.setSubMenuState} />
        </div>
    )
}

export default Menu;