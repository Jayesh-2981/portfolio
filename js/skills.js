// Skills page functionality
document.addEventListener("DOMContentLoaded", function () {
  // Animate skills content
  animateSkillsContent();

  // Create skill progress bars
  createSkillProgressBars();

  // Add interactive hover effects
  addSkillHoverEffects();

  // Setup skill categories animation
  setupSkillCategoriesAnimation();
});

function animateSkillsContent() {
  const title = document.querySelector(".section h1");
  const skillCategories = document.querySelectorAll(".section p");

  if (title) {
    title.style.opacity = "0";
    title.style.transform = "scale(0.5)";
    title.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    setTimeout(() => {
      title.style.opacity = "1";
      title.style.transform = "scale(1)";
    }, 200);
  }

  skillCategories.forEach((category, index) => {
    category.style.opacity = "0";
    category.style.transform = "translateY(30px)";
    category.style.transition = `opacity 0.6s ease ${
      0.4 + index * 0.2
    }s, transform 0.6s ease ${0.4 + index * 0.2}s`;

    setTimeout(() => {
      category.style.opacity = "1";
      category.style.transform = "translateY(0)";
    }, 400 + index * 200);
  });
}

function createSkillProgressBars() {
  const skillCategories = document.querySelectorAll(".section p");

  // Define skill proficiency levels (out of 100)
  const skillLevels = {
    HTML5: 90,
    CSS3: 85,
    JavaScript: 80,
    "React.js": 75,
    Java: 85,
    MySQL: 80,
    PostgreSQL: 75,
    "VS Code": 95,
    "Eclipse IDE": 70,
  };

  skillCategories.forEach((category) => {
    const categoryText = category.innerHTML;
    const skills = categoryText.split(": ")[1];

    if (skills) {
      const skillArray = skills.split(", ");
      const progressContainer = document.createElement("div");
      progressContainer.style.marginTop = "15px";

      skillArray.forEach((skill) => {
        const skillName = skill.trim();
        const proficiency = skillLevels[skillName] || 70;

        // Create skill item container
        const skillItem = document.createElement("div");
        skillItem.style.marginBottom = "10px";
        skillItem.style.padding = "5px 0";

        // Create skill name and percentage
        const skillHeader = document.createElement("div");
        skillHeader.style.display = "flex";
        skillHeader.style.justifyContent = "space-between";
        skillHeader.style.fontSize = "0.9em";
        skillHeader.style.marginBottom = "5px";
        skillHeader.innerHTML = `<span>${skillName}</span><span>${proficiency}%</span>`;

        // Create progress bar container
        const progressBar = document.createElement("div");
        progressBar.style.width = "100%";
        progressBar.style.height = "8px";
        progressBar.style.backgroundColor = "#e0e0e0";
        progressBar.style.borderRadius = "4px";
        progressBar.style.overflow = "hidden";

        // Create progress fill
        const progressFill = document.createElement("div");
        progressFill.style.height = "100%";
        progressFill.style.backgroundColor = getSkillColor(proficiency);
        progressFill.style.width = "0%";
        progressFill.style.borderRadius = "4px";
        progressFill.style.transition = "width 1.5s ease-in-out";

        progressBar.appendChild(progressFill);
        skillItem.appendChild(skillHeader);
        skillItem.appendChild(progressBar);
        progressContainer.appendChild(skillItem);

        // Animate progress bar
        setTimeout(() => {
          progressFill.style.width = `${proficiency}%`;
        }, 800 + Math.random() * 500);
      });

      category.parentNode.insertBefore(progressContainer, category.nextSibling);
    }
  });
}

function getSkillColor(proficiency) {
  if (proficiency >= 85) return "#28a745"; // Green
  else if (proficiency >= 75) return "#007bff"; // Blue
  else if (proficiency >= 65) return "#ffc107"; // Yellow
  else return "#dc3545"; // Red
}

function addSkillHoverEffects() {
  setTimeout(() => {
    const progressBars = document.querySelectorAll(".section div div");

    progressBars.forEach((bar) => {
      if (bar.style.backgroundColor) {
        // Only target progress bars
        bar.addEventListener("mouseenter", function () {
          this.style.transform = "scale(1.05)";
          this.style.transition = "transform 0.3s ease";
        });

        bar.addEventListener("mouseleave", function () {
          this.style.transform = "scale(1)";
        });
      }
    });
  }, 2000);
}

function setupSkillCategoriesAnimation() {
  const skillCategories = document.querySelectorAll(".section p");

  skillCategories.forEach((category) => {
    category.style.padding = "15px";
    category.style.margin = "10px 0";
    category.style.borderRadius = "8px";
    category.style.transition = "all 0.3s ease";
    category.style.cursor = "pointer";

    category.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#f8f9fa";
      this.style.transform = "translateX(10px)";
      this.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    });

    category.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "transparent";
      this.style.transform = "translateX(0)";
      this.style.boxShadow = "none";
    });
  });
}
