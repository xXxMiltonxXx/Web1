const form = document.querySelector('form');
const paciente = document.querySelector('#paciente');
const fecha = document.querySelector('#fecha');
const diagnostico = document.querySelector('#diagnostico');
const pacienteError = document.querySelector('#paciente-error');
const fechaError = document.querySelector('#fecha-error');
const diagnosticoError = document.querySelector('#diagnostico-error');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (paciente.value === '') {
        pacienteError.style.display = 'block';
    } else {
        pacienteError.style.display = 'none';
    }
    if (fecha.value === '') {
        fechaError.style.display = 'block';
    } else {
        fechaError.style.display = 'none';
    }
    if (diagnostico.value === '') {
        diagnosticoError.style.display = 'block';
    } else {
        diagnosticoError.style.display = 'none';
    }
    if (paciente.value !== '' && fecha.value !== '' && diagnostico.value !== '') {
        // Aquí se agregaría la historia clínica a la base de datos
        alert('Historia clínica agregada exitosamente');
    }
});
