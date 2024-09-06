document.addEventListener('DOMContentLoaded', function() {
    const comprarBtn = document.getElementById('comprarBtn');
    const menuCompra = document.getElementById('menuCompra');
    const cerrarBtn = document.getElementById('cerrarBtn');
    comprarBtn.addEventListener('click', function() {
        menuCompra.classList.remove('oculto');
    });
    cerrarBtn.addEventListener('click', function() {
        menuCompra.classList.add('oculto');
    });
    const formCompra = document.getElementById('formCompra');
    formCompra.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const producto = document.getElementById('producto').value;
        const cantidad = document.getElementById('cantidad').value;
        alert(`Compra confirmada: ${cantidad} de ${producto}`);
        menuCompra.classList.add('oculto'); 
    });
});