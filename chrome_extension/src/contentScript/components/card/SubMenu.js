import InputDescription from "./tag/InputDescription";
import RecommendLoading from "./recommend/RecommendLoading";
import RecommendResult from "./recommend/RecommendResult";
import TagLoading from "./tag/TagLoading";
import TagResult from "./tag/TagResult";
import TimerSettting from "./timer/TimerSetting";
import { useState } from 'react';

function SubMenu(props) {
    if (props.subMenuState === '' || props.menuState === '') return null
    const [tagList, setTagList] = useState([])

    return (
        <>
            {props.subMenuState === 'tagInput' && <InputDescription subMenuState={props.subMenuState} setSubMenuState={props.setSubMenuState} curPage={props.curPage} setTagList={setTagList} />}
            {props.subMenuState === 'tagLoading' && <TagLoading subMenuState={props.subMenuState} setSubMenuState={props.setSubMenuState} />}
            {props.subMenuState === 'tagResult' && <TagResult tagList={tagList} />}
            {props.subMenuState === 'recommendLoading' && <RecommendLoading subMenuState={props.subMenuState} setSubMenuState={props.setSubMenuState} />}
            {props.subMenuState === 'recommendResult' && <RecommendResult />}
            {props.subMenuState === 'timerSetting' && <TimerSettting setSubMenuState={props.setSubMenuState} setTimerVisible={props.setTimerVisible} setTimerTitle={props.setTimerTitle} setMenuState={props.setMenuState} menuState={props.menuState} />}
        </>
    )
}

export default SubMenu;