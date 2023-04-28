const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Obtener los valores del formulario
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const subject = form.elements['subject'].value;
  const message = form.elements['message'].value;

  // Enviar el correo electrónico de soporte técnico
  // Aquí debería ir el código para enviar el correo electrónico,
  // utilizando algún servicio de correo electrónico o librería de JavaScript.

  // Mostrar mensaje de éxito
  alert('Su mensaje ha sido enviado con éxito. Gracias por contactar con el soporte técnico.');
  
  // Limpiar el formulario
  form.reset();
});
