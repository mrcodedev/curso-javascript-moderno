//MAPS

let cliente = new Map();

console.log(cliente);

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', '3000');

//Acceder a los valores
console.log(cliente.get('nombre'));
console.log(cliente.get('tipo'));
console.log(cliente.get('saldo'));

//MÉTODOS PARA LOS MAPS
//Tamaño del map
console.log(cliente.size);

//Comprobar que un valor existe
console.log(cliente.has('nombre')); //true
console.log(cliente.has('apellido')); //false

//Borrar un elemento del map
console.log(cliente.delete('saldo'));
console.log(cliente);
console.log(cliente.has('saldo')); //false

//Limpiar el map
cliente.clear();
console.log(cliente);

//Pasarle propiedades por default a un map
const paciente = new Map(
    [
        ['nombre', 'paciente'],
        ['habitacion', 'No definido'],
        ['Doctor', 'El que se le asigne']
    ]
);

//Quita duplicados y reescribe
paciente.set('nombre', 'Antonio');
paciente.set('habitacion', '400');
paciente.set('habitacion', '500');
console.log(paciente);

//Recorrer el map con un forEach
paciente.forEach((datos, index) => {
    console.log(`${index}: ${datos}`);
});

//SET EVITAR DUPLICADOS Y MAP LLAVE Y VALOR 