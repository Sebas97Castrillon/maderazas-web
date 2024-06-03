document.addEventListener("DOMContentLoaded", function () {

    // Datos de los elementos del portafolio
    const portfolioItems = [
        // Array de objetos con detalles de los elementos del portafolio
        { category: "muebles", title: "Silla Confortable en un Ambiente Acogedor", imgSrc: "assets/img/portfolio/Muebles/portafolio-1/portafolio-1.jpg", id: "muebles1" },
        { category: "muebles", title: "Comedor con Estilo Escandinavo", imgSrc: "assets/img/portfolio/Muebles/portafolio-2/portafolio-1.jpg", id: "muebles2" },
        { category: "muebles", title: "Mesa Art Nouveau", imgSrc: "assets/img/portfolio/Muebles/portafolio-3/portafolio-1.jpg", id: "muebles3" },
        { category: "muebles", title: "Armario Futurista", imgSrc: "assets/img/portfolio/Muebles/portafolio-4/portafolio-1.jpg", id: "muebles4" },
        { category: "muebles", title: "Bancas Intricadas en una Iglesia", imgSrc: "assets/img/portfolio/Muebles/portafolio-5/portafolio-1.jpg", id: "muebles5" },
        { category: "muebles", title: "Cajonera de Madera Detallada", imgSrc: "assets/img/portfolio/Muebles/portafolio-6/portafolio-1.jpg", id: "muebles6" },
        { category: "muebles", title: "Cocina con isla central y barra", imgSrc: "assets/img/portfolio/Muebles/portafolio-7/portafolio-1.jpg", id: "muebles7" },
        { category: "decoracion", title: "Silla y Mesa en madera rustica", imgSrc: "assets/img/portfolio/Decoración/portafolio-1/portafolio-1.jpg", id: "decoracion1" },
        { category: "decoracion", title: "Caballo de Madera", imgSrc: "assets/img/portfolio/Decoración/portafolio-2/portafolio-1.jpg", id: "decoracion2" },
        { category: "decoracion", title: "Ciudad en Miniatura", imgSrc: "assets/img/portfolio/Decoración/portafolio-3/portafolio-1.png", id: "decoracion3" },
        { category: "decoracion", title: "Lámpara sobre Soporte de Madera", imgSrc: "assets/img/portfolio/Decoración/portafolio-4/portafolio-1.jpg", id: "decoracion4" },
        { category: "decoracion", title: "Lámpara Blanca con Pantalla Beige", imgSrc: "assets/img/portfolio/Decoración/portafolio-5/portafolio-1.jpg", id: "decoracion5" },
        { category: "decoracion", title: "Caballo Mecedor de Madera", imgSrc: "assets/img/portfolio/Decoración/portafolio-6/portafolio-1.jpg", id: "decoracion6" },
        { category: "decoracion", title: "Centro de Entretenimiento Moderno", imgSrc: "assets/img/portfolio/Decoración/portafolio-7/portafolio-1.jpg", id: "decoracion7" },
        { category: "oficina", title: "Escritorio Minimalista para Oficina en Casa", imgSrc: "assets/img/portfolio/Oficina/portafolio-1/portafolio-1.jpg", id: "oficina1" },
        { category: "oficina", title: "Gabinete Antiguo con Cajones", imgSrc: "assets/img/portfolio/Oficina/portafolio-2/portafolio-1.jpg", id: "oficina2" },
        { category: "oficina", title: "Escritorio de Madera con Laptop", imgSrc: "assets/img/portfolio/Oficina/portafolio-3/portafolio-1.jpg", id: "oficina3" },
        { category: "oficina", title: "Encimera de Madera en Tienda de Zapatos", imgSrc: "assets/img/portfolio/Oficina/portafolio-4/portafolio-1.jpg", id: "oficina4" },
        { category: "oficina", title: "Soporte de Madera para Teléfonos", imgSrc: "assets/img/portfolio/Oficina/portafolio-5/portafolio-1.jpg", id: "oficina5" },
        { category: "oficina", title: "Mueble con Cajones y Acabado de Laca y Acero", imgSrc: "assets/img/portfolio/Oficina/portafolio-6/portafolio-1.jpg", id: "oficina6" },
        { category: "baño", title: "Baño Moderno con Doble Lavabo", imgSrc: "assets/img/portfolio/Baño/portafolio-1/portafolio-1.jpg", id: "baño1" },
        { category: "baño", title: "Baño Rústico con Bañera Clásica", imgSrc: "assets/img/portfolio/Baño/portafolio-2/portafolio-1.jpg", id: "baño2" },
        { category: "baño", title: "Bañera de Madera al Estilo Japonés", imgSrc: "assets/img/portfolio/Baño/portafolio-3/portafolio-1.jpg", id: "baño3" },
        { category: "baño", title: "Refugio Rústico", imgSrc: "assets/img/portfolio/Baño/portafolio-4/portafolio-1.jpg", id: "baño4" },
        { category: "mascotas", title: "Refugio Canino de Vigilancia", imgSrc: "assets/img/portfolio/Mascotas/portafolio-1/portafolio-1.png", id: "mascotas1" },
        { category: "mascotas", title: "Estructura de Ensueño en Miniatura", imgSrc: "assets/img/portfolio/Mascotas/portafolio-2/portafolio-1.jpg", id: "mascotas2" },
        { category: "mascotas", title: "Casa de Mascotas Moderna y Espaciosa", imgSrc: "assets/img/portfolio/Mascotas/portafolio-3/portafolio-1.jpg", id: "mascotas3" },
        { category: "mascotas", title: "Casa de Mascotas Moderna y Espaciosa", imgSrc: "assets/img/portfolio/Mascotas/portafolio-4/portafolio-1.jpg", id: "mascotas4" },
    ];

    // Seleccionar el contenedor del portafolio
    const portfolioContainer = document.querySelector('.portfolio-container');

    if (portfolioContainer) {
        let portfolioHTML = '';

        // Generar el HTML para cada elemento del portafolio
        portfolioItems.forEach(item => {
            portfolioHTML += `
            <div class="col-lg-4 col-md-6 portfolio-item filter-${item.category}">
                <div class="portfolio-wrap">
                    <img src="${item.imgSrc}" class="img-fluid" alt="${item.title}">
                    <div class="portfolio-info">
                        <h4>${item.title}</h4>
                        <div class="portfolio-links">
                            <a href="${item.imgSrc}" data-gallery="portfolioGallery" class="portfolio-lightbox"><i class="bx bx-plus"></i></a>
                            <a href="portfolio-details.html?id=${item.id}" title="Más detalles"><i class="bx bx-link"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        });

        // Insertar el HTML generado en el contenedor del portafolio
        portfolioContainer.innerHTML = portfolioHTML;
    } else {
        console.error('El contenedor .portfolio-container no se encontró en el DOM.');
    }
});