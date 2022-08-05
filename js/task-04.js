const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};

const valueEl = document.querySelector('#value');
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');

decrementEl.addEventListener('click', function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});

incrementEl.addEventListener('click', function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});
