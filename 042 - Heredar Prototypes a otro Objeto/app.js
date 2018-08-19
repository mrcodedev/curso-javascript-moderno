function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}


//Prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre ${this.nombre}, tu saldo es de ${this.saldo}`;
}

const cliente1 = new Cliente('Pedro', 100);


console.log(cliente1);

console.log(cliente1.nombreClienteSaldo());

//Banca para empresas
function Empresa(nombre, saldo, telefono, tipo) {
    //Heredo
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}

//Heredamos el metodo nombreClienteSaldo
Empresa.prototype = Object.create(Cliente.prototype);

const empresa = new Empresa('Udemy', 10000000, 12345678, 'Educación');


console.log(empresa);

console.log(empresa.nombreClienteSaldo());