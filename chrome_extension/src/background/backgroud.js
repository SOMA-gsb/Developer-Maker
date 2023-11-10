chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type !== 'predict') {
        return false;
    }
    
    fetch("https://5y32h6k061.execute-api.us-west-2.amazonaws.com/default/tag-predict-mlp", {
        method: "POST",
        body: JSON.stringify({ description: request.description }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            sendResponse(json.labels);
        });

    return true;
})