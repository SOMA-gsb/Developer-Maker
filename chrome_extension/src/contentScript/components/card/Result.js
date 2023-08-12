function Result(props) {
    console.log(props)
    return (
        <li>
            <div className='result-title'>{props.result.title}</div>
            <div className='result-percentage' id={props.first ? 'first-percentage' : ''}>{props.result.percentage.toFixed(1)}%</div>
            {props.last ? null : <hr className='result-hr' />}
        </li>
    )
}

export default Result;