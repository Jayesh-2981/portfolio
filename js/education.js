// Education page functionality
document.addEventListener("DOMContentLoaded", function () {
  // Animate education content
  animateEducationContent();

  // Add interactive effects
  addEducationInteractivity();

  // Calculate and display years since graduation
  displayGraduationInfo();
});

function animateEducationContent() {
  const section = document.querySelector(".section");
  const title = document.querySelector(".section h1");
  const educationInfo = document.querySelector(".section p");

  if (section) {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, 300);
  }

  if (title) {
    title.style.opacity = "0";
    title.style.transform = "scale(0.8)";
    title.style.transition = "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s";

    setTimeout(() => {
      title.style.opacity = "1";
      title.style.transform = "scale(1)";
    }, 400);
  }

  if (educationInfo) {
    educationInfo.style.opacity = "0";
    educationInfo.style.transform = "translateX(-30px)";
    educationInfo.style.transition =
      "opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s";

    setTimeout(() => {
      educationInfo.style.opacity = "1";
      educationInfo.style.transform = "translateX(0)";
    }, 600);
  }
}

function addEducationInteractivity() {
  const educationInfo = document.querySelector(".section p");

  if (educationInfo) {
    educationInfo.style.cursor = "pointer";
    educationInfo.style.padding = "20px";
    educationInfo.style.borderRadius = "10px";
    educationInfo.style.transition = "all 0.3s ease";

    educationInfo.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#f0f8ff";
      this.style.transform = "scale(1.02)";
      this.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    });

    educationInfo.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "transparent";
      this.style.transform = "scale(1)";
      this.style.boxShadow = "none";
    });
  }
}

function displayGraduationInfo() {
  const educationInfo = document.querySelector(".section p");

  if (educationInfo) {
    const graduationYear = 2023;
    const currentYear = new Date().getFullYear();
    const yearsSinceGraduation = currentYear - graduationYear;

    // Create additional info element
    const additionalInfo = document.createElement("div");
    additionalInfo.style.marginTop = "15px";
    additionalInfo.style.fontSize = "0.9em";
    additionalInfo.style.color = "#666";
    additionalInfo.style.fontStyle = "italic";

    if (yearsSinceGraduation === 0) {
      additionalInfo.textContent = "Recent Graduate";
    } else if (yearsSinceGraduation === 1) {
      additionalInfo.textContent =
        "1 year of professional experience since graduation";
    } else {
      additionalInfo.textContent = `${yearsSinceGraduation} years of professional experience since graduation`;
    }

    educationInfo.parentNode.appendChild(additionalInfo);

    // Animate the additional info
    additionalInfo.style.opacity = "0";
    additionalInfo.style.transform = "translateY(10px)";
    additionalInfo.style.transition =
      "opacity 0.5s ease 1s, transform 0.5s ease 1s";

    setTimeout(() => {
      additionalInfo.style.opacity = "1";
      additionalInfo.style.transform = "translateY(0)";
    }, 1000);
  }
}
