//Generadores (No se puede usar Arrow Function)

function *crearGenerador() {
    //yield
    yield 1;
    yield 'Nombre';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

//Generador que recorre un array
function *nuevoGenerador(carrito) {
    for(let i=0;i < carrito.length; i++) {
        yield carrito[i];
    }
}

//Creamos carrito
const carrito = ['Producto1', 'Producto2', 'Producto3', 'Producto4'];

//Recorremos el iterador
let iteradorCarrito = nuevoGenerador(carrito);

console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next().value);
console.log(iteradorCarrito.next().done);
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());