import recommend from '../images/recommend.svg'
import recommendGray from '../images/recommendGray.svg'

function Recommend(props) {
    const handleRecommendBtnClick = () => {
        props.setSubMenuState('recommendLoading')
        props.setMenuState('recommend')
    }

    return (
        <div className='buttons' id='probs-btn'>
            <img className='button-imgs' src={props.menuState == '' || props.menuState == 'recommend' ? recommend : recommendGray} title='Recommended problems' onClick={handleRecommendBtnClick} />
        </div>
    )
}

export default Recommend;