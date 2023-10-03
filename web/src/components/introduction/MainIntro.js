import SWMLogo from '../../assets/SWMLogo.png';
import './MainIntro.css';

function MainIntro() {
    return (
        <div id="main-intro">
            <div id="main-intro-title">
                Let's Improve Algorithm Skills <br/>With <span id='main-highlight'>Developer Maker</span>
            </div>
            <div id="main-intro-subtitle">
                Improve Your Algorithm Skills <br/>Through Developer Maker’s Various Algorithm Services
            </div>
            <img id='main-SWMLogo' src={SWMLogo} alt='SMWLogo' />
        </div>
    )
}

export default MainIntro;