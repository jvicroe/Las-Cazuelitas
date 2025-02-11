// Modo oscuro/claro
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Función para cambiar el modo
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('bi-moon');
        themeIcon.classList.add('bi-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('bi-sun');
        themeIcon.classList.add('bi-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Verificar el tema guardado en localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.remove('bi-moon');
    themeIcon.classList.add('bi-sun');
} else {
    body.classList.remove('dark-mode');
    themeIcon.classList.remove('bi-sun');
    themeIcon.classList.add('bi-moon');
}

// Evento para el botón de modo oscuro/claro
themeToggle.addEventListener('click', toggleDarkMode);

// Inicialización del carrusel
const myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleAutoplay'), {
    interval: 3000, // Cambia cada 3 segundos
    wrap: true // Permite que el carrusel vuelva al inicio después de la última imagen
});