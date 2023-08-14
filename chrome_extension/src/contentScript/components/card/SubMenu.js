import InputDescription from "./InputDescription";
import RecommendLoading from "./RecommendLoading";
import RecommendResult from "./RecommendResult";
import TagLoading from "./TagLoading";
import TagResult from "./TagResult";
import TimerSettting from "./TimerSetting";

function SubMenu(props) {
    if (props.subMenuState === '') return null

    return (
        <>
            {props.subMenuState === 'tagInput' && <InputDescription setSubMenuState={props.setSubMenuState} />}
            {props.subMenuState === 'tagLoading' && <TagLoading setSubMenuState={props.setSubMenuState} />}
            {props.subMenuState === 'tagResult' && <TagResult />}
            {props.subMenuState === 'recommendLoading' && <RecommendLoading setSubMenuState={props.setSubMenuState} />}
            {props.subMenuState === 'recommendResult' && <RecommendResult />}
            {props.subMenuState === 'timerSetting' && <TimerSettting setTimerVisible={props.setTimerVisible} />}
        </>
    )
}

export default SubMenu;