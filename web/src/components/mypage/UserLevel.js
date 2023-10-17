import './UserLevel.css'

function UserLevel(props) {
    return (
        <div className={`profile-ps-levels ${props.class}`}>
            <img className="profile-ps-icons" src={props.icon} />
            <div className="profile-ps-contents">
                <div className="profile-ps-title">{props.title}</div>
                <div className="profile-ps-lev">{props.level}</div>
            </div>
        </div>
    );
};

export default UserLevel;