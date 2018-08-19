const enlaces = document.querySelectorAll('.enlace');
console.log(enlaces);

const navegacion = document.querySelector('#principal');
console.log(navegacion);

//Borrando primer elemento
enlaces[0].remove();

navegacion.removeChild(enlaces[1]);


const primerLi = document.querySelector('.enlace');
console.log(primerLi);

//obtener una clase de CSS
console.log(primerLi.className);

//Añadimos una clase nueva
primerLi.classList.add('nueva-lista');
primerLi.classList.add('nueva-lista2');

//Borramos la segunda lista
primerLi.classList.remove('nueva-lista2');

//obtener una lista de CSS
console.log(primerLi.classList);

//Leer atributos
console.log(primerLi.getAttribute('href'));
console.log(primerLi.setAttribute('href', 'http://www.twitter.com'));
//Debemos de volver a cargar para ver el nuevo atributo
console.log(primerLi.getAttribute('href'));

primerLi.setAttribute('data-id', 20);
console.log(primerLi);

//Vemos si tiene un atributo
console.log(primerLi.hasAttribute('data-id'));