//Traversing del Padre al Hijo

const navegacion = document.querySelector('#principal');

console.log(navegacion);

//Usando childNodes los text son los retorno de carro del HTML entre linea y linea

console.log(navegacion.childNodes);

//Nos devuelve todo sin los espacios
console.log(navegacion.children);

//Nos devuelve en que elemento HTML estamos
console.log(navegacion.nodeName);

console.log(navegacion.children[0].nodeName);

//1 = Elementos
//2 = Atributos
//3 = Text Node
//8 = comentarios
//9 = documentos
//10 = doctype

console.log(navegacion.children[0].nodeType);

//Cambiando el primer enlace a traves de children
navegacion.children[0].textContent = 'Nuevo enlace';

const barra = document.querySelector('.barra');

console.log(barra.children);
console.log(barra.children[0].children);
console.log(barra.children[0].children[0].children);

const cursos = document.querySelectorAll('.card');

console.log(cursos);
//Accedemos al ultimo elemento
console.log(cursos[0].lastElementChild);
//Accedemos al primer elemento
console.log(cursos[0].firstElementChild);
//Cuenta cuantos elementos tenemos
console.log(cursos[0].childElementCount);


//Traversing del Hijo al Padre
const enlaces = document.querySelectorAll('.enlace');

console.log(enlaces);
//Saber cual es su padre
console.log(enlaces[0].parentNode);
console.log(enlaces[0].parentElement);
//Vamos mucho más arriba del DOM
console.log(enlaces[0].parentElement.parentElement.parentElement);


const cursosNew = document.querySelectorAll('.card');

//Podemos ir hacia atras las veces que queramos (lo que el DOM nos permita)
console.log(cursosNew[0].parentElement.parentElement.parentElement.children[0]);
//Podemos cambiar tambien los elementos como antes
console.log(cursosNew[0].parentElement.parentElement.parentElement.children[0] = 'Hola desde traversing');

const enlacesSibling = document.querySelectorAll('.enlace');

//Aquí nos devuelve el retorno de carro
console.log(enlacesSibling[4].previousSibling);
//Volvemos uno hacia atras
console.log(enlacesSibling[4].previousElementSibling);
//Volvemos dos hacia atras
console.log(enlacesSibling[4].previousElementSibling.previousElementSibling);


//Podemos también ir hacia adelante
console.log(enlaces[0].nextElementSibling);
console.log(enlaces[0].nextElementSibling.nextElementSibling);

//Podemos acceder al parent
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement);

//Podemos acceder de ese parent al children número 5
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children[4]);


