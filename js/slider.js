let currentSlide = 0;
const slides = document.querySelectorAll(".slider-image");
const totalSlides = slides.length;

// Función para mostrar el slide actual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

// Función para cambiar de slide
function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1; // Si es el primero, ir al último
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0; // Si es el último, ir al primero
  }
  showSlide(currentSlide);
}

// Cambiar de slide automáticamente cada 5 segundos
setInterval(() => {
  changeSlide(1);
}, 5000);
