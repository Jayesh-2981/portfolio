// Skills page functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize mobile menu
  initializeMobileMenu();
  
  // Animate skills content
  animateSkillsContent();

  // Add interactive hover effects
  addSkillInteractivity();

  // Highlight active nav
  highlightActiveNav();
});

function initializeMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  const navLinks = document.querySelectorAll('.sidebar nav a');

  if (!mobileToggle) return;

  // Toggle mobile menu
  mobileToggle.addEventListener('click', function() {
    const isActive = this.classList.contains('active');
    
    if (isActive) {
      closeMobileMenu();
    } else {
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

function animateSkillsContent() {
  const title = document.querySelector(".section h1");
  const skillItems = document.querySelectorAll(".skill-item");

  if (title) {
    title.style.opacity = "0";
    title.style.transform = "translateY(-30px)";
    title.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    setTimeout(() => {
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
    }, 200);
  }

  skillItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px) scale(0.95)";
    item.style.transition = `opacity 0.6s ease ${0.3 + index * 0.15}s, transform 0.6s ease ${0.3 + index * 0.15}s`;

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0) scale(1)";
    }, 300 + index * 150);
  });
}

function addSkillInteractivity() {
  const skillItems = document.querySelectorAll('.skill-item');
  
  skillItems.forEach((item) => {
    item.addEventListener('click', function() {
      // Simple click feedback
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
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
        (currentPage === "skills.html" && linkHref === "skills.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
