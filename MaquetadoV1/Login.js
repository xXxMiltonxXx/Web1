// selector de todas las entradas

const inputs= document.querySelectorAll(".campo-entrada");

const palanca_btn=document.querySelectorAll(".palanca");

const main=document.querySelector("main");

const form = document.querySelector('form');

const email = document.querySelector('#email');

const contrasena = document.querySelector('#contrasena');

const emailError = document.querySelector('#email-error');

const contrasenaError = document.querySelector('#contrasena-error');



form.addEventListener('submit', (event) => {
	event.preventDefault();
    //si ocurre el error entonces muestra el mensaje de error 
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
	if (email.value !== '' && validateEmail(email.value) && contrasena.value !== '' && validatePassword(contrasena.value)) {
        //si es un admin
        if(email.value=='milton@admin.poli.com'&& contrasena.value=='MilAdmin12_'){
            form.action='inicio-admin.html'
        }
        //si es un profesional de la salud
        if(email.value=='juan@med.poli.com'&& contrasena.value=='JuanMed132_'){
            form.action='inicio-med.html'
        }
        //si es un paciente 
        if(email.value=='mmoya0992@gmail.com'&& contrasena.value=='MiltonAnga1234_'){
            form.action='inicio-paciente.html'
        }

		form.submit()
	}
});
// funcion que usa expreciones regulares para validar que el correo sea valido
function validateEmail(email) {
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