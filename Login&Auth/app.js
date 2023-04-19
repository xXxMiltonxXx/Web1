// selector de todas las entradas
const inputs= document.querySelectorAll(".campo-entrada");

const palanca_btn=document.querySelectorAll(".palanca");

const main=document.querySelector("main");
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

//bucle para la animacion de slide
palanca_btn.forEach((btn)=>{
    btn.addEventListener("click", () =>{
        //si se da click en registrase 
        //en el elemento main se añade
        //la clase modo-registro
        main.classList.toggle("modo-registro");
    });
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