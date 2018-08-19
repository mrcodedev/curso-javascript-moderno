//Si llamamos a alguna función que no existe nos saldrá un error y paralizará el programa

//funcion que no existe
try {
    algo();
} catch(error) {
    console.log(error);
} finally {
    console.log('No le importa, ejecuta de todos modos');
}

function obtenerClientes() {
    console.log('Descargando...');

    setTimeout(function() {
        console.log('Completado');
    }, 3000);
}

obtenerClientes();