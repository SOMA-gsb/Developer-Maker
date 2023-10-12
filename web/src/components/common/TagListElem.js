import { Link } from "react-router-dom";
import { pencilIcon } from "../../assets/common";

function TagListElem(props) {
    return (
        <tr key={props.id}>
            <th>
                <Link to={`/curriculum/${props.tag.toLowerCase().replace(/ /g, '')}/${props.level}`}>
                    <img className="pencil-icon" src={pencilIcon} alt='study' />
                </Link>
            </th>
            <td className='tag-list-title list-bolder'>{props.tag}</td>
            <td>
                <div className={`level-box lev${props.level}`}>Lv. {props.level}</div>
            </td>
            <td>
                <progress className={`tag-progress-bar lev${props.level}`} value={props.progress} min="0" max="100"></progress>
                <span>{props.progress}%</span>
            </td>
            <td>{props.lastStudy}</td>
        </tr>
    );
};

export default TagListElem;