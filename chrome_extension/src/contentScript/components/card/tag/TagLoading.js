import loading from '../images/loading.svg'

function TagLoading(props) {
    setTimeout(() => {
        props.setSubMenuState('tagResult')
    }, 1000);

    return (
        <div className='sub-menus loading'>
            <img className='loading-img' src={loading} />
            <span>Predicting tags . . .</span>
        </div>
    )
}

export default TagLoading;