document.addEventListener("DOMContentLoaded", ()=> {

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"),10);

if(!id)
{
    console.error("No se recibió un id en la URL");
    return;
}

const jsonURL = "https://raw.githubusercontent.com/AndresBol/TV_Sushi_Data/refs/heads/main/products.json";

fetch(jsonURL)
.then(response => response.json())
.then(data => 
    {
        const producto = data.find(item => item.ID === id);

        if(!producto)
            {
                console.error("No se encontró el producto con id:", id);
                return;
            }

            document.getElementById("nombreProducto").textContent = producto.Nombre;
            document.getElementById("descripcionProducto").textContent  = producto.Descripción;
            document.getElementById("ingredientesProducto").innerHTML= `<strong>Ingredientes:</strong> ${producto.Ingredientes}`;

            document.getElementById("precioProducto").innerHTML= `<strong>Precio:</strong>${producto.Precio}`;
            document.getElementById("porcionProducto").innerHTML= `<strong>Porcion:</strong>${producto.Porcion}`;

            document.getElementById("imagenProducto").src= producto.Ruta;

    })
    .catch(error => 
        {
            console.error("Error al cargar los datos del producto :" , error);
        });


});