import './ExtensionDetail.css'

function ExtensionDetail(props) {
    return(
        <div className={`extension-intro-detail ${props.class}`}>
            <div className="extension-intro-box"></div>
            <div className="extension-intro-wrapper">
                <div className="extension-intro-title">{props.title}</div>
                <div className="extension-intro-content">{props.children}</div>
            </div>
        </div>
    )
};

export default ExtensionDetail;