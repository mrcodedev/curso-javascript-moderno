//Agregar a Local Storage

localStorage.setItem('nombre', 'José');

//Agregar a Session Storage

sessionStorage.setItem('nombre', 'Antonio');

//Eliminar de Local Storage
localStorage.removeItem('nombre');

localStorage.setItem('nombre', 'Riau');

const nombre = localStorage.getItem('nombre');

console.log(nombre);

//Si quieres borrar todo
localStorage.clear();