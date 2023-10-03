import './NavBar.css';
import { Link } from "react-router-dom";
import mainLogo from "../../assets/mainLogo.png";
import userLogo from "../../assets/userLogo.png";

function NavBar() {
    return (
        <div id="Navigation-bar">
            <Link id="Main-btn" to="/main"><img className="Nav-logos" src={mainLogo} alt="Developer Maker" /></Link>
            <div id='Nav-btns'>
                <div className='Nav-btn'>Curriculum</div>
                <div className='Nav-btn'>Mock Exam</div>
                <div className='Nav-btn'>GSB</div>
                <div id='User-btn'><img className="Nav-logos" src={userLogo} alt="userLogo"/></div>
            </div>
        </div>
    )
};

export default NavBar;