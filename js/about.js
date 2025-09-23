// About page functionality
document.addEventListener("DOMContentLoaded", function () {
  // Animate content on page load
  animateAboutContent();

  // Add scroll animations
  setupScrollAnimations();

  // Highlight active navigation
  highlightActiveNav();
});

function animateAboutContent() {
  const section = document.querySelector(".section");
  const title = document.querySelector(".section h1");
  const paragraph = document.querySelector(".section p");

  if (section) {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, 200);
  }

  if (title) {
    title.style.opacity = "0";
    title.style.transform = "translateX(-30px)";
    title.style.transition = "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s";

    setTimeout(() => {
      title.style.opacity = "1";
      title.style.transform = "translateX(0)";
    }, 300);
  }

  if (paragraph) {
    paragraph.style.opacity = "0";
    paragraph.style.transform = "translateX(30px)";
    paragraph.style.transition =
      "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s";

    setTimeout(() => {
      paragraph.style.opacity = "1";
      paragraph.style.transform = "translateX(0)";
    }, 500);
  }
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
}

function highlightActiveNav() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}
