import './MainSubtitle.css'

function MainSubtitle(props) {
    return (
        <h2 className="main-subtitle">
            <img className="main-subtitle-elems main-subtitle-icon" src={props.icon} alt="icon"/>
            <span className="main-subtitle-elems">{props.content}</span>
        </h2>
    )
}

export default MainSubtitle;