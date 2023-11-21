import { useParams } from "react-router-dom";
import { NavBar, Footer, CurriContents } from "../components";

function Curriculum() {
    const { tag, level } = useParams();
    return (
        <>
            <NavBar />
            <CurriContents tag={tag} level={level} />
            <Footer />
        </>
    );
};

export default Curriculum;
  