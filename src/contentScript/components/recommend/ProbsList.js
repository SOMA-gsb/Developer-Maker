import Prob from "./Prob";

function ProbsList() {
    const probs = [
        { num: 1001, name: "A-B" },
        { num: 1008, name: "A/B" },
        { num: 2558, name: "A+B - 2" },
        { num: 10950, name: "A+B - 3" },
        { num: 10952, name: "A+B - 5" }
    ]

    const container = document.querySelector(".btn-group");
    container.insertAdjacentHTML('beforeend', `<ul class="dropdown-menu" id="recommendProb" style="right: 113px; display: none;">
        ${probs.map((prob) => Prob(prob.num, prob.name)).join('')}
    </ul >`);
}

export default ProbsList;