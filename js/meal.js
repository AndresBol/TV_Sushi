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

               document.querySelector("h2.fs-1").textContent = producto.Nombre;
               document.querySelector("p.fs-3").textContent  = producto.Descripción;
               document.querySelector("p.fs-5.ingredientes").innerHTML= `<strong>Ingredientes:</strong> ${producto.Ingredientes}`;

               document.querySelector("p.fs-5.precio").innerHTML= `<strong>Precio:</strong>${producto.Precio}`;
               document.querySelector("p.fs-5.porcion").innerHTML= `<strong>Porcion:</strong>${producto.Porcion}`;

               document.querySelector(".productImage").src= producto.Ruta;

        })
        .catch(error => 
            {
                console.error("Error al cargar los datos del producto :" , error);
            });


});