//Devuelve todo el HTML
console.log(document);

//HTMAllCollection
console.log(document.all);

//Seleccionar el header a través de all
console.log(document.all[10]);

//Obtener el head del HTML
console.log(document.head);

//Obtener el body del HTML
console.log(document.body);

//Obtener el Dominio en el que estamos
console.log(document.domain);

//Obtener el URL en la que estamos
console.log(document.URL);

//Obtener el charset del HTML
console.log(document.characterSet);

//Obtener todos los formularios
console.log(document.forms);

//Obtener el primer formulario
console.log(document.forms[0]);

//Obtener la id del primer formulario
console.log(document.forms[0].id);

//Obtener la clase del primer formulario
console.log(document.forms[0].classList);

//Obtener la primera clase del formulario
console.log(document.forms[0].classList[0]);

//Obtener todas la lista de clases de ese elemento
console.log(document.forms[0].className);

//Obtener todas las imagenes del HTML
console.log(document.images);

//Obtener la tercera imagen
console.log(document.images[2]);

//Obtener el src de la tercera imagen
console.log(document.images[2].src);

//Obtener todos los atributos de la imagen
console.log(document.images[2].getAttribute('src'));

//Saber los scripts que tenemos en el HTML
console.log(document.scripts);

//Ver el primer elemento de los scripts
console.log(document.scripts[0]);

//Vamos a coger todas las imagenes
let imagenes = document.images;
let imagenesArray = Array.from(imagenes);

console.log(imagenesArray);


//Utilizar un forEach
imagenesArray.forEach((imagen) => {
    console.log(`${imagen}`);
});