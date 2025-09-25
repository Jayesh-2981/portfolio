// About page functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize page animations and interactions
  animateAboutContent();
  setupScrollAnimations();
  highlightActiveNav();
  initializeStats();
  setupInteractiveElements();
});

function animateAboutContent() {
  const section = document.querySelector(".about-intro");
  const title = document.querySelector(".about-intro h1");
  const introText = document.querySelector(".highlight-intro");
  const detailSections = document.querySelectorAll(".detail-section");

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

  if (introText) {
    introText.style.opacity = "0";
    introText.style.transform = "translateY(20px)";
    introText.style.transition = "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s";

    setTimeout(() => {
      introText.style.opacity = "1";
      introText.style.transform = "translateY(0)";
    }, 500);
  }

  // Animate detail sections with stagger effect
  detailSections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateX(30px)";
    section.style.transition = `opacity 0.6s ease ${0.7 + (index * 0.1)}s, transform 0.6s ease ${0.7 + (index * 0.1)}s`;

    setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateX(0)";
    }, 700 + (index * 100));
  });
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          
          // Trigger stats animation when stats section comes into view
          if (entry.target.classList.contains("stats-section")) {
            animateStats();
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });

  // Observe detail sections for fade-in effects
  document.querySelectorAll(".detail-section").forEach((section) => {
    observer.observe(section);
  });
}

function initializeStats() {
  const statNumbers = document.querySelectorAll(".stat-number");
  
  statNumbers.forEach((stat) => {
    stat.style.opacity = "0";
    stat.style.transform = "scale(0.5)";
    stat.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });
}

function animateStats() {
  const statItems = document.querySelectorAll(".stat-item");
  const statNumbers = document.querySelectorAll(".stat-number");
  
  statItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.transform = "translateY(0)";
      item.style.opacity = "1";
      
      const numberElement = item.querySelector(".stat-number");
      if (numberElement) {
        numberElement.style.opacity = "1";
        numberElement.style.transform = "scale(1)";
        
        // Add pulse effect for emphasis
        setTimeout(() => {
          numberElement.style.animation = "pulse 0.6s ease";
        }, 200);
      }
    }, index * 150);
  });
}

function setupInteractiveElements() {
  // Add hover effects to detail sections
  const detailSections = document.querySelectorAll(".detail-section");
  
  detailSections.forEach((section) => {
    section.addEventListener("mouseenter", function() {
      this.style.transform = "translateX(10px)";
      this.style.transition = "transform 0.3s ease";
    });
    
    section.addEventListener("mouseleave", function() {
      this.style.transform = "translateX(0)";
    });
  });

  // Add interactive hover effect to stats
  const statItems = document.querySelectorAll(".stat-item");
  
  statItems.forEach((item) => {
    item.addEventListener("mouseenter", function() {
      this.style.transform = "scale(1.05)";
      this.style.transition = "transform 0.3s ease";
    });
    
    item.addEventListener("mouseleave", function() {
      this.style.transform = "scale(1)";
    });
  });
}

function highlightActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (linkHref === currentPage || 
        (currentPage === "" && linkHref === "index.html") ||
        (currentPage === "about.html" && linkHref === "about.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Add CSS animations through JavaScript
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  
  .stat-item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .detail-section {
    cursor: pointer;
    border-left: 3px solid transparent;
    padding-left: 20px;
    transition: border-color 0.3s ease;
  }
  
  .detail-section:hover {
    border-left-color: #007bff;
  }
`;
document.head.appendChild(style);
