import InputDescription from "./tag/InputDescription";
import RecommendLoading from "./recommend/RecommendLoading";
import RecommendResult from "./recommend/RecommendResult";
import TagLoading from "./tag/TagLoading";
import TagResult from "./tag/TagResult";
import TimerSettting from "./timer/TimerSetting";

function SubMenu(props) {
    if (props.subMenuState === '') return null

    return (
        <>
            {props.subMenuState === 'tagInput' && <InputDescription setSubMenuState={props.setSubMenuState} />}
            {props.subMenuState === 'tagLoading' && <TagLoading setSubMenuState={props.setSubMenuState} />}
            {props.subMenuState === 'tagResult' && <TagResult />}
            {props.subMenuState === 'recommendLoading' && <RecommendLoading setSubMenuState={props.setSubMenuState} />}
            {props.subMenuState === 'recommendResult' && <RecommendResult />}
            {props.subMenuState === 'timerSetting' && <TimerSettting setTimerVisible={props.setTimerVisible} setTimerTitle={props.setTimerTitle} />}
        </>
    )
}

export default SubMenu;