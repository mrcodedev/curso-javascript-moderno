function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

//Crear un Prototype
Cliente.prototype.tipoCliente = function() {
    let tipo;
    if(this.saldo > 1000) {
        tipo = 'Gold';
    }else if(this.saldo > 500){
        tipo = 'Platinum';
    }else{
        tipo = 'Normal';
    }

    return tipo;
}

//Prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre ${this.nombre}, tu saldo es de ${this.saldo}, Tipo cliente ${this.tipoCliente()}`;
}

//Retirar saldo
Cliente.prototype.retirarSaldo = function(retiro) {
    return this.saldo -= retiro;
}

const cliente1 = new Cliente('Pedro', 100);
const cliente2 = new Cliente('Antonio', 600);
const cliente3 = new Cliente('Karen', 1200);

console.log(cliente3.retirarSaldo(300));

console.log(cliente1.tipoCliente());
console.log(cliente1.nombreClienteSaldo());
console.log(cliente2.nombreClienteSaldo());
console.log(cliente3.nombreClienteSaldo());


