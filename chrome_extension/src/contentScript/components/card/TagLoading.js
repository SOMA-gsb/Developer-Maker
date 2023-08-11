import loading from './images/loading.svg'

function TagLoading(props) {
    setTimeout(() => {
        props.setSubMenuState('result')
    }, 1000);

    return (
        <div className='sub-menus' id='tag-loading'>
            <img id='loading-img' src={loading} />
            <span>Predicting tags . . .</span>
        </div>
    )
}

export default TagLoading;