//VARIABLES
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

//LISTENERS
cargarEventListeners();

function cargarEventListeners(){
    //Dispara cuando se presiono "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);

    //Cuando se elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    //Al cargar documento, mostrar Local Storage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}   

//FUNCIONES

//Función que añade el curso al carrito
function comprarCurso(e) {
    //Previene cualquier acción por defecto
    e.preventDefault();
    
    //Delegation para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;

        //Enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    }
}

//Lee los datos del curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    
    insertarCarrito(infoCurso);
}

//Muestra el Curso Seleccionado en el Carrito
function insertarCarrito(curso) {
    const row = document.createElement('tr');

    //Añadimos el HTML que queremos
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width="100">
        </td>
        <td>
            ${curso.titulo}
        </td>
        <td>
            ${curso.precio}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;

    //Le añadimos el curso al carrito
    listaCursos.appendChild(row);

    guardarCursoLocalStorage(curso);
}

//Elimina el curso del carrito en el DOM y LocalStorage
function eliminarCurso(e) {
    e.preventDefault();

    let curso, cursoId;
    
    if(e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
    }

    eliminarCursoLocalStorage(cursoId);

}

//Elimina los cursos del carrito en el DOM y Local Storage
function vaciarCarrito() {
    //forma lenta
    // listaCursos.innerHTML = '';

    //forma rapida y recomendada
    while(listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }

    //Vaciar Local Storage
    vaciarLocalStorage();

    return false;
}

//Almacenar cursos en el carrito a Local Storage
function guardarCursoLocalStorage(curso) {
    let cursos;

    //Toma el valor de un array con datos de Local Storage o vacio
    cursos = obtenerCursosLocalStorage();

    //El curso seleccionado se agrega al array
    cursos.push(curso);

    localStorage.setItem('cursos', JSON.stringify(cursos));
}

//Comprueba que haya elementos en Local Storage
function obtenerCursosLocalStorage() {
    let cursosLS;

    //comprobar si hay algo en Local Storage
    if(localStorage.getItem('cursos') === null) {
        cursosLS = [];
    }else{
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }

    return cursosLS;
}

//Imprime los cursos de Local Storage en el carrito
function leerLocalStorage() {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach((curso) =>{
        const row = document.createElement('tr');

        //Añadimos el HTML que queremos
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>
                ${curso.titulo}
            </td>
            <td>
                ${curso.precio}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;
    
        //Le añadimos el curso al carrito
        listaCursos.appendChild(row);
    });
}

//Elimina el curso por el ID en Local Storage
function eliminarCursoLocalStorage(curso) {
    let cursosLS;

    //Obtenemos el array de cursos
    cursosLS = obtenerCursosLocalStorage();

    //Iteramos comparando el ID del curso borrado con los del Local Storage
    cursosLS.forEach((cursoLS, index) => {
        if(cursoLS.id === curso) {
            cursosLS.splice(index, 1);
        }
    });

    //Añadimos el arreglo actual a Storage
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

//Elimina todos los cursos de Local Storage
function vaciarLocalStorage() {
    localStorage.clear();
}