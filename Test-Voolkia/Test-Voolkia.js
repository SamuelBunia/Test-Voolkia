/*Recorrer todos los ítems publicados por el seller_id = 179571326 del
site_id = "MLA"
2. Generar un archivo de LOG que contenga los siguientes datos de
cada ítem:
a. " id " del ítem, " title " del item, " category_id " donde está
publicado, " name " de la categoría.*/



function mostrar() {

    let sellerId = prompt("Ingrese el seller Id: ");
    let siteId = prompt("Ingrese el site Id: ");
    //let sellerId = 179571326;
    //let siteId = "MLA";

    const Http = new XMLHttpRequest();
    const url = `https://api.mercadolibre.com/sites/${siteId}/search?seller_id=${sellerId}`;
    Http.open("GET", url);
    Http.send();
    
    Http.onreadystatechange = (e) => 
    {
        let responseJson = JSON.parse(Http.responseText);
        console.log(responseJson);
        responseJson.results.forEach(element => {
        console.log(element);
        });
    }
}
