const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    let info = { email: '', password: '' };

    if (email === '' || password === '') {
        alert(`Усі поля форми мають бути заповнені!`);
    } else {
        info.email = email;
        info.password = password;
        console.log(info);
        event.currentTarget.reset();
    }
}
