const cliente = {
    nombre: 'Alejandra',
    tipo: 'Premium'
}

//Forma antigua
let nombre = cliente.nombre,
    tipo = cliente.tipo;

console.log(`Nombre del cliente ${nombre} y tipo ${tipo}`);

const clientenuevo = {
    name: `José`,
    typeS: `homeless`
}

//Forma nueva
let { name, typeS } = clientenuevo;

console.log(`Nombre del cliente ${name} y tipo ${typeS}`);

//const ejemplo 2
const ejemplo2 = {
    nom: 'Pedro',
    tip: `Premium`
}

nom = 'Antonio';
tip = 'Gold';

( {nom, tip } = ejemplo2 )

console.log(`Nombre del cliente ${nom} y tipo ${tip}`);

//Ejemplo 3
const ejemplo3 = {
    seLlama: 'Raul',
    tieneTipo: 'Premium',
    datos: {
        ubicacion: {
            ciudad: `Elche`,
            pais: `España`
        },
        cuenta: {
            desde: `10-12-2012`,
            saldo: 400
        }
    }
}

let { datos: {ubicacion} } = ejemplo3;

console.log(ubicacion);
console.log(ubicacion.ciudad);
console.log(ubicacion.pais);

//Ejemplo 4
//Si uno de los datos no existe, lo puedo inicializar
const ejemplo4 = {
    nombreEjemplo4: `Luis`,
    tipoEjemplo4: `Premium`
}

let { nombreEjemplo4, tipoEjemplo4, saldo=0 } = ejemplo4;

console.log(nombreEjemplo4);
console.log(tipoEjemplo4);
console.log(saldo);