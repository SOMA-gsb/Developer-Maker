import { Footer, NavBar, TagSearch, TitleBox } from "../components";
import { taglistIcon } from "../assets/taglist";

function TagList() {
    return (
        <>
            <NavBar />
            <TitleBox title="Algorithm Tag List" subtitle="Develop your algorithm skill !" icon={taglistIcon} />
            <TagSearch />
            <Footer />
        </>
    );
};

export default TagList;