//Te devuelven todos los elementos de clase, no solo uno como querySelector
let enlaces = document.getElementsByClassName('enlace');

console.log(enlaces);
//Que nos devuelva el primer elemento
console.log(enlaces[0]);
//Que nos devuelva el tercer elemento
console.log(enlaces[2]);

//Podemos también acceder a x elemento a través de esta manera
let enlacesNew = document.getElementsByClassName('enlace')[2];

enlacesNew.style.background = '#333';
enlacesNew.innerText = 'Nuevo enlace';

//Podemos mezclar distintos elementos de seleccion

const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');

console.log(listaEnlaces);

//getElementsByTagName selecciona HTML
const links = document.getElementsByTagName('a');
console.log(links);

links[18].style.color = 'red';
links[18].textContent = 'Nuevo enlace';

//Meterlo en un Array
let enlacesArr = Array.from(links);

console.log(enlacesArr);

//Recorrer todos y que nos muestre el textContent
enlacesArr.forEach((enlaceArr) => {
    console.log(enlaceArr.textContent);
});

//QuerySelectorAll
const enlacesAll = document.querySelectorAll('#principal .enlace');

console.log(enlacesAll);

enlacesAll[1].style.background = 'red';
enlacesAll[1].innerText = 'jijiji';

//Seleccionar los elementos impares con QuerySelectorAll
const enlacesImpares = document.querySelectorAll('#principal a:nth-child(odd)');

console.log(enlacesImpares);

enlacesImpares.forEach((impares) => {
    impares.style.backgroundColor = 'green';
    impares.style.color = 'yellow';
});