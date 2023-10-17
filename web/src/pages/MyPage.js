import { Footer, NavBar, MyPageContent } from "../components";

function MyPage(props) {
    return (
        <>
            <NavBar />
            <MyPageContent tagTableHeads={props.tagTableHeads} algorithmTags={props.algorithmTags} />
            <Footer />
        </>
    );
};

export default MyPage;