const container = document.querySelector(".btn-group");
const newBtn = function (name, id) {
    return `<button type="button" class="btn btn-default gsb-dropdown-toggle" data-toggle="gsb-dropdown" href="#" id="${id}">
                <span class="gsb-select-text">
                    ${name}
                </span>
                &nbsp;
                <span class="caret"></span>
            </button>`
}
container.insertAdjacentHTML('afterbegin', newBtn("추천문제", "recommend-select-button"));
container.insertAdjacentHTML('afterbegin', newBtn("힌트", "hint-select-button"));
container.insertAdjacentHTML('afterbegin', newBtn("타이머","gsb-select-button"));

// 추천 문제 리스트
const newElem = function (name) {
    return `<li>
        <a href="#" data-language-id="0" class="language-select-link">
            <span class="lang-text">${name}</span>
        </a>
    </li>`
}
const recommendProb = `<ul class="dropdown-menu" id="recommendProb" style="right: 113px; display: none;">
    ${newElem("1001번. A-B")}
    ${newElem("1008번. A/B")}
    ${newElem("2558번. A+B - 2")}
    ${newElem("10950번. A+B - 3")}
    ${newElem("10952번. A+B - 5")}
</ul >`
container.insertAdjacentHTML('beforeend', recommendProb);

const recommendBtn = document.getElementById("recommend-select-button");
const recommendProbs = document.getElementById("recommendProb");
recommendBtn.addEventListener("click", function () {
    if (recommendProbs.style.display == "none")
        recommendProbs.style.display = "block";
    else recommendProbs.style.display = "none";
})

// 힌트 리스트
const newHint = function (name, id) {
    return `<li>
        <a href="#" data-language-id="0" class="language-select-link">
            <span class="lang-text" id="${id}">${name}</span>
            &nbsp;
            <span class="caret" style="
                border-right: none;
                border-left: 4px solid;
                border-bottom: 4px solid transparent;
                border-top: 4px solid transparent;
            "></span>
        </a>
    </li>`
}
const hintElem = `<ul class="dropdown-menu" id="hintElem" style="right: 208px; display: none;">
    ${newHint("예상 시간", "predict-time-btn")}
    ${newHint("문제 태그", "predict-tag-btn")}
</ul >`
container.insertAdjacentHTML('beforeend', hintElem);

// 문제 태그
const tagList = `<ul class="dropdown-menu" id="tagList" style="right: 110px;display: none;top: 62px;width: 98px;text-align: center;">
    ${newElem("수학")}
    ${newElem("구현")}
    ${newElem("사칙연산")}
</ul >`
container.insertAdjacentHTML('beforeend', tagList);

const hintBtn = document.getElementById("hint-select-button");
const hintElems = document.getElementById("hintElem");
const tagBtn = document.getElementById("predict-tag-btn");
const tagElems = document.getElementById("tagList");
hintBtn.addEventListener("click", function () {
    if (hintElems.style.display == "none")
        hintElems.style.display = "block";
    else hintElems.style.display = "none";
    if (tagElems.style.display == "block")
        tagElems.style.display = "none";
})
tagBtn.addEventListener("click", function () {
    if (tagElems.style.display == "none")
        tagElems.style.display = "block";
    else tagElems.style.display = "none";
})