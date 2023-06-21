window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var firstSection = document.getElementById('splash');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var sectionTop = firstSection.offsetTop;
    
    // Define the initial and target opacity for the navbar
    var initialNavbarOpacity = 0; // Initial opacity of the navbar
    var targetNavbarOpacity = 1;  // Target opacity of the navbar
  
    // Calculate the new opacity based on the scroll position within the first section
    var newNavbarOpacity = initialNavbarOpacity + Math.min(1, scrollTop / sectionTop) * (targetNavbarOpacity - initialNavbarOpacity);
  
  // Apply the new opacity to the navbar
  navbar.style.opacity = newNavbarOpacity;

    // Apply the new opacity to the navbar
    if (newNavbarOpacity === targetNavbarOpacity) {
      navbar.classList.remove('hidden');
    } else {
      navbar.classList.add('hidden');
    }
  });
  