const form = document.querySelector('form');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const contrasena = document.querySelector('#contrasena');
const nombreError = document.querySelector('#nombre-error');
const emailError = document.querySelector('#email-error');
const contrasenaError = document.querySelector('#contrasena-error');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (nombre.value === '') {
        nombreError.style.display = 'block';
    } else {
        nombreError.style.display = 'none';
    }
    if (email.value === '' || !validateEmail(email.value)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
    if (contrasena.value === '' || contrasena.value.length < 6) {
        contrasenaError.style.display = 'block';
    } else {
        contrasenaError.style.display = 'none';
    }
    if (nombre.value !== '' && email.value !== '' && validateEmail(email.value) && contrasena.value !== '' && contrasena.value.length >= 6) {
        form.submit();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
