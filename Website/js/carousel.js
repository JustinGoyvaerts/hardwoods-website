document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let currentImageIndex = 0;
  
    function slideCarousel() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      carousel.style.transform = `translateX(-${currentImageIndex * 100}%)`;
    }
  
    setInterval(slideCarousel, 10000);
  });
  