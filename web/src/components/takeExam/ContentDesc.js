import './ContentDesc.css';

function ContentDesc({ title, content }) {
    return (
        <>
            <div className="take-exam-content-desc-title">{title}</div>
            <div className='take-exam-content-desc'>
                &nbsp;{content}
            </div>
        </>
    );
};

export default ContentDesc;