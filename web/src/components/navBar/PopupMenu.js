import { Link } from 'react-router-dom';
import { logoutIcon, userIcon } from '../../assets/navBar';
import MainProfile from '../common/MainProfile';
import './PopupMenu.css'

function PopUpMenuElem({ icon, title }) {
    return (
        <Link to="/mypage" className='popup-menu'>
            <img src={icon} />
            <div>{title}</div>
        </Link>
    );
}

function PopUpMenu() {
    return (
        <div className="popup-menu-wrapper">
            <MainProfile />
            <div className='popup-menus'>
                <PopUpMenuElem icon={userIcon} title="My Page" />
                <PopUpMenuElem icon={logoutIcon} title="Logout" />
            </div>
        </div>
    );
};

export default PopUpMenu;