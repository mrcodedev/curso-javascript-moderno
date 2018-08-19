//Crear un objeto

const persona = {
    nombre: 'Miguel',
    apellido: 'Martinez',
    profesion: 'Diseñador gráfico',
    email: 'mail@mail.com',
    edad: 20,
    musica: ['rock', 'metal', 'grunge'],
    hogar: {
        ciudad: 'Guadalajara',
        pais: 'Mexico'
    },
    nacimiento: () => {
        return new Date().getFullYear() - this.edad;
    }
};

//Mostramos todo el objeto
console.log(persona);

//Mostramos el nombre de la persona
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.musica);
console.log(persona.musica[0]);

//Podemos acceder al array y añadirle por ejemplo otro tipo de música
persona.musica.push('indie');
console.log(persona.musica);

//Podemos acceder a un objeto dentro de otro
console.log(persona.hogar);
console.log(persona.hogar.ciudad);

//Podemos acceder de otra manera a las propiedades del objeto
console.log(persona['hogar']['pais']);

//Acceder a la función dentro de un objeto
console.log(persona.nacimiento());