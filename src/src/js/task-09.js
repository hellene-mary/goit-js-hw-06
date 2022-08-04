function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', onBtnClick);

function onBtnClick() {
    bodyEl.style.backgroundColor = getRandomHexColor();
    colorEl.textContent = getRandomHexColor();
}
