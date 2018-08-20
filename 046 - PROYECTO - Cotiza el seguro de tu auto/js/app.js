function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function() {
    /* 
        1 = americano 1.15
        2 = asiatico 1.05
        3 = europeo 1.35
    */
    
    let cantidad;
    const base = 2000;

    switch(Number(this.marca)) {
        case 1:
            cantidad = base * 1.15;
        break;

        case 2:
            cantidad = base * 1.05;
        break;

        case 3:
            cantidad = base * 1.35;
        break;
    }

    //Leer el año y mostrar diferencia de años
    const diferencia = new Date().getFullYear() - this.year;

    //Cada año de diferencia hay que reducir 3% el valor del seguro
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /*
        Si el seguro es básico se múltiplica por 30% más
        Si el seguro es completo se multiplica por 50% más
    */
    if(this.tipo === 'basico') {
        cantidad *= 1.30;
    }else{
        cantidad *= 1.50;
    }

    return Math.ceil(cantidad);
}

//Todo lo que se muestra
function Interfaz() {}

//Mensaje que se imprime en el HTML
Interfaz.prototype.mostrarMensaje = function (mensaje, tipo) {
    const div = document.createElement('div');

    if(tipo === 'error') {
        div.classList.add('mensaje', 'error');
    } else {
        div.classList.add('mensaje', 'exito');
    }
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(() => {
        document.querySelector('.mensaje').remove();
    }, 3000);
}

//Imprime el resultado de la cotizacion
Interfaz.prototype.mostrarResultado = function(seguro, total) {
    const resultado = document.getElementById('resultado');

    let marca;
    switch(Number(seguro.marca)) {
        case 1:
            marca = 'Americano';
        break;

        case 2:
            marca = 'Asiático';
        break;

        case 3:
            marca = 'Europeo';
        break;
    }

    //Crear un div
    const div = document.createElement('div');

    //Insertar la información
    div.innerHTML = `
        <p class="header">Tu resumen:</p>
        <p>Marca: ${marca},</p>
        <p>Año: ${seguro.year},</p>
        <p>Tipo: ${seguro.tipo}.</p>
        <br>
        <p>TOTAL: ${total}€</p>`;

    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 3000);
}

//LISTENERS
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    //Leer la marca seleccionada del select
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    //Leer el año seleccionado del select
    const year = document.getElementById('anio');
    const yearSeleccionado = year.options[year.selectedIndex].value;

    //Leer el valor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    //Crear instancia de interfaz
    const interfaz = new Interfaz();

    //Revisamos que los camos no esten vacios
    if(marcaSeleccionada === '' || selectYear === '' || tipo === ''){
        //Interfaz imprimiendo un error
        interfaz.mostrarMensaje('Faltan datos, revisa el formulario y prueba de nuevo', 'error');
    }else{
        //Limpiar resultados anteriores
        const resultados = document.querySelector('#resultado div');

        if(resultados != null) {
            resultados.remove();
        }

        //Instanciar seguro y mostrar inferfaz
        const seguro = new Seguro(marcaSeleccionada, yearSeleccionado, tipo);

        //Cotizar el seguro
        const cantidad = seguro.cotizarSeguro(seguro);

        //Mostrar el resultado
        interfaz.mostrarResultado(seguro, cantidad);

        interfaz.mostrarMensaje('Cotizando...', 'Éxito');
    }
});

//Ponemos los años al formulario
const max = new Date().getFullYear(),
    min = max - 20;

console.log(max);
console.log(min);

const selectYear = document.getElementById('anio');

//Pintamos en el HTML los años
for(let i = max; i >= min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectYear.appendChild(option);
}