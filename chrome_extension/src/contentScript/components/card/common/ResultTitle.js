function ResultTitle(props) {
    return (
        <>
            <div className='result-title-box' id={props.boxId}></div>
            <div className='result-title-name' id={props.titleId}>{props.title}</div>
        </>
    )
}

export default ResultTitle;