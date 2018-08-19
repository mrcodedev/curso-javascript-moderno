//VARIABLES
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const botonEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBoton = document.getElementById('resetBtn');

//EVENT LISTENERS

eventListeners();

function eventListeners() {
    //Inicio de la aplicacion y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Boton enviar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);

    //Boton de reset
    resetBoton.addEventListener('click', resetFormulario);
}

//FUNCIONES

//Deshabilitar el envio
function inicioApp() {
    botonEnviar.disabled = true;
}

//Valida que el campo tenga algo escrito
function validarCampo() {
    //Se valida la longitud del texto y que no esté vacio
    validarLongitud(this);


    //Validar unicamente el email
    if(this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value != '' && mensaje.value != '') {
        if(errores.length === 0) {
            botonEnviar.disabled = false;
        }
    }
}

//Resetear el formulario
function resetFormulario(e) {
    e.preventDefault();

    formularioEnviar.reset();
}

//Cuando se envia el correo
function enviarEmail(e) {
    e.preventDefault();

    //Spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';
    
    //Gif que envia el email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //Ocultar spinner y mostrar gif de enviado
    setTimeout(() => {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(() => {
            enviado.remove();
            formularioEnviar.reset();

            botonEnviar.disabled = true;
        }, 5000);
    }, 3000);
}

//Verifica la longitud del texto en los campos
function validarLongitud(campo) {
    if(campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');      
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;
    
    if(mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}