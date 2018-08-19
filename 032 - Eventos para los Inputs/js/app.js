const busqueda = document.querySelector('#buscador');

//Cuando presiono una tecla
// busqueda.addEventListener('keydown', obtenerEvento);

//Cuando dejo de presionar la tecla
// busqueda.addEventListener('keyup', obtenerEvento);

//Cuando escribes, presionar y dejar de presionar
// busqueda.addEventListener('keypress', obtenerEvento);

//Cuando entras dentro del elemento
// busqueda.addEventListener('focus', obtenerEvento);

//Cuando te sales fuera del elemento
// busqueda.addEventListener('blur', obtenerEvento);

//Cuando utilizas Cortar (CTRL + X o Cortar en el menú)
// busqueda.addEventListener('cut', obtenerEvento);

//Cuando utilizas Copiar (CTRL + C o Copiar en el menú)
// busqueda.addEventListener('copy', obtenerEvento);

//Cuando utilizas Pegar (CTRL + V o Pegar en el menú)
// busqueda.addEventListener('paste', obtenerEvento);

//Todo en uno, lo detecta todo (los anteriores y mas)
// busqueda.addEventListener('input', obtenerEvento);

//Cuando tienes un select y cambias de elemento (aquí no tenemos este evento)
busqueda.addEventListener('change', obtenerEvento);


function obtenerEvento(e) {
    //Escribes y se ve en otro lado
    //document.querySelector('#encabezado').innerText = busqueda.value;
    console.log(`EVENTO: ${e.type}`);
}