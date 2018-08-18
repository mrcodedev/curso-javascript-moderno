const nombre = 'Juan';

//Error ya que un const no se lo puedes reasignar
//nombre = 'John';

const numeros = [1,2,3];

//No se pueden reasignar de esta manera
//numeros = [4,5,6];

//No podemos reasignar el array.
numeros[0] = 4;
numeros.push(5);

console.log(numeros);