import { Footer, List, NavBar, TagSearch, TitleBox } from "../components";
import { taglistIcon } from "../assets/taglist";
import { useState } from "react";

function TagList() {
    const [query, setQuery] = useState('');
    const [sortType, setSortType] = useState('Basic');

    return (
        <>
            <NavBar />
                <TitleBox title="Algorithm Tag List" subtitle="Develop your algorithm skill !" icon={taglistIcon} />
                <TagSearch setQuery={setQuery} sortType={sortType} setSortType={setSortType} />
                <List type='tagList' heads={tagTableHeads} contents={algorithmTags} query={query} sortType={sortType} />
            <Footer />
        </>
    );
};

export default TagList;

const tagTableHeads = [
    {
        id: 1,
        name: 'Algorithm Tag'
    },
    {
        id: 2,
        name: 'Level'
    },
    {
        id: 3,
        name: 'Progress'
    },
    {
        id: 4,
        name: 'Last Study'
    }
];

const algorithmTags = [
    {
        id: 1,
        tag: 'Mathematics',
        level: 1,
        progress: 70,
        lastStudy: '2023.09.02'
    },
    {
        id: 2,
        tag: 'Implementation',
        level: 2,
        progress: 50,
        lastStudy: '2023.09.05'
    },
    {
        id: 3,
        tag: 'Dynamic Programming',
        level: 3,
        progress: 50,
        lastStudy: '2023.04.07'
    },
    {
        id: 4,
        tag: 'Data Structure',
        level: 4,
        progress: 70,
        lastStudy: '2023.07.18'
    },
    {
        id: 5,
        tag: 'Graph Theory',
        level: 5,
        progress: 70,
        lastStudy: '2023.05.16'
    },
    {
        id: 6,
        tag: 'Greedy',
        level: 6,
        progress: 90,
        lastStudy: '2023.07.15'
    },
    {
        id: 7,
        tag: 'String',
        level: 7,
        progress: 90,
        lastStudy: '2023.09.07'
    },
    {
        id: 8,
        tag: 'Btruete Force',
        level: 1,
        progress: 20,
        lastStudy: '2023.03.02'
    },
    {
        id: 9,
        tag: 'Graph Traversal',
        level: 1,
        progress: 30,
        lastStudy: '2022.11.15'
    },
    {
        id: 10,
        tag: 'Sorting',
        level: 2,
        progress: 70,
        lastStudy: '2023.05.05'
    },
    {
        id: 11,
        tag: 'Divide and Conquer',
        level: 2,
        progress: 50,
        lastStudy: '2023.08.02'
    },
    {
        id: 12,
        tag: 'Backtracking',
        level: 3,
        progress: 50,
        lastStudy: '2023.09.02'
    },
    {
        id: 13,
        tag: 'Bit Manipulation',
        level: 3,
        progress: 50,
        lastStudy: '2023.09.02'
    },
    {
        id: 14,
        tag: 'Geometry',
        level: 4,
        progress: 50,
        lastStudy: '2023.09.02'
    },
    {
        id: 15,
        tag: 'Number Theory',
        level: 4,
        progress: 50,
        lastStudy: '2023.09.02'
    }
];