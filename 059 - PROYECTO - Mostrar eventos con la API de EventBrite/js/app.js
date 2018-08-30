//Instanciar ambas clases
const eventBrite = new EventBrite();
const ui = new Interfaz();

//Listener el buscador
document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();

    //Leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value;

    //Leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    //Revisar que haya algo escrito en el buscador
    if(textoBuscador !== '') {
        //Cuando si hay en una busqueda
        eventBrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
            .then(eventos => {
                if(eventos.eventos.events.length > 0) {
                    //Limpiar resultados si los tiene
                    ui.limpiarResultados();
                    //Si hay eventos, mostrar el resultado
                    ui.mostrarEventos(eventos.eventos);
                }else{
                    //No hay eventos enviar una alerta
                    ui.mostrarMensaje('No hay resultados', 'alert alert-danger mt-4');
                }
            })
    }else{
        //Mostrar mensaje para que imprima algo
        ui.mostrarMensaje('Escribir algo en el buscador', 'alert alert-danger mt-4');
    }
});