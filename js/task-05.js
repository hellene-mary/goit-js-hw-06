const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput(event) {
event.currentTarget.value.length == 0
    ? (nameEl.textContent = 'Anonymous')
    : (nameEl.textContent = event.currentTarget.value);
}
