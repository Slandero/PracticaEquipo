document.addEventListener('DOMContentLoaded', () => {
    
    const botonesComprar = document.querySelectorAll('.btn-add');

    if (botonesComprar.length === 0) {
        console.warn("No se encontraron botones con la clase .btn-add");
    }

    botonesComprar.forEach(boton => {
        boton.addEventListener('click', () => {
    
            const cardContent = boton.closest('.card-content');
            const producto = cardContent.querySelector('h3').innerText;
            
    
            alert(`${producto} - agregado al carrito con exito`);
            
            console.log(`Producto detectado: ${producto}`);
        });
    });
});