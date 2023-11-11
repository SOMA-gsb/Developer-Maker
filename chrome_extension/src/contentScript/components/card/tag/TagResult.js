import ResultTitle from '../common/ResultTitle';

function Result(props) {
    return (
        <li>
            <div className='result-title'>{props.result}</div>
            {/* <div className='result-percentage' id={props.first ? 'first-percentage' : ''}>{props.accuracy}</div> */}
            {props.last ? null : <hr className='result-hr' />}
        </li>
    )
}

function TagResult(props) {
    return (
        <div className='sub-menus result-container'>
            <ResultTitle title='Tag Prediction Results' />
            <ol id='tag-result-ol'>
                {props.tagList && props.tagList.map((item, index, source) => {
                    return <Result result={item} first={index === 0} last={index === props.tagList.length - 1} key={index} />
                })}
            </ol>
        </div>
    )
}

export default TagResult;