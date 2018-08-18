const num1 = 20;
const num2 = 50;
const num3 = '20';
let nombre1 = 'jose';
let nombre2 = 'juan';

//false
console.log(num1 > num2);

//true
console.log(num1 < num2);

//comparador de igual
console.log(num1 == num3); //true

//con tres iguales revisa valor y tipo de dato
console.log(num1 === num3); //false

//diferentes
console.log(2 != 3); //true

//los espacios son importantes
console.log('hola' == ' hola'); //false

//A menor rango, y z mayor rango
console.log('a' > 'b'); //false

console.log('z' > 'A'); //true

console.log(null == undefined); //true
console.log(null === undefined); //false

//error ya que un igual asigna, no compara
console.log(nombre1 = nombre2);