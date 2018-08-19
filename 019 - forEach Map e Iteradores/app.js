//Recorrer un array con forEach
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Aprender JavaScript'];

console.log(pendientes);
console.log(pendientes[2]);

//Forma con FOR
for(let i = 0; i < pendientes.length; i++) {
    console.log(`Tengo pendiente: ${pendientes[i]}`);
}

//Con forEach
pendientes.forEach((pendiente, index) => {
    console.log(`${index} : ${pendiente}`);
});

//Recorrer con map de un arreglo de objetos
const carrito = [
    {
        id: 1,
        producto: 'Libro'
    },
    {
        id: 2,
        producto: 'Guitarra'
    },
    {
        id: 3,
        producto: 'Disco'
    },
    {
        id: 4,
        producto: 'Camisa'
    },
    {
        id: 5,
        producto: 'Altavoz'
    }
]

const nombreProducto = carrito.map((carrito) => {
    return carrito.producto;
})

console.log(nombreProducto);

//Recorrer un objeto con FOR
const automovil =  {
    modelo: 'Camaro',
    motor: 6.1,
    year: 1923,
    marca: 'Chevrolet'
}

for(let auto in automovil) {
    console.log(`${auto} : ${automovil[auto]}`);
}
