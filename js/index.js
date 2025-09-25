// Home page functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize mobile menu
  initializeMobileMenu();

  // Animate hero section on load
  animateHeroSection();

  // Add hover effects to buttons
  addButtonHoverEffects();

  // Typing animation for the name
  startTypingAnimation();
});

function initializeMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  const navLinks = document.querySelectorAll('.sidebar nav a');

  // SINGLE BUTTON - Toggle mobile menu
  mobileToggle.addEventListener('click', function() {
    const isActive = this.classList.contains('active');
    
    if (isActive) {
      // Close menu
      closeMobileMenu();
    } else {
      // Open menu
      this.classList.add('active');
      sidebar.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  // Close menu when clicking overlay
  overlay.addEventListener('click', function() {
    closeMobileMenu();
  });

  // Close menu when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        closeMobileMenu();
      }
    });
  });

  function closeMobileMenu() {
    mobileToggle.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });
}

function animateHeroSection() {
  const hero = document.querySelector(".hero");
  const info = document.querySelector(".info");
  const image = document.querySelector(".image");

  if (hero) {
    hero.style.opacity = "0";
    hero.style.transform = "translateY(30px)";
    hero.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    setTimeout(() => {
      hero.style.opacity = "1";
      hero.style.transform = "translateY(0)";
    }, 300);
  }

  if (info) {
    info.style.opacity = "0";
    info.style.transform = "translateX(-50px)";
    info.style.transition = "opacity 1s ease 0.5s, transform 1s ease 0.5s";

    setTimeout(() => {
      info.style.opacity = "1";
      info.style.transform = "translateX(0)";
    }, 500);
  }

  if (image) {
    image.style.opacity = "0";
    image.style.transform = "translateX(50px)";
    image.style.transition = "opacity 1s ease 0.7s, transform 1s ease 0.7s";

    setTimeout(() => {
      image.style.opacity = "1";
      image.style.transform = "translateX(0)";
    }, 700);
  }
}

function addButtonHoverEffects() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
      this.style.transition = "transform 0.3s ease";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
}

function startTypingAnimation() {
  const nameSpan = document.querySelector(".info h1 span");
  if (nameSpan) {
    const originalText = nameSpan.textContent;
    nameSpan.textContent = "";

    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        nameSpan.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    setTimeout(typeWriter, 1000);
  }
}
