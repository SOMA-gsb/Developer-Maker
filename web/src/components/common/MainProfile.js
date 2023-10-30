import { userLevIcon, userPicture } from '../../assets/mypage';

function MainProfile() {
    return (
        <>
            <div id="mypage-profile-background"></div>
            <div id="mypage-profile-img"><img src={userPicture} /></div>
            <div id="mypage-profile-name">
                <img src={userLevIcon} />
                <span>GSB</span>
            </div>
        </>
    );
};

export default MainProfile;