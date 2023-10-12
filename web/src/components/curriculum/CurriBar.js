import './CurriBar.css'
import leftIcon from '../../assets/common/leftIcon.png';
import { useNavigate } from "react-router-dom";

function Curriculum(props) {
    const navigate = useNavigate();
    return (
        <div className="curriculum-bar">
            <div className="curriculum-bar-back" onClick={() => navigate(-1)}>
                <img src={leftIcon} class='curriculum-left-icon'/>
                Algorithm Tag List
            </div>
            <div className="curriculum-bar-title">{props.tag.toUpperCase()}</div>
            <div className="curriculum-bar-level">
                <div className='curriculum-bar-level-box'>
                    Lv. {props.level}
                </div>
            </div>
        </div>
    );
};

export default Curriculum;