formCompra.addEventListener('submit', function(event) {
    event.preventDefault();
    const producto = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;

    const datos = {
        producto: producto,
        cantidad: cantidad
    };

    fetch('guardar_compra.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert(data.message); // Mostrar mensaje de respuesta
        menuCompra.classList.add('oculto');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
