//getElementById

//Obtener la id hero
console.log(document.getElementById('hero'));

//Acceder solo a la id
console.log(document.getElementById('hero').id);

//Acceder a la clase del elemento
console.log(document.getElementById('header').className);

console.log(document.getElementById('encabezado'));

//Acceder al texto que tiene el elemento
console.log(document.getElementById('encabezado').textContent);

console.log(document.getElementById('encabezado').innerText);

//Vamos a cambiar el CSS y cambiando textos
encabezado = document.getElementById('encabezado');
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';
encabezado.textContent = 'Los mejores cursos';
encabezado.innerText = 'Los mejores cursos';