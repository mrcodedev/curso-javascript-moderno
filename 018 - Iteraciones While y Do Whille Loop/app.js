let i = 0;

while(i < 10) {

    if(i === 5) {
        console.log('Cinco');
        i++;
        continue;
    }
    console.log(`Numero: ${i}`);
    i++;
}

//Recorrer Array
const musica = ['Cancion 1', 'Cancion 2', 'Cancion 3'];

let j = 0;

while(j < musica.length) {
    console.log(`Reproduciendo la cancion ${musica[j]}`);
    j++;
}