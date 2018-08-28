// Declaración de funcion

let aprendiendo;

aprendiendo = function () {
    console.log(`Aprendiendo JavaScript`);
}

aprendiendo();

//Arrow Function

aprendiendo = () => {
    console.log('Aprendiendo JavaScript Arrow Functions');
}

aprendiendo();

//Arrow function una linea

aprendiendo = () => console.log('Aprendiendo JavasCript Arrow Functions en una linea');

aprendiendo();


//Poniendolo sin el console log

aprendiendo = () => 'Aprendiendo JavasCript Arrow Functions sin console.log';

console.log(aprendiendo());

//Poniendo un objeto

aprendiendo = () => ({aprendiendo: 'Aprendiendo JavaScript Arrow Functions Objeto'});

console.log(aprendiendo());

//Pasar parámetros
aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia} pasando parámetros`);

aprendiendo('ES6');

//Pasando un parámetro
aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia} pasando un parametro sin paréntesis`);

aprendiendo('PHP');

//Pasando dos parámetros
aprendiendo = (tech1, tech2) => console.log(`Aprendiendo ${tech1} y ${tech2} con dos parámetros`);

aprendiendo('JavaScript', 'ES6');


//Arrow functions con un callback
const productos = ['disco', 'camisa', 'guitarra'];

const letrasProducto = productos.map(producto => producto.length);

console.log(letrasProducto);

//Arror functions con un forEach
productos.forEach(producto => console.log(producto));