import { Link } from "react-router-dom";
import { pencilIcon } from "../../assets/common";

function TagListElem(props) {
    return (
        <div className="list-elem">
            <div className="list-link-wrapper">
                 <Link to={`/curriculum/${props.tag.toLowerCase().replace(/ /g, '')}/${props.level}`}>
                     <img className="pencil-icon" src={pencilIcon} alt='study' />
                 </Link>
             </div>
             <div className='list-title'>{props.tag}</div>
             <div className="list-level-wrapper">
                 <div className={`level-box lev${props.level}`}>Lv. {props.level}</div>
             </div>
             <div className="list-progress">
                 <progress className={`tag-progress-bar lev${props.level}`} value={props.progress} min="0" max="100"></progress>
                 <span>{props.progress}%</span>
             </div>
             <div>{props.lastStudy}</div>
        </div>
    );
};

export default TagListElem;