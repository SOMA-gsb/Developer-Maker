import './DetailIntro.css'

function DetailIntro(props) {
    return(
        <div className={`detail-intro ${props.class}`}>
            <div className="detail-contents">
                <div className='detail-title'>{props.subtitle}</div>
                <div className="detail-subtitle">{props.title}</div>
                <div className="detail-content">{props.children}</div>
            </div>
        </div>
    )
};

export default DetailIntro;