//Object Create
const Cliente = {
    imprimirSaldo: function() {
        return `Hola ${this.nombre} tu saldo es ${this.saldo}`;
    },
    retiraSaldo: function(retiro) {
        return this.saldo -= retiro;
    }
};

//Crear el Objeto
const mary = Object.create(Cliente);

console.log(mary);

mary.nombre = 'Mary';
mary.saldo = '1000';

console.log(mary);

console.log(mary.imprimirSaldo());

console.log(mary.retiraSaldo(300));