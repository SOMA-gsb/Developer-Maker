import Button from "../common/Button";
import ProbsList from "./ProbsList";

function Recommend() {
    // 추천문제 버튼
    const container = document.querySelector('.btn-group');
    container.insertAdjacentHTML('afterbegin', Button("추천문제", "recommend"))

    // 추천문제 리스트
    ProbsList();
    const probList = document.getElementById('recommendProb')
    if (document.getElementById("lang-select-button") == null) {
        probList.style.right = '38px';
    }

    const button = document.getElementById('recommend-button');
    button.addEventListener('click', (event) => {
        probList.style.display = (probList.style.display == "none" ? "block" : "none");
    })

    const body = document.querySelector('body');
    body.addEventListener('click', (event) => {
        if (event.target.id !== 'recommendProb' && event.target.id !== 'recommend-button' && event.target.id !== 'recommend-text') {
            probList.style.display = "none";
        }
    })
}

export default Recommend;