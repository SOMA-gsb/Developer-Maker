import loading from './images/loading.svg'

function RecommendLoading(props) {
    setTimeout(() => {
        props.setSubMenuState('recommendResult')
    }, 1000);

    return (
        <div className='sub-menus loading recommend-menus'>
            <img className='loading-img' src={loading} />
            <span>Recommending Problems . . .</span>
        </div>
    )
}

export default RecommendLoading;