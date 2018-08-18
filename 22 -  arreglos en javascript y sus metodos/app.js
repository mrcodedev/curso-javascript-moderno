//Crear un array
const numeros = [10, 20, 30, 40, 50];

console.log(numeros);

//Array de Strings (método alternativo)
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');

console.log(meses);

//Array mezclado
const mezclado = ['Hola', 20, true, null, false, undefined];
console.log(mezclado);

//contar cuantos elementos tiene el array
console.log(meses.length);

//Comprueba si es un array, devuelve un true
console.log(Array.isArray(meses));

//Devolver sólo el valor de un elemento
console.log(meses[7]);

//Puedes insertar uno más
numeros[5] = 60;

console.log(numeros);

//Se puede hacer con un método mejor, con el método PUSH
numeros.push(70);

console.log(numeros);

//Añadir al inicio del array, con el método UNSHIFT
numeros.unshift(0);

console.log(numeros);

//Como eliminar un elemento del array del final
numeros.pop();
console.log(numeros);

//Elimiar elemento del array del inicio
numeros.shift();
console.log(numeros);

//Quitar un elemento que queramos
numeros.splice(2,1);
console.log(numeros);

//Revertir el orden del array
numeros.reverse();
console.log(numeros);

//Unir dos arrays
let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log(arr1.concat(arr2));

//Encontrar un elemento en el arreglo
console.log(meses.indexOf('Agosto'));

