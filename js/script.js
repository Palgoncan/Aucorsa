document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const btnMayores = document.getElementById('mayores');
    const btnJovenes = document.getElementById('jovenes');

    // Función para ocultar el overlay
    const hideOverlay = () => {
        overlay.style.display = 'none';
    };

    // Mostrar overlay al cargar la página
    overlay.style.display = 'flex';

    // Manejar clic en el botón "Mayores"
    btnMayores.addEventListener('click', () => {
        // Aquí puedes agregar la lógica que deseas para el botón "Mayores"
        hideOverlay(); // Ocultar el overlay
        window.location.href = 'index.html'; // Redirigir a la página de mayores
    });

    // Manejar clic en el botón "Jóvenes"
    btnJovenes.addEventListener('click', () => {
        // Aquí puedes agregar la lógica que deseas para el botón "Jóvenes"
        hideOverlay(); // Ocultar el overlay
        window.location.href = 'index2.html'; // Redirigir a la página de jóvenes
    });
});
