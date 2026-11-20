const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
const prevBtn = document.querySelector('.btnprev');
const nextBtn = document.querySelector('.btnnext');

let currentIndex = 0;
let interval;

// Criar os pontos (dots)
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
  slides[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');

  currentIndex = (index + slides.length) % slides.length;

  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}

function prevSlide() {
  goToSlide(currentIndex - 1);
}

// Controles manuais
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Autoplay
function startAutoplay() {
  interval = setInterval(nextSlide, 4000);
}

function stopAutoplay() {
  clearInterval(interval);
}

// Pausar ao passar o mouse
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', stopAutoplay);
carousel.addEventListener('mouseleave', startAutoplay);

// Iniciar
startAutoplay();