import './CurriGraph.css';
import Tree from 'react-d3-tree';

function CurriGraph() {
    return (
        <div id="curriculum-tree-wrapper">
            <Tree id="curriculum-tree-background" data={orgChart} orientation='vertical' />
        </div>
    );
};

export default CurriGraph;

const orgChart = {
    name: 'Graph Traversal',
    children: [
        {
        name: 'BFS & DFS',
        attributes: {
            '': 'CodeForce 1340A',
        },
        children: [
            {
            name: 'The Movement Of The Night',
            attributes: {
                '': 'CodeForce 1015A',
            },
            children: [
                {
                name: 'Research Institute',
                attributes: {
                    '': 'CodeForce 1340D',
                },
                children: [
                    {
                    name: 'Swan Lake',
                    attributes: {
                        '': 'CodeForce 2003A',
                    },
                    },
                ],
                },
                {
                name: 'Tomato',
                attributes: {
                    '': 'CodeForce 1051C',
                },
                children: [
                    {
                    name: 'Robot',
                    attributes: {
                        '': 'CodeForce 2000A',
                    },
                    },
                ],
                },
            ],
            },
            {
            name: 'Alphabet',
            attributes: {
                '': 'CodeForce 1996A',
            },
            children: [
                {
                name: 'Ant',
                attributes: {
                    '': 'CodeForce 1605B',
                },
                },
            ],
            },
        ],
        },
    ],
};