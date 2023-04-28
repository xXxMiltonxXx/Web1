// Función que se ejecuta al enviar el formulario
function guardarHistoriaClinica(event) {
	event.preventDefault(); // Evita que el formulario se envíe de forma automática

	// Obtiene los valores de los campos del formulario
	const cedula = document.getElementById('cedula').value;
	const nombre = document.getElementById('nombre').value;
	const fecha = document.getElementById('fecha').value;
	const motivo = document.getElementById('motivo').value;
	const diagnostico = document.getElementById('diagnostico').value;
	const tratamiento = document.getElementById('tratamiento').value;

	// Valida que los campos no estén vacíos
	if (!cedula || !nombre || !fecha || !motivo || !diagnostico || !tratamiento) {
		alert('Debe completar todos los campos del formulario.');
		return;
	}

	// Crea un objeto con los datos de la historia clínica
	const historiaClinica = {
		cedula,
		nombre,
		fecha,
		motivo,
		diagnostico,
		tratamiento
	};

	// Guarda la historia clínica en el sistema
	// Aquí se debería incluir la lógica para guardar la historia clínica en una base de datos o sistema de archivos
	alert('La historia clínica ha sido guardada exitosamente.');
}

// Asigna la función guardarHistoriaClinica al evento submit del formulario
const formulario = document.querySelector('form');
formulario.addEventListener('submit', guardarHistoriaClinica);
