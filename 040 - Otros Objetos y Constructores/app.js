//STRING
const nombre1 = 'Pedro';
const nombre2 = new String('Pedro');

console.log(nombre1);

//String
console.log(typeof nombre1);
//Objeto
console.log(typeof nombre2);

console.log(nombre2);

//TRUE
if(nombre1 == nombre2) {
    console.log('Si son iguales');
}else{
    console.log('No son iguales');
}

//FALSE
if(nombre1 === nombre2) {
    console.log('Si son iguales');
}else{
    console.log('No son iguales');
}

//NUMEROS
const numero1 = 20;
const numero2 = new Number(20);

//20
console.log(numero1);
//Object Number
console.log(numero2);

//BOOLEANOS
const boolean1 = true;
const boolean2 = new Boolean(true);

console.log(boolean1);
console.log(boolean2);

//FUNCIONES
const funcion1 = function(a,b) {
    return a+b;
}

const funcion2 = new Function('a', 'b', 'return a + b');
 
console.log(funcion1(2+3));
console.log(funcion2(2+3));

//OBJETOS
const persona1 = {
    nombre: 'Juan'
}

const persona2 = new Object({nombre: 'Juan'});

console.log(persona1);
console.log(persona2);

//ARRAYS
const array1 = [2,3,4];
const array2 = new Array(2,3,4);

console.log(array1);
console.log(array2);