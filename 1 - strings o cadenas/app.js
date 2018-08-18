let nombre, mensaje;

nombre = 'Juan Pablo';

mensaje = 'Y entonces dije \'Buen Curso \'';

//Concatenar en JavaScript
mensaje = 'JAVA' + 'SCRIPT';

//Uniendo variables en una sola
let aprendiendo = 'Aprendiendo',
    tecnologia = 'JavaScript';

mensaje = 'Aprendiendo JavaScript, CSS, HTML para ser Frontend';

let repeticion = 'Javascript ';

console.log(tecnologia);

//PARA SABER CUANTAS LETRAS HAY
console.log(tecnologia.length);

//PARA CONCATEANAR
console.log(tecnologia.concat(' ', 'es genial'));

//PARA PONER EN MAYUSCULAS
console.log(tecnologia.toUpperCase());

//PARA PONER EN MINUSCULAS
console.log(tecnologia.toLowerCase());

//Buscar dentro del mensaje
console.log(mensaje.indexOf('JavaScript '));

//Buscar dentro del mensaje y te retorna -1 porque no devuelve nada
console.log(mensaje.indexOf('PHP'));

//Te muestra el texto desde el carácter 0 hasta el 10 (desde el principio)
console.log(mensaje.substr(0, 10));
console.log(mensaje.substring(0, 10));

//Slice hace lo mismo que substr y substring. Si queremos empezar desde el final podemos añadir números negativos
console.log(mensaje.slice(-6));

//Divide el mensaje en pequeñas porciones, lo divide por lo que tu pongas, ahora mismo por espacios
console.log(mensaje.split(' '));

//Cambia una cadena por otra
console.log(mensaje.replace('CSS', 'PHP'));

//##JAVASCRIPT MODERNO##

//Includes te devuelve un true o false para ver si hay una cadena dentro del texto, es parecido al indexOf
console.log(mensaje.includes('CSS'));

//Para repetir una cadena
console.log(repeticion.repeat(10));