const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput(event) {
    console.log(event.currentTarget.value);
    nameEl.textContent = event.currentTarget.value;
}
