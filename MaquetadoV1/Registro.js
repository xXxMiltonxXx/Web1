// selector de todas las entradas

const inputs= document.querySelectorAll(".campo-entrada");

const palanca_btn=document.querySelectorAll(".palanca");

const main=document.querySelector("main");

const form = document.querySelector('form');

const nombres = document.querySelector('#nombres')

const apellidos = document.querySelector('#apellidos')

const cedula = document.querySelector('#cedula')

const email = document.querySelector('#email');

const contrasena = document.querySelector('#contrasena');

const nombresError = document.querySelector('#nombres-error');

const apellidosError = document.querySelector('#apellidos-error');

const cedulaError = document.querySelector('#cedula-error');

const emailError = document.querySelector('#email-error');

const contrasenaError = document.querySelector('#contrasena-error');



form.addEventListener('submit', (event) => {
	event.preventDefault();
    //si ocurre el error entonces muestra el mensaje de error

    //nombres-error se vuelve visible 
	if (nombres.value === '' || !validateNombres(nombres.value)) {
		nombresError.style.display = 'block';
	} else {
        //sino se mantiene oculta
		nombresError.style.display = 'none';
	}
    //apellidos-error se vuelve visible 
	if (apellidos.value === '' || !validateApellidos(apellidos.value)) {
		apellidosError.style.display = 'block';
	} else {
        //sino se mantiene oculta
		apellidosError.style.display = 'none';
	}
    //cedula-error se vuelve visible 
	if (cedula.value === '' || !validateCedula(cedula.value)) {
		cedulaError.style.display = 'block';
	} else {
        //sino se mantiene oculta
		cedulaError.style.display = 'none';
	}
    //email-error se vuelve visible 
	if (email.value === '' || !validateEmail(email.value)) {
		emailError.style.display = 'block';
	} else {
        //sino se mantiene oculta
		emailError.style.display = 'none';
	}
    //si ocurre el error entonces muestra el mensaje de error 
    //contrasena-error se vuelve visible 
	if (contrasena.value === '' || !validatePassword(contrasena.value)) {
		contrasenaError.style.display = 'block';
	} else {
        //sino se mantiene oculta
		contrasenaError.style.display = 'none';
	}
    //y si todo es correcto entonces se envia al siguiente
	if (nombres.value === '' && !validateNombres(nombres.value) && email.value !== '' && validateEmail(email.value) && contrasena.value !== '' && validatePassword(contrasena.value)) {
        if(email.value=='mmoya0992@gmail.com'&& contrasena.value=='MiltonAnga1234_'){
            form.action='index.html'
        }
        else{
            form,action= '#'
        }

		form.submit()
	}
});
//funcion con expreciones regulares
function validateNombres(nombres){
    //pide que sean valores String unicamente letras
    //minimo 3 caracteres para que se valido
    const rn= /^[A-Za-z ].{2,}$/;
    return rn.test(nombres);
}
function validateApellidos(apellidos){
    //pide que sean valores String unicamente letras
    //minimo 3 caracteres para que se valido
    const rn= /^[A-Za-z ].{2,}$/;
    return rn.test(apellidos);
}
function validateCedula(cedula){
    //pide que sean unicamente digotos del 0 al 9 
    //maximo 10 caracteres
    const rn= /^[0-9]{10}$/;
    return rn.test(cedula);
}

// funcion que usa expreciones regulares para validar que el correo sea valido
function validateEmail(email) {
    //tiene que tener caracteres antes del @ y despues y al final una terminacion
    //.com por ejemplo
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(String(email).toLowerCase());
}
//funcion que usa expreciones regulares para vlidar la contraseñs
function validatePassword(contrasena){
    const rp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    return rp.test(contrasena);
}



///carrusel\\
const balas=document.querySelectorAll(".balas span");
const imagenes= document.querySelectorAll(".imagen")
//carrusel\\

// bucle para las entradas
inputs.forEach(inp=>{
    inp.addEventListener("focus",()=>{
        //agrega el nombre active a las clases
        //campo-entrada active
        inp.classList.add("active");
    });
    inp.addEventListener("blur",()=>{
        //condicion
        //si no esta vacia no se ejecuta el remove
        if(inp.value !="") return;  
        //elimina el nombre active a las clases
        //campo-entrada 
        inp.classList.remove("active");
    })
})

//interacion con los btones para slide con img, text y span
function moveSlider(){
    //da los valores de data-value esta en span
    let index = this.dataset.value;
    //imagenes
    let imagenActual= document.querySelector(`.img-${index}`);
    imagenes.forEach((img)=> img.classList.remove("show"));
    imagenActual.classList.add("show")
    //texto
    const textSlider= document.querySelector(".grupo-texto");
    textSlider.style.transform=`translateY(${-(index-1)*2.2}rem)`
    // añade la clase active y tambien la remueve
    balas.forEach(bal=> bal.classList.remove("active"));
    this.classList.add("active");
}

//bucle para el carrusel 
balas.forEach(bala=>{
    bala.addEventListener("click", moveSlider);
})