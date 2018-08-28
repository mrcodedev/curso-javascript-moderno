// Callback en forEach
const ciudades = ['Londres', 'New York', 'Madrid', 'Paris', 'Viena'];

//Inline CallBack (recomendado)
ciudades.forEach((ciudad) => {
    console.log(ciudad);
})

console.log('-----------------');

//Con función definida
function callback(ciudad) {
    console.log(ciudad);
}

ciudades.forEach(callback);

console.log('-----------------');

//Se agrega unnuevo país despues de 2 segundos
function nuevoPais(pais, callback) {
    setTimeout(function() {
        ciudades.push(pais);
        callback();
    }, 2000);
}

//Los paises se muestran después de un segundo
function mostrarPaises() {
    setTimeout(function(){
        let html = '';
        ciudades.forEach(function(ciudad) {
            html += `<li>${ciudad}</li>`;
        });
        document.getElementById('app').innerHTML = html;
    }, 1000);
}

//Agregar nuevo pais
nuevoPais('Alemania', mostrarPaises);

//Mostrar los paises
mostrarPaises();