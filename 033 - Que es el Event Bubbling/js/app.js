// Event Bubbling
const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', (e) => {
    console.log(`Click en Card`);
    e.stopPropagation();
});

infoCurso.addEventListener('click', (e) => {
    console.log(`Click en infoCurso`);
    e.stopPropagation();
});

agregarCarrito.addEventListener('click', (e) => {
    console.log(`Click en agregarCarrito`);
    e.stopPropagation();
});