//Async Await
async function obtenerClientes() {
    const clientes = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Clientes descargados...`);
        }, 2000);
    }); 
    
    //Error o no
    const error = true;

    if(!error) {
        const respuesta = await clientes;
        
        return respuesta;
    }else{ 
        await Promise.reject('Hubo un error');
    }
}

obtenerClientes()
    .then((res) => console.log(res))
    .catch(error => console.log(error));