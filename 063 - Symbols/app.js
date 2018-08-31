//Symbol
const simbolo = Symbol();
const simbolo2 = Symbol('Descripcion aquí');

//Cada Symbol es único
console.log(Symbol() === Symbol());

console.log(simbolo);
console.log(simbolo2);

//Ejemplo con Symbols
let nombre = Symbol();
let apellido = Symbol();

//Crear persona
let persona = {};
persona.nombre = 'José';
persona[nombre] = 'Antonio';
persona[apellido] = 'García';
persona.saldo = 100;
persona.tipoCliente = 'Normal';

console.log(persona);
console.log(persona.nombre);
console.log(persona[nombre]);

//Los Symbol son propiedades privadas que sólo se puede acceder con corchetes
for(let i in persona) {
    console.log(`${i} : ${persona[i]}`);
}