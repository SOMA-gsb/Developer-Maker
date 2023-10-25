import { solvingIcon } from '../../assets/curriculum';
import Tooltip from '@mui/material/Tooltip';
import './RootNode.css'

function RootNode({ nodeDatum }) {
    const infos = nodeDatum.attributes ? nodeDatum.attributes : null;

    return (
        <Tooltip title={nodeDatum.name} followCursor arrow>
            <g className='currigraph-wrapper currigraph-root'>
                <circle className={`currigraph-rect ${'lev'+infos.level}`} />
                <image href={solvingIcon}/>
                <text >
                    {nodeDatum.name.split(' ')[0]}
                </text>
            </g>
        </Tooltip>
    );
};

export default RootNode;