const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');

//Click
// boton.addEventListener('click', obtenerEvento);

//Doble click
// boton.addEventListener('dblclick', obtenerEvento);

//Mouse Enter
// boton.addEventListener('mouseenter', obtenerEvento);

//Mouse Leave
// boton.addEventListener('mouseleave', obtenerEvento);

//Mouse Encima
// boton.addEventListener('mouseover', obtenerEvento);

//Mouse Out
// boton.addEventListener('mouseout', obtenerEvento);

//Mouse Down (presionas)
// boton.addEventListener('mousedown', obtenerEvento);

//Mouse Out (cuando suelto el click)
// boton.addEventListener('mouseup', obtenerEvento);

//Si estoy encima del encabezao salta el listener
encabezado.addEventListener('mousemove', obtenerEvento);

function obtenerEvento(e) {
    e.preventDefault();
    console.log(`EVENTO: ${e.type}`);
}