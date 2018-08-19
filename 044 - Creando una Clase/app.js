class Cliente {
    constructor(nombre, apellido, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre} tu saldo es de ${this.saldo}`;
    }

    tipoCliente() {
        let tipo;
        if(this.saldo > 1000) {
            tipo = 'Gold';
        }else if(this.saldo > 5000) {
            tipo = 'Platinum';
        }else{
            tipo = 'Normal';
        }

        return tipo;
    }

    retirarSaldo(retiro) {
        return this.saldo -= retiro;
    }

    //No requieren crear una nueva instancia, pero es necesario pasarle el nombre de la Clase y el . con el nombre del método
    static bienvenida() {
        return `Bienvenid@ al cajero`;
    }
}

const maria = new Cliente('Maria', 'Perez', '10000');

console.log(maria);

console.log(maria.imprimirSaldo());

console.log(maria.tipoCliente());

maria.retirarSaldo(3000);
console.log(maria.imprimirSaldo());

console.log(Cliente.bienvenida());