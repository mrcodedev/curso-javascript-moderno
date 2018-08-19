//Event Listener click al buscador
// document.querySelector('#submit-buscador').addEventListener('click', (e) => {
//     //Prevenimos la opción por defecto, en este caso llevarnos a otro lado
//     e.preventDefault();
//     alert(`Buscando cursos`);
// });

document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

// let ejecutarBoton = (e) => {
//     e.preventDefault();
//     alert('Buscando Cursos');
// };

function ejecutarBoton(e) {
    e.preventDefault();
    alert('Buscando Cursos...');
    let elemento;
    //Vemos a que elemento hemos dado click
    elemento = e.target;
    console.log(elemento);
};

document.querySelector('#encabezado').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.innerText);
    e.target.innerText = 2 + 2;
});