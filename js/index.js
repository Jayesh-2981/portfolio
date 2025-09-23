// Home page functionality
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  // Animate hero section on load
  animateHeroSection();

  // Add hover effects to buttons
  addButtonHoverEffects();

  // Typing animation for the name
  startTypingAnimation();
});

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

function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
