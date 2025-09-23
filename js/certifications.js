// Certifications page functionality
document.addEventListener("DOMContentLoaded", function () {
  // Animate certification items
  animateCertifications();

  // Add interactive hover effects
  addCertificationHoverEffects();

  // Setup certification timeline
  setupCertificationTimeline();

  // Add certification badges
  addCertificationBadges();
});

function animateCertifications() {
  const title = document.querySelector(".section h1");
  const certificationItems = document.querySelectorAll(".section ul li");

  if (title) {
    title.style.opacity = "0";
    title.style.transform = "translateY(-20px)";
    title.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    setTimeout(() => {
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
    }, 200);
  }

  certificationItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-40px) rotateY(15deg)";
    item.style.transition = `opacity 0.6s ease ${
      0.3 + index * 0.15
    }s, transform 0.6s ease ${0.3 + index * 0.15}s`;

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateX(0) rotateY(0deg)";
    }, 300 + index * 150);
  });
}

function addCertificationHoverEffects() {
  const certificationItems = document.querySelectorAll(".section ul li");

  certificationItems.forEach((item) => {
    item.style.cursor = "pointer";
    item.style.padding = "15px";
    item.style.margin = "12px 0";
    item.style.borderRadius = "8px";
    item.style.border = "2px solid transparent";
    item.style.transition = "all 0.3s ease";
    item.style.position = "relative";

    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(10px) scale(1.03)";
      this.style.backgroundColor = "#f8f9ff";
      this.style.border = "2px solid #007bff";
      this.style.boxShadow = "0 8px 20px rgba(0,123,255,0.15)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0) scale(1)";
      this.style.backgroundColor = "transparent";
      this.style.border = "2px solid transparent";
      this.style.boxShadow = "none";
    });
  });
}

function setupCertificationTimeline() {
  const certificationList = document.querySelector(".section ul");
  if (certificationList) {
    certificationList.style.position = "relative";
    certificationList.style.paddingLeft = "40px";

    // Create timeline line
    const timelineLine = document.createElement("div");
    timelineLine.style.position = "absolute";
    timelineLine.style.left = "20px";
    timelineLine.style.top = "0";
    timelineLine.style.bottom = "0";
    timelineLine.style.width = "3px";
    timelineLine.style.background =
      "linear-gradient(to bottom, #007bff, #28a745)";
    timelineLine.style.borderRadius = "2px";
    certificationList.appendChild(timelineLine);

    // Add timeline dots for each certification
    const items = document.querySelectorAll(".section ul li");
    items.forEach((item, index) => {
      const dot = document.createElement("div");
      dot.style.position = "absolute";
      dot.style.left = "-30px";
      dot.style.top = "15px";
      dot.style.width = "12px";
      dot.style.height = "12px";
      dot.style.backgroundColor = index % 2 === 0 ? "#007bff" : "#28a745";
      dot.style.borderRadius = "50%";
      dot.style.border = "3px solid white";
      dot.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
      dot.style.zIndex = "2";
      item.style.position = "relative";
      item.appendChild(dot);
    });
  }
}

function addCertificationBadges() {
  const certifications = document.querySelectorAll(".section ul li");

  certifications.forEach((cert, index) => {
    const badge = document.createElement("span");
    badge.style.display = "inline-block";
    badge.style.padding = "4px 8px";
    badge.style.fontSize = "0.75em";
    badge.style.borderRadius = "12px";
    badge.style.marginLeft = "10px";
    badge.style.fontWeight = "bold";
    badge.style.textTransform = "uppercase";

    // Assign different badge types
    switch (index) {
      case 0:
        badge.textContent = "Full Stack";
        badge.style.backgroundColor = "#28a745";
        badge.style.color = "white";
        break;
      case 1:
        badge.textContent = "Web Dev";
        badge.style.backgroundColor = "#007bff";
        badge.style.color = "white";
        break;
      case 2:
        badge.textContent = "Python";
        badge.style.backgroundColor = "#ffc107";
        badge.style.color = "black";
        break;
      case 3:
        badge.textContent = "Programming";
        badge.style.backgroundColor = "#dc3545";
        badge.style.color = "white";
        break;
      default:
        badge.textContent = "Certified";
        badge.style.backgroundColor = "#6c757d";
        badge.style.color = "white";
    }

    cert.appendChild(badge);
  });
}
