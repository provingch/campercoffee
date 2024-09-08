<?php
$data = json_decode(file_get_contents('php://input'), true);

// Verificar que los datos se recibieron correctamente
if (isset($data['producto']) && isset($data['cantidad'])) {
    $producto = $data['producto'];
    $cantidad = $data['cantidad'];

    // Crear el contenido que se va a guardar en el archivo
    $contenido = "Compra confirmada:\nProducto: $producto\nCantidad: $cantidad\n\n";

    // Guardar los datos en un archivo de texto
    file_put_contents('compras.txt', $contenido, FILE_APPEND);

    // Enviar una respuesta de éxito
    echo json_encode(['status' => 'success', 'message' => 'Compra guardada correctamente.']);
} else {
    // Enviar una respuesta de error
    echo json_encode(['status' => 'error', 'message' => 'Datos incompletos.']);
}
?>
