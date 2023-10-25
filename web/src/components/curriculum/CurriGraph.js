import './CurriGraph.css';
import Tree from 'react-d3-tree';
import RootNode from './RootNode';
import ChildNode from './ChildNode';

function renderCurriNode({ nodeDatum }) {
    if (nodeDatum.attributes?.ref)
        return <ChildNode nodeDatum={nodeDatum} />;
    else
        return <RootNode nodeDatum={nodeDatum} />;
};

function CurriGraph() {
    return (
        <div id="curriculum-tree-wrapper">
            <Tree
                id="curriculum-tree-background" 
                data={curriProbs} 
                orientation='vertical'
                renderCustomNodeElement={renderCurriNode}
            />
        </div>
    );
};

export default CurriGraph;

const curriProbs = {
    name: 'Graph Traversal',
    attributes: {
        level: 1,
        solved: true,
    },
    children: [
        {
        name: 'BFS & DFS',
        attributes: {
            ref: 'CodeForces 1340A',
            level: 1,
            solved: true,
        },
        children: [
            {
            name: 'The Movement Of The Night',
            attributes: {
                ref: 'CodeForces 1015A',
                level: 1,
                solved: false,
            },
            children: [
                {
                name: 'Research Institute',
                attributes: {
                    ref: 'CodeForces 1340D',
                    level: 2,
                    solved: false,
                },
                children: [
                    {
                    name: 'Swan Lake',
                    attributes: {
                        ref: 'CodeForces 2003A',
                        level: 3,
                        solved: false,
                    },
                    },
                ],
                },
                {
                name: 'Tomato',
                attributes: {
                    ref: 'CodeForces 1051C',
                    level: 2,
                    solved: false,
                },
                children: [
                    {
                    name: 'Robot',
                    attributes: {
                        ref: 'CodeForces 2000A',
                        level: 2,
                        solved: false,
                    },
                    },
                ],
                },
            ],
            },
            {
            name: 'Alphabet',
            attributes: {
                ref: 'CodeForces 1996A',
                level: 2,
                solved: true,
            },
            children: [
                {
                name: 'Ant',
                attributes: {
                    ref: 'CodeForces 1605B',
                    level: 3,
                    solved: true,
                },
                },
            ],
            },
        ],
        },
    ],
};