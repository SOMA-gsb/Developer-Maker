import './UserDetail.css'

function UserDetail(props) {
    return (
        <div className="mypage-detail">
            {props.type === "figure" ? 
                <img className="mypage-detail-icons" src={props.icon} />: 
                <div className={`mypage-progress ${props.class}`}>
                    <progress className="mypage-progress-bar" value="63" min="0" max="100" />
                </div>
            }
            <div className="mypage-detail-contents">
                <div className="mypage-detail-title">{props.title}</div>
                <div className="mypage-detail-subtitle">{props.subtitle}</div>
            </div>
        </div>
    );
};

export default UserDetail;