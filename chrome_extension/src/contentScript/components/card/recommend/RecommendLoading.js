import loading from '../images/loading.svg'

function RecommendLoading(props) {
    var x = props.curPage == 'boj' ? document.getElementById('problem_description') : document.getElementsByClassName('problem-statement').item(0).childNodes.item(1);

    x = x.textContent.split(/\n| |\t/).filter(item=>item).join(' ').split('$');
    const len = x.length;
    for (var i = 1; i < len; i += 2) {
        x[i-1] = ' ' + x[i - 1].split(' ').slice(0, -1).join(' ') + ' ';
    }
    x = x.join('$')

    chrome.runtime.sendMessage({ type: 'recommend', description: x }, function (response) {
        // console.log(response)
        props.setRating(response)
        props.setSubMenuState('recommendResult')
    });

    return (
        <div className='sub-menus loading recommend-menus'>
            <img className='loading-img' src={loading} />
            <span>Recommending Problems . . .</span>
        </div>
    )
}

export default RecommendLoading;