//Para crear expresiones regulares
const exp1 = new RegExp('/abc/');
const exp2 = /abc/;

console.log(exp1);
console.log(exp2);

let valor, expReg;

//Expresión regular de rango de números
expReg = /[0123456789]/;
expReg = /[0-9]/; //Es lo mismo que el anterior

valor = 1992;
console.log(`Numeros: ${expReg.test(valor)}`); //true
console.log(`Numeros: ${expReg.test('Hola')}`); //false

//Una fecha en expresión regular 20-10-2018
expReg = /\d\d-\d\d-\d\d\d\d/;
valor = '20-10-2018';

console.log(`Fecha: ${expReg.test(valor)}`);

//Hora 10:30
expReg = /\d\d:\d\d/;
valor = '10:30';

console.log(`Hora: ${expReg.test(valor)}`);

//Hora 10:30 AM
expReg = /\d\d:\d\d \D\D/;
valor = '10:30 PM';

console.log(`Hora AM/PM: ${expReg.test(valor)}`);


//Busca que haya cuatro digitos
expReg = /\d\d\d\d/;
valor = 1020;

//Si ponemos más de 4 números dirá true porque la condición dice que al menos hay 4 números
console.log(`Ver si tiene 4 numeros: ${expReg.test(valor)}`);

//Busca que haya cuatro digitos
expReg = /\d+/;
valor = 102023232;

//Si ponemos más de 4 números dirá true porque la condición dice que al menos hay 4 números
console.log(`Ver si tiene numeros: ${expReg.test(valor)}`);

//Negar la expresión
expReg = /[^0-9]/
valor = 1231312;

console.log(`Negación números: ${expReg.test(valor)}`);

valor = `hola`;

console.log(`Negación letras: ${expReg.test(valor)}`);

//La sintaxis {1,2} puede tener uno o dos carácteres
expReg = /\d{1,2}-\d{1,2}-\d{4}/;
valor = '10-10-2018';

console.log(`Ver fecha: ${expReg.test(valor)}`);

valor = '1-1-2018';

console.log(`Ver fecha: ${expReg.test(valor)}`);

valor = '10-10-2018';

console.log(`Ver fecha: ${expReg.test(valor)}`);

valor = '10-100-2018';

console.log(`Ver fecha: ${expReg.test(valor)}`);

valor = '10-10-203';

console.log(`Ver fecha: ${expReg.test(valor)}`);

//Evaluar letras o números
// w = numeros o letras
expReg = /\w+/;
valor = 'Mensaje de Prueba';

console.log(`Numero o letras: ${expReg.test(valor)}`);

valor = 11123;

console.log(`Numero o letras: ${expReg.test(valor)}`);

valor = ' ';

console.log(`Numero o letras: ${expReg.test(valor)}`);

//Otra forma de evaluar que sólo sean números
expReg = /([0-9])\w+/;
valor = 1234;

console.log(`Numeros: ${expReg.test(valor)}`);

valor = `Hola mundo`;

console.log(`Numeros: ${expReg.test(valor)}`);

//Texto sean puras mayúsculas
expReg = /([A-Z])\w+/
valor = 1234;

console.log(`Mayúsculas: ${expReg.test(valor)}`);

valor = 'hola muNDO';

console.log(`Mayúsculas: ${expReg.test(valor)}`);

regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

valor = 'mrcodedev@gmail.com';

console.log(`Mail: ${regExp.test(valor)}`);