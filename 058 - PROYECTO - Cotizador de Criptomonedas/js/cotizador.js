class Cotizador {
    
    //Obtiene todo el JSON con las criptomonedas
    async obtenerMonedasAPI() {
        //Fetch a la API 
        const urlObtenerMonedas = await fetch(`https://api.coinmarketcap.com/v1/ticker/`);

        //Respuesta en JSON de las monedas
        const monedas = await urlObtenerMonedas.json();

        return {
            monedas
        }
    }

        async obtenerValores(moneda, criptomoneda) {
            //Convierte los selects en la URL
            const urlConvertir = await fetch(`https://api.coinmarketcap.com/v1/ticker/${criptomoneda}/?convert=${moneda}`);

            const resultado = await urlConvertir.json();

            return {
                resultado
            }
        }
}