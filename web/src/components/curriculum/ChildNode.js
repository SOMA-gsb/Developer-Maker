import { psIcon, solvingIcon } from '../../assets/curriculum';
import Tooltip from '@mui/material/Tooltip';
import './ChildNode.css'

function ChildNode({ nodeDatum }) {
    let [probRef, probNum] = nodeDatum.attributes.ref.split(' ');
    const infos = nodeDatum.attributes ? nodeDatum.attributes : null;

    if(probRef === 'CodeForces')
        probRef = `https://codeforces.com/problemset/problem/${probNum.slice(0, -1)}/${probNum[probNum.length - 1]}`;
    else if(probRef === 'BOJ') 
        probRef = `https://www.acmicpc.net/problem/${probNum}`;

    return (
        <Tooltip title={nodeDatum.name} followCursor arrow>
            <g className='currigraph-wrapper currigraph-child' onClick={() => window.open(probRef)}>
                <rect className={`currigraph-rect ${infos.solved ? 'lev'+infos.level : ''}`} />
                <image href={infos?.solved ? solvingIcon : psIcon} />
                <text className={`currigraph-child-title ${infos.solved ? '' : 'lev'+infos.level}`}>
                    {
                        nodeDatum.name.length > 15 ? 
                        nodeDatum.name.slice(0, 15) + '...' : nodeDatum.name
                    }
                </text>
                <text className={`currigraph-child-ref ${infos.solved ? 'solved' : ''}`}>
                    {infos?.ref}
                </text>
            </g>
        </Tooltip>
    );
};

export default ChildNode;