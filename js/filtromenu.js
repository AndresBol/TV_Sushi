const contenedor = document.getElementById('productos');
const buscador = document.getElementById('buscador');

let productos = [];

fetch('https://raw.githubusercontent.com/AndresBol/TV_Sushi_Data/refs/heads/main/products.json')
    .then(response => response.json())
    .then(data => {

        productos = data;
        mostrarProductos(productos);

    })
    .catch(error => {
        console.error('Error cargando el menú:', error);
        contenedor.innerHTML = `<p class="text-danger">No se pudo cargar el menú.</p>`;
    });

function mostrarProductos(lista) {
    contenedor.innerHTML = '';
    if (lista.length === 0) {
        contenedor.innerHTML = `<p class="text-muted">No se econtraron productos.</p>`;
        return;
    }

    lista.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');
        card.innerHTML = `
                <div class="card h-100 shadow-sm" style="body-radius:20px">
                    <img src="${item.Ruta}" class="card.img.top" alt="${item.Nombre}">
                    <div class="card-body d-flex flex-column border-radius: 10px">
                        <h5 class="card-title">${item.Nombre}</h5>
                        <p><strong>Porción:</strong>${item.Porcion}</p>
                        <p class="fw-bold text-black">${item.Precio}</p>
                        <a href="Meal.html?id=${item.ID}" class= "btn btn-success mt-auto">Ver Detalle</a>
                  </div>

                </div>        
                `;
        contenedor.appendChild(card);
    });

    
}

buscador.addEventListener('input' , () => 
    {
        const texto = buscador.value.toLowerCase().trim();
        const filtro = productos.filter(p => p.Nombre.toLowerCase().includes(texto));
        mostrarProductos(filtro);
    });