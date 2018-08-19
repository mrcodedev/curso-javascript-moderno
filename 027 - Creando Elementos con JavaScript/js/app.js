//Vemos que creamos en enlace pero que si vamos a mostrar poco a poco en consola
//los cambios que vamos haciendo no se van a ver porque lo primero que hace
//es hacer los cambios y después mostrarlos en consola.

//Crear enlace
const enlace = document.createElement('a');

//Agregamos una clase
enlace.className = 'enlace';
console.log(enlace);

//Añadir ID
enlace.id = 'nuevo-id';
console.log(enlace);

//Atributo href
enlace.setAttribute('href', '#');
console.log(enlace);

//Añadir texto
enlace.appendChild(document.createTextNode('Nuevo enlace'));
console.log(enlace);

//Agregarlo al HTML
document.querySelector('#secundaria').appendChild(enlace);