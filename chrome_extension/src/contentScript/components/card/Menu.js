import RecommendBtn from "./recommend/RecommendBtn";
import TagBtn from "./tag/TagBtn";
import TimerBtn from "./timer/TimerBtn";

function Menu(props) {
    const handleMenuClick = () => {
        if(props.subMenuState !== '') {
            props.setMenuState('')
            props.setSubMenuState('')
        }
    }

    return (
        <div id='menu' onClick={handleMenuClick}>
            <TagBtn setSubMenuState={props.setSubMenuState} menuState={props.menuState} setMenuState={props.setMenuState} />
            <RecommendBtn setSubMenuState={props.setSubMenuState} menuState={props.menuState} setMenuState={props.setMenuState} />
            <TimerBtn setSubMenuState={props.setSubMenuState} menuState={props.menuState} setMenuState={props.setMenuState} />
        </div>
    )
}

export default Menu;