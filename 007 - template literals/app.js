const producto1 = 'Pizza',
    precio1 = 30,
    producto2 = 'Hamburguesa',
    precio2 = 40;

//Forma vieja
let html;

// html =  '<ul>' +
//         '<li>Orden: ' + producto1 + '</li>' + 
//         '<li>Precio: ' + precio1 + '</li>' +
//         '<li>Orden: ' + producto2 + '</li>' + 
//         '<li>Precio: ' + precio2 + '</li>' + 
//         '<li>Total: ' + (precio1 + precio2) + '</li>' + 
//         '</ul>';



html = `
    <ul> 
        <li>Orden: ${producto1} </li>
        <li>Precio: ${precio1} </li>
        <li>Orden: ${producto2} </li>
        <li>Precio: ${precio2} </li>
        <li>Total: ${total(precio1, precio2)} </li>
`;

function total(precio1, precio2) {
    return precio1 + precio2;
}

document.getElementById('app').innerHTML = html;