import { Footer, List, NavBar, TagSearch, TitleBox } from "../components";
import { taglistIcon } from "../assets/taglist";
import { useState } from "react";

import styled from "@emotion/styled";

const TagListWrapper = styled.div`
    min-height: calc(100% - 15rem) !important;
`;

function TagList(props) {
    const [query, setQuery] = useState('');
    const [sortType, setSortType] = useState('Basic');

    return (
        <>
            <NavBar />
            <TagListWrapper>
                <TitleBox title="Algorithm Tag List" subtitle="Develop your algorithm skill !" icon={taglistIcon} />
                <TagSearch setQuery={setQuery} sortType={sortType} setSortType={setSortType} />
                <List type='tagList' class='curriculum-tag-list' heads={props.tagTableHeads} contents={props.algorithmTags} query={query} sortType={sortType} />
            </TagListWrapper>
            <Footer />
        </>
    );
};

export default TagList;