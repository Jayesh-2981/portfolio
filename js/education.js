// Education page functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize education page
  animateEducationContent();
  highlightActiveNav();
});

function animateEducationContent() {
  const title = document.querySelector(".section h1");
  const educationItems = document.querySelectorAll(".education-item");

  // Animate title
  if (title) {
    title.style.opacity = "0";
    title.style.transform = "translateY(-30px)";
    title.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    setTimeout(() => {
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
    }, 200);
  }

  // Animate education items with stagger effect
  educationItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px) scale(0.95)";
    item.style.transition = `opacity 0.6s ease ${0.3 + index * 0.2}s, transform 0.6s ease ${0.3 + index * 0.2}s`;

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0) scale(1)";
    }, 300 + index * 200);
  });
}

function highlightActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (linkHref === currentPage || 
        (currentPage === "education.html" && linkHref === "education.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
