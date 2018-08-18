const num1 = "50",
    num2 = 10,
    num3 = 'tres';

//Hace la suma porque los dos son numeros
console.log(1 + 2);

//El más entre cadenas, concatena
console.log("Java" + "Script");

//Cuando hay una cadena y un numero, concatena
console.log(num1 + num2);

//Usando Number() podemos conseguir convertir de string a number
console.log(Number(num1) + num2);

//Vemos que nos devuelve un number
console.log(typeof(Number(num1)));

//parseInt hace lo mismo
console.log(parseInt(num1) + num2);

//Si restamos si que hace la resta (extraño caso de JavaScript)
console.log(num1 - num2);

//Not a Number (NaN)
console.log(Number(num3));
//number
console.log(typeof(Number(num3)));

//Not a Number (NaN)
console.log(parseInt(num3));
//number
console.log(typeof(parseInt(num3)));

//number
console.log(Number("20"));

//number
console.log(Number('20.20'));

//1
console.log(Number(true));

//0
console.log(Number(false));

//0
console.log(Number(null));

//NaN
console.log(Number(undefined));

//NaN
console.log(Number('Hola mundo'));

//NaN
console.log(Number([1,2,4,5]));

//ParseInt numeros enteros y ParseFloat numeros flotantes
console.log(parseInt('100')); //100

console.log(parseFloat('100')); //100

console.log(parseInt('100.203')); //100

console.log(parseFloat('100.203')); //100.203

//toFixed sólo aplica a numeros y no admite cadenas
let dato1 = 28378127321;
let dato2 = 21983217312739127312.218371298731927391273912783;

//Muestra el numero tal cual
console.log(dato1.toFixed());
//Muesta el numero redondeado
console.log(dato2.toFixed());
//Mostrando los numeros detrás de la coma
console.log(dato2.toFixed(6));