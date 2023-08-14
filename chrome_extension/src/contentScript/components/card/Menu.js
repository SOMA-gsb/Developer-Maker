import RecommendBtn from "./recommend/RecommendBtn";
import TagBtn from "./tag/TagBtn";
import TimerBtn from "./timer/TimerBtn";

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