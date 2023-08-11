import recommend from './images/recommend.svg'

function Recommend() {
    return (
        <div className='buttons' id='probs-btn'>
            <img className='button-imgs' src={recommend} title='Recommended problems' />
        </div>
    )
}

export default Recommend;