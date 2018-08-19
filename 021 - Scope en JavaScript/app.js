var a = 'a';
let b = 'b';
const c = 'c';

functionScope = () => {
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log(`FUNCION: ${a} ${b} ${c}`);
}

functionScope();

//SCOPE DE BLOQUE {}
if(true) {
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log(`BLOQUE: ${a} ${b} ${c}`);
}

//FOR
for(let a = 0; a < 10; a++) {
    console.log(a);
}

console.log(`GLOBAL: ${a} ${b} ${c}`);