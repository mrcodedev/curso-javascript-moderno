//Un set no añade algo duplicado

let carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3');

let numeros = new Set([1,2,3,4,5,5,5,5,5,6,6,6,7,7,8,8,8]);

console.log(carrito);
//Ver cuantos elementos tiene el carrito
console.log(carrito.size);

console.log(numeros);
console.log(numeros.size);

//Podemos comprobar que un valor exista
console.log(carrito.has('Camisa')); //true
console.log(carrito.has('Guitarra')); //false

//Como eliminar algo del set
carrito.delete('Camisa');
console.log(carrito.size);

//Para eliminar todos los elementos
carrito.clear();
console.log(carrito.size);

//Recorrer set con foreach
numeros.forEach((numero) => {
    console.log(`Numero: ${numero}`);
});

//Para ver el index - Te da lo mismo el index que lo que recorres
let articulos = new Set(['Cds', 'Vinilos', 'Cassetes'])
articulos.forEach((articulo, index) => {
    console.log(`${index}#: ${articulo}`);
});

//Como convertir un set a array
const arrayArticulos = [...articulos];
console.log(arrayArticulos);