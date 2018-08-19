//Reemplazar elementos

const nuevoEncabezado = document.createElement('h2');

//Agregar una id
nuevoEncabezado.id = 'encabezado';
console.log(nuevoEncabezado);

//Agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los mejores Cursos'));
console.log(nuevoEncabezado);

//Elemento anterior (será reemplazado);
const anterior = document.querySelector('#encabezado');
console.log(anterior);
console.log(anterior.parentElement);

//Elemento padre
const elPadre = document.querySelector('#lista-cursos');

//Reemplazar
elPadre.replaceChild(nuevoEncabezado, anterior);