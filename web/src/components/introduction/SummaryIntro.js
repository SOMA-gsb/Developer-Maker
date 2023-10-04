import './SummaryIntro.css'

function SummaryIntro(props) {
    return(
        <div className="summary-intro">
            <img className="summary-icon" src={props.icon} alt={props.title}/>
            <div className="summary-title">{props.title}</div>
            <div className="summary-content">{props.children}</div>
        </div>
    )
};

export default SummaryIntro;