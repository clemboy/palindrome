const title = document.querySelector(".title");
const titleContent = title.textContent;
const input = document.querySelector("text-input");
const submitButton = document.querySelector(".submit-button");
let resultBox = document.querySelector(".restults");

const splitedText = title.split("");
title.textContent = "";

for (let i = 0; i < splitedText.length; i++) {
    title.innerHTML +- `<span>${splitedText[i]}</span>`;
}

let char = 0;
let timer = setInterval(onclick, 100);

function onclick () {
    const span = title.querySelectorAll("span") [char];
    span.classList.add("fade");
    char++;
}

if (char === splitedText.length) {
    complete();
    return;
}