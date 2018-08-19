class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre} tu saldo es de ${this.saldo}`;
    }

    //No requieren crear una nueva instancia, pero es necesario pasarle el nombre de la Clase y el . con el nombre del método
    static bienvenida() {
        return `Bienvenid@ al cajero`;
    }
}

const cliente = new Cliente('Pedro', 1000);

console.log(cliente);
console.log(cliente.imprimirSaldo());

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        //Va al constructor padre y los asigna al hijo
        super(nombre, saldo);
        //No existen en el constructor Padre
        this.telefono = telefono;
        this.tipo = tipo;
    }

    //Reescribimos el elemento estatico
    static bienvenida() {
        return `Bienvenid@ al cajero para Empresas`;
    }
}

const empresa = new Empresa('Empresa1', 10000, 213919319312, 'Construccion');

console.log(empresa);
console.log(empresa.imprimirSaldo());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());