const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();
datos.set('nombre', 'Juan');
datos.set('profesion', 'Developer');

console.log(ciudades);
console.log(ordenes);
console.log(datos);

console.log('------------------------------');
console.log('ENTRIES');
console.log('------------------------------');


//Entries iterador
//entries a las ciudades
for(let ciudad of ciudades.entries()) {
    console.log(ciudad);
}
console.log('******************************');


//Entries para las ordenes
for(let orden of ordenes.entries()) {
    console.log(orden);
}

console.log('******************************');

//Entries para el MAP
for(let dato of datos.entries()) {
    console.log(dato);
}

console.log('------------------------------');
console.log('VALUES');
console.log('------------------------------');

//Values iterador
//values a las ciudades
for(let ciudad of ciudades) {
    console.log(ciudad);
}

console.log('******************************');

//values a las ordenes
for(let orden of ordenes.values()) {
    console.log(orden);
}

console.log('******************************');

//values a las ordenes
for(let dato of datos.values()) {
    console.log(dato);
}

console.log('------------------------------');
console.log('KEYS');
console.log('------------------------------');

//Keys iterador
//keys a las ciudades
for(let ciudad of ciudades.keys()) {
    console.log(ciudad);
}

console.log('******************************');

//keys a las ordenes
for(let orden of ordenes.keys()) {
    console.log(orden);
}

console.log('******************************');

//keys a las ordenes
for(let dato of datos.keys()) {
    console.log(dato);
}

console.log('------------------------------');

//ITERADORES PARA UN STRING
//FORMA ANTIGUA
const mensaje = 'Aprendiendo JavaScript';

for(let i = 0; i < mensaje.length; i++) {
    console.log(mensaje[i]);
}
console.log('------------------------------');

//FORMA NUEVA
for(let letra of mensaje) {
    console.log(letra);
}

//Podemos recorrer con un iterador un NodeList
const enlaces = document.getElementsByTagName('a');

for(let enlace of enlaces) {
    console.log(enlace);
    console.log(enlace.href);
}