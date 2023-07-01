import Button from "./Button";
import ProbsList from "./ProbsList";

function Recommend() {
    const container = document.querySelector('.btn-group');
    container.insertAdjacentHTML('afterbegin', Button("추천문제", "recommend-select-button"))

    ProbsList();

    const probList = document.getElementById('recommendProb');
    const button = document.getElementById('recommend-select-button');
    button.addEventListener('click', (event) => {
        console.log("whwh");
        probList.style.display = (probList.style.display == "none" ? "block" : "none");
    })

    const body = document.querySelector('body');
    body.addEventListener('click', (event) => {
        if (event.target.id !== 'recommendProb' && event.target.id !== 'recommend-select-button') {
            probList.style.display = "none";
        }
    })
}

export default Recommend;