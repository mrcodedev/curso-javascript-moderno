// Destructuring forma anterior

function reserva(completo, opciones) {
    opciones = opciones || {};

    console.log(opciones);
} 

//Reserva
reserva(
    true,
    {
        metodoPago: 'credito',
        cantidad: 2000,
        dias: 3
    }
);


//Destructuring forma vieja
function reserva2(completo, opciones) {
    opciones = opciones || {};

    let metodo = opciones.metodo,
        cantidad = opciones.cantidad,
        dias = opciones.dias

    console.log(metodo);
    console.log(cantidad);
    console.log(dias);
}

reserva2(
    true,
    {
        metodo: 'tarjeta',
        cantidad: 2000,
        dias: 3
    }
);



//Destructuring forma nueva
function reserva3(completo, opciones) {
    let {metodo, cantidad, dias} = opciones;

    console.log(metodo);
    console.log(cantidad);
    console.log(dias);
}

reserva3(
    true,
    {
        metodo: 'tarjeta',
        cantidad: 2000,
        dias: 3
    }
);

//Otro ejemplo
function reserva4(completo,
    {
    metodo = 'efectivo',
    cantidad = 0,
    dias = 0
    } = {}
    )
    {

    if(completo) {
        console.log('Proceder a reservar...');
    }else{
        console.log('Abandonar');
    }
}

reserva4(
    true,
    {
        metodo: 'tarjeta',
        cantidad: 2000,
        dias: 3
    }
);