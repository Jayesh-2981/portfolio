// Experience page functionality
document.addEventListener("DOMContentLoaded", function () {
  // Animate experience items
  animateExperienceItems();

  // Add hover effects to experience list items
  addExperienceHoverEffects();

  // Setup timeline animation
  setupTimelineAnimation();
});

function animateExperienceItems() {
  const title = document.querySelector(".section h1");
  const experienceItems = document.querySelectorAll(".section ul li");

  if (title) {
    title.style.opacity = "0";
    title.style.transform = "translateY(-20px)";
    title.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    setTimeout(() => {
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
    }, 200);
  }

  experienceItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-50px)";
    item.style.transition = `opacity 0.6s ease ${
      0.3 + index * 0.2
    }s, transform 0.6s ease ${0.3 + index * 0.2}s`;

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateX(0)";
    }, 300 + index * 200);
  });
}

function addExperienceHoverEffects() {
  const experienceItems = document.querySelectorAll(".section ul li");

  experienceItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(10px) scale(1.02)";
      this.style.transition = "transform 0.3s ease";
      this.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0) scale(1)";
      this.style.boxShadow = "none";
    });
  });
}

function setupTimelineAnimation() {
  // Add timeline indicator
  const experienceList = document.querySelector(".section ul");
  if (experienceList) {
    experienceList.style.position = "relative";
    experienceList.style.paddingLeft = "30px";

    // Create timeline line
    const timelineLine = document.createElement("div");
    timelineLine.style.position = "absolute";
    timelineLine.style.left = "15px";
    timelineLine.style.top = "0";
    timelineLine.style.bottom = "0";
    timelineLine.style.width = "2px";
    timelineLine.style.backgroundColor = "#007bff";
    timelineLine.style.opacity = "0.3";
    experienceList.appendChild(timelineLine);

    // Add timeline dots
    const items = document.querySelectorAll(".section ul li");
    items.forEach((item) => {
      const dot = document.createElement("div");
      dot.style.position = "absolute";
      dot.style.left = "-25px";
      dot.style.top = "10px";
      dot.style.width = "10px";
      dot.style.height = "10px";
      dot.style.backgroundColor = "#007bff";
      dot.style.borderRadius = "50%";
      dot.style.zIndex = "1";
      item.style.position = "relative";
      item.appendChild(dot);
    });
  }
}
