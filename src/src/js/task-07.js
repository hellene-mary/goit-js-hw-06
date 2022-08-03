const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = '40px';

inputEl.addEventListener('input', function (event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
});
