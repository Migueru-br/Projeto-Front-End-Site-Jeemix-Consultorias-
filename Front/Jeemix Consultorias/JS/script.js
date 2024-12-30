let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carrosel img');
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

showSlide(slideIndex);

setInterval(() => {
    nextSlide();
}, 5000);


document.addEventListener("DOMContentLoaded", function() {
  const parceiros = document.querySelectorAll('.parceiro');
  
  parceiros.forEach((parceiro, index) => {
      setTimeout(() => {
          parceiro.style.opacity = 1;
          parceiro.style.transform = 'translateY(0)';
      }, index * 500);
  });
});