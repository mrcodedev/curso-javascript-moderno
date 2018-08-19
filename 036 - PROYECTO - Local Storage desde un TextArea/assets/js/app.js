//Variables
const listaTweets = document.getElementById('lista-tweets');

//Event Listeners
eventListeners();

//Funciones
function eventListeners() {
    //Cuando se envie el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);

    //Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
}

//Añadir Tweet del Formulario
function agregarTweet(e){
    e.preventDefault();

    //Leer el valor del textarea
    const tweet = document.getElementById('tweet').value;

    //Crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    
    //Crear elemento  añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    //Añade el boton de borrar al Tweet
    li.appendChild(botonBorrar);
    //Añade el tweet a la lista
    listaTweets.appendChild(li);

    //Añadir a Local Storage
    agregarTweetLocalStorage(tweet);

    //Borramos el textarea
    document.getElementById('tweet').value = '';
}

//Borrar Tweet del DOM y del Local Storage
function borrarTweet(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar-tweet')){
        //Eliminamos el tweet del DOM
        e.target.parentElement.remove();

        //Eliminamos de LocalStorage
        borrarTweetLocalStorage(e.target.parentElement.textContent);
    }
}

//Mostrar datos de LocalStorage en la lista
function localStorageListo() {
    let tweets; 

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach((tweet) => {
        //Crear boton de eliminar
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';
        
        //Crear elemento  añadirle el contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        //Añade el boton de borrar al Tweet
        li.appendChild(botonBorrar);
        //Añade el tweet a la lista
        listaTweets.appendChild(li);
    });
}

//Agregar Tweet a Local Storage
function agregarTweetLocalStorage(tweet) {
    let tweets;

    //Guardamos todo lo que tenemos
    tweets = obtenerTweetsLocalStorage();

    //Añadir el nuevo tweet
    tweets.push(tweet);

    //Convertir de string a arreglo para Local Storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Comprobar que haya elementos en Local Storage
function obtenerTweetsLocalStorage() {
    let tweets;

    //Revisamos los valores de Local Storage, devuelve un array
    if(localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }

    return tweets;
}

//Eliminar Tweet del Local Storage
function borrarTweetLocalStorage(tweet) {
    let tweets, tweetBorrar;

    //Elimina la X del Tweet
    tweetBorrar = tweet.substring(0, tweet.length -1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach((tweet, index) => {
        if(tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}