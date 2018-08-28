document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

//Llamado a AJAX e imprimir resultados
function cargarNombres(e) {
    e.preventDefault();

    //Leer las variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;

    let url = '';
    url += `http://uinames.com/api/?`;

    //Si hay origen agregarlo a la URL
    if(origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`
    }

    //Si hay un genero agregarlo a la URL
    if(generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`
    }

    //Si hay una cantidad agregarlo a la URL
    if(cantidad !== '') {
        url += `amount=${cantidad}&`
    }

    //Conectar con AJAX
    //Iniciar XMLHTTPRequest
    const xhr = new XMLHttpRequest();

    //Abrimos la conexión
    xhr.open('GET', url, true);

    //Datos e impresion del template
    xhr.onload = function() {
        if(this.status === 200) {
            const nombres = JSON.parse(this.responseText);

            //Generar el HTML
            let htmlNombres = `<h2>Nombres generados</h2>`;

            htmlNombres += `<ul class="lista">`;

            //Imprimir cada nombre
            nombres.forEach((nombre) => {
                htmlNombres += `
                    <li>${nombre.name}</li>
                `;
            });

            htmlNombres += `</ul>`;

            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }

    //Enviar el Request
    xhr.send();
}