import { useEffect, useState } from 'react';

function RestTime(props) {
    const [timeState, setTimeState] = useState([0, 0, 0]);
    const probNum = window.location.href.split('/').reverse()[0];

    useEffect(() => {
        setInterval(() => {
            chrome.storage.local.get([`${probNum}Timer`, `${probNum}TimerRunning`, `${probNum}Time`, `${probNum}TimerStart`, `${probNum}TimerOption`, `${probNum}Stopwatch`, `${probNum}StopwatchRunning`, `${probNum}StopwatchStart`], (res) => {
                if (res[`${probNum}Timer`] && res[`${probNum}TimerRunning`]) {
                    const diffTime = Math.floor((Date.now() - res[`${probNum}TimerStart`]) / 1000);
                    let timer = res[`${probNum}TimerOption`] - diffTime;
                    let hour = 0, minute = 0, second = 0;

                    if (timer > 0) {
                        if (Math.floor(timer / 3600) != 0) {
                            hour = Math.floor(timer / 3600);
                        }
                        timer -= Math.floor(timer / 3600) * 3600;

                        if (Math.floor(timer / 60) != 0) {
                            minute = Math.floor(timer / 60);
                        }
                        timer -= Math.floor(timer / 60) * 60;
                        
                        if (timer != 0) {
                            second = timer;
                        }

                        setTimeState([hour, minute, second]);
                        chrome.storage.local.set({
                            [`${probNum}Time`]: [hour, minute, second],
                        })

                        if (hour == 0 && minute == 0 && second == 0) {
                            chrome.storage.local.set({
                                [`${probNum}Timer`]: false,
                                [`${probNum}TimerRunning`]: false,
                            })
                        }
                    }
                }
                else if (res[`${probNum}Stopwatch`] && res[`${probNum}StopwatchRunning`]) {
                    let diffTime = Math.floor((Date.now() - res[`${probNum}StopwatchStart`]) / 1000);
                    let hour = 0, minute = 0, second = 0;

                    if (Math.floor(diffTime / 3600) != 0) {
                        hour = Math.floor(diffTime / 3600);
                    }
                    diffTime -= Math.floor(diffTime / 3600) * 3600;

                    if (Math.floor(diffTime / 60) != 0) {
                        minute = Math.floor(diffTime / 60);
                    }
                    diffTime -= Math.floor(diffTime / 60) * 60;
                    
                    if (diffTime != 0) {
                        second = diffTime;
                    }

                    setTimeState([hour, minute, second]);
                    chrome.storage.local.set({
                        [`${probNum}Time`]: [hour, minute, second],
                    })
                }
                else {
                    setTimeState(res[`${probNum}Time`]);
                }
            })
        }, 10);
    }, [])

    return (
        <div id='timer-time'>
            <span id='rest-time-title'>{props.timerTitle}&nbsp;&nbsp;</span>
            <b>{`${timeState[0]}`.padStart(2, '0')}:{`${timeState[1]}`.padStart(2, '0')}:{`${timeState[2]}`.padStart(2, '0')}</b>
        </div>
    )
}

export default RestTime;