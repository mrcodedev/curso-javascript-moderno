//Crear un array de objetos
const autos = [
    {
        modelo: 'Mustang',
        motor: 6.4
    },
    {
        modelo: 'Ferrari',
        motor: 6.1
    },
    {
        modelo: 'Challenger',
        motor: 6.2
    }
];

//Para verlos todos
console.log(autos);

//Para acceder al primero
console.log(autos[0]);

//Para mostrarlos todos uno a uno
for(let i = 0; i < autos.length; i++) {
    console.log(`Modelo: ${autos[i].modelo}, motor: ${autos[i].motor}`);
}

