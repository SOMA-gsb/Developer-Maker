import CurriBar from './CurriBar';
import CurriGraph from './CurriGraph';

function CurriContents(props) {
    return (
        <div>
            <CurriBar tag={props.tag} level={props.level} />
            <CurriGraph />
        </div>
    );
};

export default CurriContents;
