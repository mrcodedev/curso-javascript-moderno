const metodoPago = 'bitcoin';

switch(metodoPago) {
    case 'efectivo':
        console.log(`El usuario pago con ${metodoPago}`);
    break;

    case 'tarjeta':
        console.log(`El usuario pago con ${metodoPago}`);
    break;

    case 'cheque':
        console.log(`El usuario pago con ${metodoPago}`);
    break;
    
    default:
        console.log(`El metodo de pago ${metodoPago} es incorrecto`);
    break;
}

const fecha = new Date();

console.log(fecha.getMonth());

switch(fecha.getMonth()+1) {
    case 1:
        console.log("Enero");
    break;

    case 2:
        console.log("Febrero");
    break;

    case 3:
        console.log("Marzo");
    break;

    case 4:
        console.log("Abril");
    break;

    case 5:
        console.log("Mayo");
    break;

    case 6:
        console.log("Junio");
    break;

    case 7:
        console.log("Julio");
    break;

    case 8:
        console.log("Agosto");
    break;

    case 9:
        console.log("Septiembre");
    break;

    case 10:
        console.log("Octubre");
    break;

    case 11:
        console.log("Noviembre");
    break;

    case 12:
        console.log("Diciembre");
    break;

    default:
        console.log(`Hemos tenido un error al obtener el mes`);
    break;
}