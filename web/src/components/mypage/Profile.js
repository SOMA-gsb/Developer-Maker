import { bojIcon, codeforcesIcon, dmIcon, settingIcon, userLevIcon, userPicture } from '../../assets/mypage';
import MockExam from './MockExam';
import UserLevel from './UserLevel';
import './Profile.css';

function Profile() {
    return(
        <div id="mypage-profile">
            <div id="mypage-profile-bar">
                <div id="mypage-profile-title">Profile</div>
                <img id="mypage-profile-setting-icon" src={settingIcon} />
            </div>

            <div id="mypage-profile-background"></div>
            <div id="mypage-profile-img"><img src={userPicture} /></div>
            <div id="mypage-profile-name">
                <img src={userLevIcon} />
                <span>GSB</span>
            </div>
            <div id="mypage-profile-introduce">
                No Sweat, No Sweet :)
            </div>

            <UserLevel icon={dmIcon} title="GSB" level="Top 13%" />
            <UserLevel class="mypage-codeforces" icon={codeforcesIcon} title="Potato127" level="Orange" />
            <UserLevel class="mypage-boj" icon={bojIcon} title="Potato127" level="Platinum 4" />

            <MockExam title="The 2nd Week of September" level="Gray To Blue" date="23.09.10" />
        </div>
    );
};

export default Profile;