// Projects page functionality
document.addEventListener("DOMContentLoaded", function () {
  // Animate project items
  animateProjectItems();

  // Add interactive hover effects
  addProjectHoverEffects();

  // Setup project filtering (if needed in future)
  setupProjectFiltering();
});

function animateProjectItems() {
  const title = document.querySelector(".section h1");
  const projectItems = document.querySelectorAll(".section ul li");

  if (title) {
    title.style.opacity = "0";
    title.style.transform = "translateY(-30px)";
    title.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    setTimeout(() => {
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
    }, 200);
  }

  projectItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px) rotateX(15deg)";
    item.style.transition = `opacity 0.6s ease ${
      0.4 + index * 0.2
    }s, transform 0.6s ease ${0.4 + index * 0.2}s`;

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0) rotateX(0deg)";
    }, 400 + index * 200);
  });
}

function addProjectHoverEffects() {
  const projectItems = document.querySelectorAll(".section ul li");

  projectItems.forEach((item) => {
    item.style.cursor = "pointer";
    item.style.padding = "15px";
    item.style.margin = "10px 0";
    item.style.borderRadius = "8px";
    item.style.transition = "all 0.3s ease";

    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) scale(1.02)";
      this.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
      this.style.backgroundColor = "#f8f9fa";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "none";
      this.style.backgroundColor = "transparent";
    });

    // Add click effect
    item.addEventListener("click", function () {
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "translateY(-5px) scale(1.02)";
      }, 150);
    });
  });
}

function setupProjectFiltering() {
  // Future enhancement: Add project categories and filtering
  const projects = document.querySelectorAll(".section ul li");

  // Add data attributes for future filtering
  projects.forEach((project, index) => {
    switch (index) {
      case 0:
        project.setAttribute("data-category", "algorithm");
        project.setAttribute("data-tech", "javascript");
        break;
      case 1:
        project.setAttribute("data-category", "machine-learning");
        project.setAttribute("data-tech", "python");
        break;
      case 2:
        project.setAttribute("data-category", "web-application");
        project.setAttribute("data-tech", "php");
        break;
    }
  });
}

// Future function for project filtering
function filterProjects(category) {
  const projects = document.querySelectorAll(".section ul li");

  projects.forEach((project) => {
    const projectCategory = project.getAttribute("data-category");

    if (category === "all" || projectCategory === category) {
      project.style.display = "list-item";
      project.style.animation = "fadeIn 0.5s ease";
    } else {
      project.style.display = "none";
    }
  });
}
