document.addEventListener('DOMContentLoaded', () => {
    const carrito = [];
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const producto = button.closest('.producto');
            const id = producto.getAttribute('data-id');
            const nombre = producto.querySelector('h3').textContent;
            const precio = producto.querySelector('p').textContent;
            
            carrito.push({ id, nombre, precio });
            actualizarCarrito();
        });
    });

    document.getElementById('comprar').addEventListener('click', () => {
        alert('Gracias por su compra!');
        carrito.length = 0; // Vaciar el carrito
        actualizarCarrito();
    });

    function actualizarCarrito() {
        const listaCarrito = document.getElementById('lista-carrito');
        listaCarrito.innerHTML = '';
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - ${item.precio}`;
            listaCarrito.appendChild(li);
        });
    }
});