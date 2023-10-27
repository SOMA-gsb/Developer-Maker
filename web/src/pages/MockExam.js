import { NavBar, Footer, TitleBox, Register } from "../components";
import { mockexamIcon } from "../assets/mockexam";
import Result from "../components/mockexam/Result";

function MockExam() {
    return (
        <>
            <NavBar />
            <TitleBox title="Algorithm Mock Exam" subtitle="Check your algorithm skill !" icon={mockexamIcon} />
            <Register />
            <Result />
            <Footer />
        </>
    );
};

export default MockExam;