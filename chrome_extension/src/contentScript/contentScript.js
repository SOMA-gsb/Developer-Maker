import Recommend from './components/recommend/Recommend';
import Timer from './components/timer/Timer';
import TimerMenu from './components/timer/TimerMenu';

chrome.storage.local.get(['active'], (res) => {
    if (!'active' in res || (res.active && document.getElementById("favorite_button"))) {
        Recommend();
        Timer();
        TimerMenu();
    }
    console.log(res.active);
})