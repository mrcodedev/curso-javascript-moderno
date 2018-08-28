const boton1 = document.getElementById('boton1');

boton1.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();

    //Abrimos conexión
    //Método GET, archivo, asincrono
    xhr.open('GET', 'empleado.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const persona = JSON.parse(this.responseText);

            const htmlTemplate = `
                <ul>
                    <li>${persona.id}</li>
                    <li>${persona.nombre}</li>
                    <li>${persona.empresa}</li>
                    <li>${persona.trabajo}</li>
                </ul>
            `;

            document.getElementById('empleado').innerHTML = htmlTemplate;
        }
    }

    xhr.send();
});

const boton2 = document.getElementById('boton2');
boton2.addEventListener('click', function(){
    const xhr = new XMLHttpRequest();

    //Abrimos conexión
    //Método GET, archivo, asincrono
    xhr.open('GET', 'empleados.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const personal = JSON.parse(this.responseText);
            
            let htmlTemplate = '';

            personal.forEach((persona) => {
                htmlTemplate += `
                    <ul>
                        <li>${persona.id}</li>
                        <li>${persona.nombre}</li>
                        <li>${persona.empresa}</li>
                        <li>${persona.trabajo}</li>
                    </ul>
                `;
            });

            document.getElementById('empleados').innerHTML = htmlTemplate;
        }
    }

    xhr.send();
});