import './NavBar.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import mainLogo from "../../assets/mainLogo.png";
import userLogo from "../../assets/userLogo.png";

function NavBar() {
    return (
        <div id="Navigation-bar">
            <Link id="Main-btn" to="/"><img className="Nav-logos" src={mainLogo} alt="Developer Maker" /></Link>
            <div id='Nav-btns'>
                <CustomLink to="/taglist" className='Nav-btn'>Curriculum</CustomLink>
                <CustomLink to="/mockexam" className='Nav-btn'>Mock Exam</CustomLink>
                <CustomLink to="/mypage" className='Nav-btn'>GSB</CustomLink>
                <div id='User-btn'><img className="Nav-logos" src={userLogo} alt="userLogo"/></div>
            </div>
        </div>
    )
};

export default NavBar;

function CustomLink({ to, children }) {
    const match = useMatch(to);
    const resolvedPath = useResolvedPath(to);
    const active = match ? "active" : "";
    return (
        <Link className={`Nav-btn ${active}`} to={resolvedPath}>{children}</Link>
    );
}