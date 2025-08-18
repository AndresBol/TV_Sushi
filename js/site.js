let products = [];

        function updateProductInfo(slideIndex) {
            const productNameElement = document.getElementById('currentProductName');
            const viewProductBtn = document.getElementById('viewProductBtn');
            
            if (productNameElement && viewProductBtn && products.length > 0) {
                const productId = slideIndex + 1;
                const product = products.find(item => item.ID === productId);
                
                if (product) {
                    productNameElement.style.opacity = '0';
                    viewProductBtn.style.opacity = '0';
                    
                    setTimeout(() => {
                        productNameElement.textContent = product.Nombre;
                        viewProductBtn.href = `Meal.html?id=${productId}`;
                        
                        productNameElement.style.opacity = '1';
                        viewProductBtn.style.opacity = '1';
                    }, 150);
                } else {
                    productNameElement.textContent = "Producto no encontrado";
                    viewProductBtn.href = "#";
                }
            }
        }

        function loadProducts() {
            const jsonURL = "https://raw.githubusercontent.com/AndresBol/TV_Sushi_Data/refs/heads/main/products.json";
            
            fetch(jsonURL)
                .then(response => response.json())
                .then(data => {
                    products = data;
                    updateProductInfo(0);
                })
                .catch(error => {
                    console.error("Error al cargar los datos de productos:", error);
                    document.getElementById('currentProductName').textContent = "Error cargando productos";
                });
        }

        document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.getElementById('carouselConveyorBelt');
            const audio = document.getElementById('sushiFlowAudio');
            
            loadProducts();
            
            if (carousel) {
                carousel.addEventListener('slide.bs.carousel', function(event) {
                    updateProductInfo(event.to);
                });

                const carouselControls = carousel.querySelectorAll('.carousel-control-prev, .carousel-control-next');
                carouselControls.forEach(control => {
                    control.addEventListener('click', function() {
                        if (audio) {
                            if (audio.paused) {
                                audio.play().catch(error => {
                                    console.log('Audio autoplay prevented:', error);
                                });
                            }
                        }
                    });
                });

                const carouselIndicators = carousel.querySelectorAll('.carousel-indicators button');
                carouselIndicators.forEach(indicator => {
                    indicator.addEventListener('click', function() {
                        if (audio) {
                            if (audio.paused) {
                                audio.play().catch(error => {
                                    console.log('Audio autoplay prevented:', error);
                                });
                            }
                        }
                    });
                });
            }
        });