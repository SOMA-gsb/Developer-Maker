chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type !== 'predict') {
        return false;
    }
    
    fetch("http://52.10.124.54:8080/tag", {
        method: "POST",
        body: JSON.stringify({ description: request.description }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            sendResponse(json.tags);
        })
        .catch(err => {
            console.log(err);
            sendResponse([]);
        });

    return true;
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type !== 'recommend') {
        return false;
    }
    
    fetch("http://52.10.124.54:8080/rating", {
        method: "POST",
        body: JSON.stringify({ description: request.description }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            sendResponse(json.rating);
        })
        .catch(err => {
            console.log(err);
            sendResponse(1);
        });

    return true;
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type !== 'recommendProb') {
        return false;
    }

    console.log(request.problem_des)
    console.log(request.mode)
    console.log(request.rating)
    
    fetch("http://52.10.124.54:8080/get_problem", {
        method: "POST",
        body: JSON.stringify({ problem_des: request.problem_des, mode: request.mode, rating: request.rating }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            sendResponse(json);
        })
        .catch(err => {
            console.log(err);
            sendResponse([]);
        });
    return true;
});