chrome.alarms.create("chromeTimer", {
    periodInMinutes: 1 / 60,
})

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "chromeTimer") {
        chrome.storage.local.get(["timer", "isRunning", "timeOption"], (res) => {
            if (res.isRunning) {
                let timer = res.timer + 1;
                let isRunning = true;
                if (timer === res.timeOption + 1) {
                    timer = 0;
                    isRunning = false;
                }
                chrome.storage.local.set({
                    timer,
                    isRunning
                })
            }
        })
    }
})

chrome.storage.local.get(["timer", "isRunning", "timeOption"], (res) => {
    chrome.storage.local.set({
        timer: "timer" in res ? res.timer : 0,
        isRunning: "isRunning" in res ? res.isRunning : false,
        timeOption: "timeOption" in res ? res.timeOption : 0,
    })
})