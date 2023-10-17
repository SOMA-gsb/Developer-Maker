import Profile from "./Profile";
import Analysis from "./Analysis";
import styled from 'styled-components';

const MyPageContainer = styled.div`
    display: flex;
`;

function MyPageContent(props) {
    return (
        <MyPageContainer>
            <Profile />
            <Analysis tagTableHeads={props.tagTableHeads} algorithmTags={props.algorithmTags} />
        </MyPageContainer>
    );
};

export default MyPageContent;