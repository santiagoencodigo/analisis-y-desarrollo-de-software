// Inicializar toasts
const toastSuccess = new bootstrap.Toast(document.getElementById('toastSuccess'));
const toastError = new bootstrap.Toast(document.getElementById('toastError'));
const toastErrorMessage = document.getElementById('toastErrorMessage');

// Manejar clicks en botones "Agregar al carrito"
document.querySelectorAll('.add-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const producto = this.getAttribute('data-producto');
        const stock = parseInt(this.getAttribute('data-stock'));
        
        if (stock > 0) {
            // Producto disponible - mostramos toast de éxito
            toastSuccess.show();
        } else {
            // Sin stock - mostramos toast de error
            toastErrorMessage.textContent = `Stock insuficiente para: ${producto}`;
            toastError.show();
        }
    });
});