import { bojIcon, codeforcesIcon, dmIcon, settingIcon } from '../../assets/mypage';
import MockExam from './MockExam';
import UserLevel from './UserLevel';
import MainProfile from '../common/MainProfile';
import './Profile.css';

function Profile() {
    return(
        <div id="mypage-profile">
            <div id="mypage-profile-bar">
                <div id="mypage-profile-title">Profile</div>
                <img id="mypage-profile-setting-icon" src={settingIcon} />
            </div>

            <MainProfile />
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