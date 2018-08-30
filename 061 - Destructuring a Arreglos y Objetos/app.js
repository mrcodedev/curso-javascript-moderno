// 

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris', {
    idioma: 'ingles'
}];

//Sacar las dos primeras
// const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];

// const [primeraCiudad, segundaCiudad] = ciudades;

// console.log(primeraCiudad);
// console.log(segundaCiudad);


//Sacar las dos ultimas
// const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];

// const [, , , paris]= ciudades;

// console.log(paris);

//Devuelve el primer elemento (Londres)
// [idioma] = ciudades;

// console.log(idioma);


//EJEMPLO MÁS AVANZADO
const cliente =  {
    tipo: 'Premium',
    saldo: 30000,
    datos: {
        nombre: 'Pedro', 
        apellido: 'Perez',
        residencia: {
            ciudad: 'Madrid'
        }
    },
    movimientos: ['12-03-2018', '12-03-2017', '12-03-2016']
}

let {
    tipo,
    datos,
    datos: {residencia},
    movimientos: [ , dos]
} = cliente;

console.log(dos);