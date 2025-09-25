// Certifications page functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize page animations and interactions
  animateCertifications();
  addCertificationHoverEffects();
  setupCertificationFilters();
  addProgressiveLoading();
  highlightActiveNav();
});

function animateCertifications() {
  const title = document.querySelector(".section h1");
  const certificationCards = document.querySelectorAll(".certification-card");

  if (title) {
    title.style.opacity = "0";
    title.style.transform = "translateY(-30px)";
    title.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    setTimeout(() => {
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
    }, 200);
  }

  // Animate certification cards with stagger effect
  certificationCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px) rotateX(10deg)";
    card.style.transition = `opacity 0.6s ease ${0.3 + index * 0.15}s, transform 0.6s ease ${0.3 + index * 0.15}s`;

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0) rotateX(0deg)";
    }, 300 + index * 150);
  });
}

function addCertificationHoverEffects() {
  const certificationCards = document.querySelectorAll(".certification-card");

  certificationCards.forEach((card) => {
    const skillTags = card.querySelectorAll(".skill-tag");
    const icon = card.querySelector(".cert-icon");
    
    card.addEventListener("mouseenter", function () {
      // Add hover effects to skill tags
      skillTags.forEach((tag, index) => {
        setTimeout(() => {
          tag.style.transform = "translateY(-3px) scale(1.05)";
          tag.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.3)";
        }, index * 50);
      });

      // Icon animation
      if (icon) {
        icon.style.transform = "rotate(5deg) scale(1.1)";
      }
    });

    card.addEventListener("mouseleave", function () {
      // Reset skill tags
      skillTags.forEach((tag) => {
        tag.style.transform = "translateY(0) scale(1)";
        tag.style.boxShadow = "none";
      });

      // Reset icon
      if (icon) {
        icon.style.transform = "rotate(0deg) scale(1)";
      }
    });

    // Add click effect for better interaction
    card.addEventListener("click", function () {
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "scale(1.02)";
      }, 100);
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 200);
    });
  });
}

function setupCertificationFilters() {
  const certificationCards = document.querySelectorAll(".certification-card");
  
  // Add data attributes for filtering (if needed in future)
  certificationCards.forEach((card) => {
    const year = card.getAttribute("data-year");
    const skillTags = card.querySelectorAll(".skill-tag");
    
    // Store skills data for potential filtering
    const skills = Array.from(skillTags).map(tag => tag.textContent.toLowerCase());
    card.setAttribute("data-skills", skills.join(","));
  });
}

function addProgressiveLoading() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          
          // Add special effects for individual elements
          const skillTags = entry.target.querySelectorAll(".skill-tag");
          const certIcon = entry.target.querySelector(".cert-icon");
          
          skillTags.forEach((tag, index) => {
            setTimeout(() => {
              tag.style.opacity = "1";
              tag.style.transform = "translateY(0)";
            }, index * 100);
          });

          if (certIcon) {
            setTimeout(() => {
              certIcon.style.animation = "fadeInScale 0.8s ease forwards";
            }, 200);
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".certification-card").forEach((card) => {
    observer.observe(card);
    
    // Initialize skill tags for animation
    const skillTags = card.querySelectorAll(".skill-tag");
    skillTags.forEach((tag) => {
      tag.style.opacity = "0";
      tag.style.transform = "translateY(20px)";
      tag.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    });
  });
}

function highlightActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (linkHref === currentPage || 
        (currentPage === "certifications.html" && linkHref === "certifications.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Add interactive timeline effect
function addTimelineEffect() {
  const certificationCards = document.querySelectorAll(".certification-card");
  
  certificationCards.forEach((card, index) => {
    // Add a subtle timeline connection visual effect
    setTimeout(() => {
      card.style.borderLeft = "4px solid transparent";
      card.style.transition = "border-left-color 0.5s ease";
      
      setTimeout(() => {
        card.style.borderLeftColor = "#667eea";
      }, 100);
    }, index * 200);
  });
}

// Initialize timeline effect after DOM load
setTimeout(addTimelineEffect, 1000);

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
