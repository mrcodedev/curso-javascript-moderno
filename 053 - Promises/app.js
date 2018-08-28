//Promises

//resolve: cuando se ha podido resolver (la promesa se cumple)
//reject: cuando ha habido un error (la promesa no se cumple)

//EJEMPLO CON RESOLVE
const esperando = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Se ejecutó');
    }, 5000);
});

esperando.then((mensaje) => {
    console.log(mensaje);
});

//EJEMPLO CON REJECT
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;

    if(descuento) {
        resolve('Descuento Aplicado');
    }else{
        reject('No se puede aplicar el descuento');
    }
});

//Si no ponemos el catch saldrá como un error
aplicarDescuento.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
});