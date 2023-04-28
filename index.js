`use strict;`

window.onload = init;

function init() {
    const ConverterFEl = document.getElementById(`ConverterF`);
    ConverterFEl.onclick = onConverterFBtnClicked;

    const ConverterCEl = document.getElementById(`ConverterC`);
    ConverterCEl.onclick = onConverterCBtnClicked;
}

function onConverterFBtnClicked() {
    const f2cEl = document.getElementById(`F-to-C`);
    const answer = Number(f2cEl.value - 32) * (5/9);
    const answerEl = document.getElementById(`Answer`);
    answerEl.value = answer;
}
function onConverterCBtnClicked() {
    const c2fEl = document.getElementById(`C-to-F`);
    const answer = Number(c2fEl.value * 9/5) + 32;
    const answerEl = document.getElementById(`Answer`);
    answerEl.value = answer;
}