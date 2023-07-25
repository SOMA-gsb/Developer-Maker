import Recommend from './components/recommend/Recommend';
import Timer from './components/timer/Timer';
import TimerMenu from './components/timer/TimerMenu';

chrome.storage.local.get(['loginCheck', 'active'], (res) => {
    if (res.loginCheck && res.active &&  document.getElementById("favorite_button")) {
        Recommend();
        Timer();
        TimerMenu();
    }
})