// === Alternar abas de notícias (Brasil, Europa, Internacional) ===
function showTab(tabName, event) {
  // Esconder todas as seções de notícias
  const sections = document.querySelectorAll('.noticias');
  sections.forEach(sec => sec.style.display = 'none');

  // Remover classe 'active' de todas as abas
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Mostrar apenas a aba selecionada
  document.getElementById(tabName).style.display = 'block';
  event.currentTarget.classList.add('active');
}

// === CARROSSEL AUTOMÁTICO ===
let slides = document.querySelectorAll('.news-slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.display = (i === index) ? 'block' : 'none';
  });
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Mostrar o primeiro slide
showSlide(currentSlide);

// Trocar automaticamente a cada 6 segundos
setInterval(nextSlide, 5000);

