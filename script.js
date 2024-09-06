document.addEventListener('DOMContentLoaded', function() {
    // Inicialización del primer Swiper
    var swiper1 = new Swiper(".mySwiper-1", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    // Inicialización del segundo Swiper
    var swiper2 = new Swiper(".mySwiper-2", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            }
        }
    });

    // Manejo del menú de compra
    const comprarBtns = document.querySelectorAll('.comprarBtn');
    const menuCompra = document.getElementById('menuCompra');
    const cerrarBtn = document.getElementById('cerrarBtn');

    // Mostrar el menú de compra al hacer clic en cualquier botón "Comprar"
    comprarBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            menuCompra.classList.remove('oculto');
        });
    });

    // Cerrar el menú de compra
    cerrarBtn.addEventListener('click', function() {
        menuCompra.classList.add('oculto');
    });

    // Manejar el envío del formulario
    const formCompra = document.getElementById('formCompra');
    formCompra.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío real del formulario
        const producto = document.getElementById('producto').value;
        const cantidad = document.getElementById('cantidad').value;
        alert(`Compra confirmada: ${cantidad} de ${producto}`);
        menuCompra.classList.add('oculto'); // Cerrar el menú después de confirmar
    });

    // Manejo de las pestañas (tab inputs)
    let tabInputs = document.querySelectorAll(".tabInput");

    tabInputs.forEach(function(input) {
        input.addEventListener('change', function() {
            let id = input.dataset.tabId; 
            let thisSwiper = document.getElementById('swiper' + id);
            
            if (thisSwiper && thisSwiper.swiper) {
                thisSwiper.swiper.update();
            }
        });
    });
});

