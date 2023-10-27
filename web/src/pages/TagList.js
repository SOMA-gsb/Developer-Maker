import { Footer, List, NavBar, TagSearch, TitleBox } from "../components";
import { taglistIcon } from "../assets/taglist";
import { useState } from "react";

function TagList(props) {
    const [query, setQuery] = useState('');
    const [sortType, setSortType] = useState('Basic');

    return (
        <>
            <NavBar />
            <TitleBox title="Algorithm Tag List" subtitle="Develop your algorithm skill !" icon={taglistIcon} />
            <TagSearch setQuery={setQuery} sortType={sortType} setSortType={setSortType} />
            <List type='tagList' class='curriculum-tag-list' heads={props.tagTableHeads} contents={props.algorithmTags} query={query} sortType={sortType} />
            <Footer />
        </>
    );
};

export default TagList;