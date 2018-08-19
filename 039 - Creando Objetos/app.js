//Object Literal

const cliente = {
    nombre: 'Juan',
    saldo: 200,
    tipoCliente: () => {
        let tipo;

        if(this.saldo > 1000){
            tipo = 'Gold';
        }else if(this.saldo > 500){
            tipo = 'Platino';
        } else {
            tipo = 'Normal';
        }

        return tipo;
    }
};

console.log(cliente.saldo);

//Método alternativo (mejor)
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function() {
        let tipo;
        
        if(this.saldo > 1000){
            tipo = 'Gold';
        }else if(this.saldo > 500) { 
            tipo = 'Platino';
        }else{
            tipo = 'Normal';
        }

        return tipo;
    }
}

const persona = new Cliente('Pedro', 20000);
const persona2 = new Cliente('Karen', 60000);

console.log(persona.tipoCliente());
console.log(persona);
console.log(persona2);
console.log(persona2.tipoCliente());