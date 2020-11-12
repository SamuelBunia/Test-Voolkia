/*Recorrer todos los ítems publicados por el seller_id = 179571326 del
site_id = "MLA"
2. Generar un archivo de LOG que contenga los siguientes datos de
cada ítem:
a. " id " del ítem, " title " del item, " category_id " donde está
publicado, " name " de la categoría.*/



function mostrar() {
    //pedir que se ingrese el site y el id del usuario
    let sellerId = prompt("Ingrese el seller Id: ");
    let siteId = prompt("Ingrese el site Id: ");
    /*let sellerId = 179571326;
    let siteId = "MLA";*/


    const Http = new XMLHttpRequest();
    //al ingresarlo, lo toma en la url
    const url = `https://api.mercadolibre.com/sites/${siteId}/search?seller_id=${sellerId}`;
    Http.open("GET", url);
    Http.send();
    
    //espera a que este listo, para empezar a ejecutar
    Http.onreadystatechange = (e) => 
    {
        let responseJson = JSON.parse(Http.responseText);
        console.log(responseJson);
        //recorrer cada elemento con toda su informacion hasta llegar al final
        responseJson.results.forEach(element => {
        console.log(element);
        });
    }
}

/*Para buscar la solucion al ejercicio pido un usuario y contraseña para plantearlo a nivel de cliente servidor
a su vez estos datos obtenidos, son lo que se van a obtener por medio de la url con las variables.
Con el Http.onreadystatechange espero a que el programa este listo para ser ejecutado. Despues
con un bucle recorro y muestro cada elemento para ser mostrado*/
