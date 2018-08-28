document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);


function cargarTXT() {
    fetch('datos.txt')
        .then((res) => {
            return res.text();
        })
        .then((empleados) => {
            document.getElementById('resultado').innerHTML = empleados;
        })
        .catch((error) => {
            console.log(error);
        });
}

function cargarJSON() {
    fetch('empleados.json')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let html = ``;

            data.forEach((data) => {
                html += `
                    <li>${data.nombre} ${data.puesto}</li>
                `;
            });

            document.getElementById('resultado').innerHTML = html;
        })
        .catch((error) => {
            console.log(error);
        });
}

function cargarREST() {
    fetch('https://picsum.photos/list')
        .then((res) => {
            return res.json();
        })
        .then((imagenes) => {
            console.log(imagenes);

            let html = ``

            imagenes.forEach((imagen) => {
                html += `
                    <li>
                        <a href="${imagen.post_url}">Ver Imagen</a>
                        ${imagen.author}
                    </li>
                `;
            });
            document.getElementById('resultado').innerHTML = html;
        });
}