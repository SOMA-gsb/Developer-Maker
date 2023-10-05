import './TitleBox.css'

function TitleBox(props) {
    return (
        <div className='title-box'>
            <div className="title-box-contents">
                <div className="title-box-title">
                    {props.title}
                </div>
                <div className="title-box-subtitle">
                    {props.subtitle}
                </div>
            </div>
            <img className='title-box-icon' src={props.icon} alt="title-box-icon" />
        </div>
    );
};

export default TitleBox;