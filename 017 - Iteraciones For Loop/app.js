for(let i = 0; i <= 10; i++) {
    console.log(`Numero ${i}`);
}

for(let i = 0; i < 10; i++) {
    if(i == 5) {
        console.log(`Voy en el ${i}`);
    }
    console.log(`Numero ${i}`);

}

//Arrays

const instrumentos = ['Guitarra', 'Violonchelo', 'Piano'];

for(let i = 0; i < instrumentos.length; i++) {
    console.log(`Tienes este instrumento ${instrumentos[i]}`);
}