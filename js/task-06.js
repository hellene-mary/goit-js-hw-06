const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInput);

function onInput(event) {
    inputEl.classList.add('invalid');
    if (event.currentTarget.value.length == inputEl.dataset.length) {
        inputEl.classList.replace('invalid', 'valid');
    }
}
