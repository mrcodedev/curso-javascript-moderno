const leerTodos = async() => {
    // Esperar la respuesta
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

    //Procede cuando la respuesta está hecha
    const datos = await respuesta.json();

    return datos;
}

leerTodos()
    .then((usuarios) => console.log(usuarios));