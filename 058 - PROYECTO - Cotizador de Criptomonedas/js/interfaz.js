class Interfaz {
    constructor() {
        //Se recogen todos las funciones
        this.init();
    }

    init() {
        this.construirSelect();
    }

    construirSelect() {
        cotizador.obtenerMonedasAPI()
            .then(monedas => {
                //crear un select con las opciones
                const arregloMonedas = monedas.monedas;
                const select = document.getElementById('criptomoneda');

                //Construir SELECT desde la REST API
                arregloMonedas.forEach((moneda) => {
                    //Añadir el ID y el valor,
                    //después pasarselo al SELECT
                    const option = document.createElement('option');
                    option.value = moneda.id;
                    option.appendChild(document.createTextNode(moneda.name));
                    select.appendChild(option);
                });
            });
    }

    mostrarMensaje(mensaje, clase) {
        const div = document.createElement('div');
        div.className = clase;
        div.appendChild(document.createTextNode(mensaje));

        //Div para mensajes del HTML
        const divMensaje = document.querySelector('.mensajes');

        //Agregamos el div a mensajes
        divMensaje.appendChild(div);

        //Desaparecer la alerta después de 3s
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }

    //Imprime el resultado de la cotización
    mostrarResultado(resultado, moneda) {
        const resultadoAnterior = document.querySelector('#resultado > div');

        //En caso que haya un resultado anterior, borrarlo
        if(resultadoAnterior) {
            resultadoAnterior.remove();
        }

        //Muestra el spinner
        this.mostrarSpinner();

        //Construir la etiqueta de precio según la moneda
        const etiquetaMoneda = `price_${moneda}`;

        //Leer el valor del resultado
        const valor = resultado[etiquetaMoneda];

        //Convierte la hora de UNIX a horas y minutos
        const hora =  new Date(resultado.last_updated * 1000);

        const minutos = hora.getMinutes().length == 1 ? `0${hora.getMinutes()}` : `${hora.getMinutes()}`;
        const horaActualizada = `${hora.getHours()}:${minutos}:${hora.getSeconds()}`;

        //Construir el Template
        let templateHTML = ``;
        templateHTML += `
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Resultado:</span>
                    <p>El resultado de ${resultado.name.toUpperCase()} a moneda ${moneda.toUpperCase()} es de: ${valor}$</p>
                    <p>Última hora ${resultado.percent_change_1h}</p>
                    <p>Último día ${resultado.percent_change_24h}</p>
                    <p>Últimos 7 días ${resultado.percent_change_7d}</p>
                    <p>Última actualización: ${horaActualizada}</p> 
                </div>
            </div>
        `;

        //Oculta el spinner y muestra el resultado
        setTimeout(() => {
            //Imprimir el resultado
            document.querySelector('#resultado').innerHTML = templateHTML;

            //Ocultar el spinner
            document.querySelector('.spinner img').remove();
        }, 3000);
    }

    //Muestra un spinner cuando se cotiza
    mostrarSpinner() {
        const spinnerGIF = document.createElement('img');
        spinnerGIF.src = 'img/spinner.gif';
        document.querySelector('.spinner').appendChild(spinnerGIF);
    }
}