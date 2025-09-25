// Experience page functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize experience page
  animateExperienceItems();
  addExperienceInteractivity();
  highlightActiveNav();
});

function animateExperienceItems() {
  const title = document.querySelector(".section h1");
  const experienceItems = document.querySelectorAll(".experience-item");

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

  // Animate experience items with stagger effect
  experienceItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-50px) scale(0.95)";
    item.style.transition = `opacity 0.6s ease ${0.3 + index * 0.2}s, transform 0.6s ease ${0.3 + index * 0.2}s`;

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateX(0) scale(1)";
    }, 300 + index * 200);
  });
}

function addExperienceInteractivity() {
  const experienceItems = document.querySelectorAll(".experience-item");
  
  experienceItems.forEach((item) => {
    const techTags = item.querySelectorAll(".tech");
    
    // Add hover effect for tech tags
    techTags.forEach((tech) => {
      tech.addEventListener("mouseenter", function() {
        this.style.transform = "translateY(-2px) scale(1.05)";
        this.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.4)";
      });

      tech.addEventListener("mouseleave", function() {
        this.style.transform = "translateY(0) scale(1)";
        this.style.boxShadow = "0 4px 8px rgba(102, 126, 234, 0.3)";
      });
    });

    // Add click effect for experience cards
    item.addEventListener("click", function() {
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });
}

function highlightActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (linkHref === currentPage || 
        (currentPage === "experience.html" && linkHref === "experience.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
