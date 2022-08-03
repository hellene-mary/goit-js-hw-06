const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === '' || password === '') {
        alert(`Усі поля форми мають бути заповнені!`);
    } else {
        console.log(`Email: ${email}, Password: ${password}`);
        event.currentTarget.reset();
    }
}
