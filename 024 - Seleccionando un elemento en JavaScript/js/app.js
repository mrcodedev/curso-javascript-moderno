//Query Selector puede seleccionar ids, clases, etc
const encabezado = document.querySelector('#encabezado');

console.log(encabezado);

encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';
encabezado.textContent = 'Los mejores cursos';

const enlace = document.querySelector('.enlace');

//Sólo te devuelve el primero
console.log(enlace);

//Solo te devuelve la primera imagen
const images = document.querySelector('img');

console.log(images);

//Hacer que te devuelva un elemento en especifico
const image = document.querySelector('.card img');

console.log(image);

//Para devolver el primer elemento
let enlaces;

//Obtener el primer enlace
enlaces = document.querySelector('#principal a:first-child');

//Obtener el tercer enlace
enlaces = document.querySelector('#principal a:nth-child(3)');

//Obtener el último enlace
enlaces = document.querySelector('#principal a:last-child');

console.log(enlaces);