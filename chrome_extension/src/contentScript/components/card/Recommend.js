import recommend from './images/recommend.svg'

function Recommend(props) {
    return (
        <div className='buttons' id='probs-btn'>
            <img className='button-imgs' src={recommend} title='Recommended problems' onClick={() => props.setSubMenuState('recommendLoading')} />
        </div>
    )
}

export default Recommend;