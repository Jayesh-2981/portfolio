// Contact page functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize contact page
  initializeContactPage();
  setupFormValidation();
  setupFormSubmission();
  setupCustomInquiryToggle(); // NEW: Handle custom inquiry type
  addAnimations();
  highlightActiveNav();
});

function setupCustomInquiryToggle() {
  const inquiryTypeSelect = document.getElementById("inquiryType");
  const customInquiryGroup = document.getElementById("customInquiryGroup");
  const customInquiryInput = document.getElementById("customInquiryType");

  inquiryTypeSelect.addEventListener("change", function() {
    if (this.value === "other") {
      customInquiryGroup.style.display = "block";
      customInquiryInput.required = true;
      // Smooth reveal animation
      customInquiryGroup.style.opacity = "0";
      customInquiryGroup.style.transform = "translateY(-10px)";
      customInquiryGroup.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      
      setTimeout(() => {
        customInquiryGroup.style.opacity = "1";
        customInquiryGroup.style.transform = "translateY(0)";
      }, 10);
    } else {
      customInquiryGroup.style.display = "none";
      customInquiryInput.required = false;
      customInquiryInput.value = ""; // Clear the field
      clearFieldError(customInquiryInput); // Clear any errors
    }
  });
}

function initializeContactPage() {
  // Add loading states and interactive elements
  const contactCards = document.querySelectorAll(".contact-card");
  const quickActionBtns = document.querySelectorAll(".quick-action-btn");

  // Animate contact cards on load
  contactCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 200 + (index * 100));
  });

  // Add hover effects to quick action buttons
  quickActionBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      // Add click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });
}

function setupFormValidation() {
  const form = document.getElementById("contactForm");
  const inputs = form.querySelectorAll("input, select, textarea");

  inputs.forEach(input => {
    input.addEventListener("blur", validateField);
    input.addEventListener("input", clearErrors);
  });

  function validateField(e) {
    const field = e.target;
    const fieldName = field.name;
    const value = field.value.trim();
    
    clearFieldError(field);

    switch (fieldName) {
      case "clientName":
        if (!value) {
          showFieldError(field, "Name is required");
          return false;
        }
        if (value.length < 2) {
          showFieldError(field, "Name must be at least 2 characters");
          return false;
        }
        break;

      case "clientEmail":
        if (!value) {
          showFieldError(field, "Email is required");
          return false;
        }
        if (!isValidEmail(value)) {
          showFieldError(field, "Please enter a valid email address");
          return false;
        }
        break;

      case "clientPhone":
        if (value && !isValidPhone(value)) {
          showFieldError(field, "Please enter a valid phone number");
          return false;
        }
        break;

      case "inquiryType":
        if (!value) {
          showFieldError(field, "Please select an inquiry type");
          return false;
        }
        break;

      case "customInquiryType":
        const inquiryType = document.getElementById("inquiryType").value;
        if (inquiryType === "other" && !value) {
          showFieldError(field, "Please specify your inquiry type");
          return false;
        }
        if (inquiryType === "other" && value.length < 3) {
          showFieldError(field, "Inquiry type must be at least 3 characters");
          return false;
        }
        break;

      case "clientMessage":
        if (!value) {
          showFieldError(field, "Message is required");
          return false;
        }
        if (value.length < 10) {
          showFieldError(field, "Message must be at least 10 characters");
          return false;
        }
        break;

      case "privacyConsent":
        if (!field.checked) {
          showFieldError(field, "Privacy consent is required");
          return false;
        }
        break;
    }
    
    // Add success styling
    field.style.borderColor = "#28a745";
    return true;
  }

  function clearErrors() {
    this.style.borderColor = "#e1e5e9";
    clearFieldError(this);
  }

  function showFieldError(field, message) {
    field.style.borderColor = "#dc3545";
    const errorMappings = {
      "clientName": "nameError",
      "clientEmail": "emailError", 
      "clientPhone": "phoneError",
      "inquiryType": "inquiryError",
      "customInquiryType": "customInquiryError",
      "clientMessage": "messageError",
      "privacyConsent": "consentError"
    };
    
    const errorElement = document.getElementById(errorMappings[field.name]);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = "block";
    }
  }

  function clearFieldError(field) {
    const errorMappings = {
      "clientName": "nameError",
      "clientEmail": "emailError",
      "clientPhone": "phoneError", 
      "inquiryType": "inquiryError",
      "customInquiryType": "customInquiryError",
      "clientMessage": "messageError",
      "privacyConsent": "consentError"
    };
    
    const errorElement = document.getElementById(errorMappings[field.name]);
    if (errorElement) {
      errorElement.textContent = "";
      errorElement.style.display = "none";
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPhone(phone) {
    return /^[\d\s\-\+\(\)]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10;
  }
}

function setupFormSubmission() {
  const form = document.getElementById("contactForm");
  const submitBtn = form.querySelector(".submit-btn");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    const requiredFields = form.querySelectorAll("[required]");
    
    requiredFields.forEach(field => {
      const event = new Event('blur');
      field.dispatchEvent(event);
      if (field.style.borderColor === "rgb(220, 53, 69)" || !field.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      showFormMessage("Please fix the errors above before submitting.", "error");
      return;
    }

    // Show loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
    submitBtn.disabled = true;

    // Collect form data
    const inquiryType = form.inquiryType.value;
    const finalInquiryType = inquiryType === "other" ? form.customInquiryType.value : inquiryType;
    
    const formData = {
      name: form.clientName.value,
      email: form.clientEmail.value,
      phone: form.clientPhone.value || "Not provided",
      company: form.clientCompany.value || "Not provided",
      inquiryType: finalInquiryType,
      message: form.clientMessage.value,
      timestamp: new Date().toISOString()
    };

    try {
      // Simulate form submission (replace with actual endpoint)
      await simulateFormSubmission(formData);
      
      // Show success message
      showFormMessage(`Thank you, ${formData.name}! Your message has been sent successfully. I'll get back to you soon regarding your ${getInquiryTypeLabel(formData.inquiryType)}.`, "success");
      
      // Reset form
      form.reset();
      
      // Hide custom inquiry field on reset
      document.getElementById("customInquiryGroup").style.display = "none";
      document.getElementById("customInquiryType").required = false;
      
      // Create mailto link as fallback
      createMailtoLink(formData);
      
    } catch (error) {
      console.error("Form submission error:", error);
      showFormMessage("There was an error sending your message. Please try again or contact me directly via email or phone.", "error");
    } finally {
      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });

  function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success (replace with actual API call)
        resolve(data);
      }, 2000);
    });
  }

  function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = "block";
    
    // Auto-hide success messages
    if (type === "success") {
      setTimeout(() => {
        formMessage.style.display = "none";
      }, 8000);
    }
  }

  function getInquiryTypeLabel(type) {
    const labels = {
      "job-opportunity": "job opportunity inquiry",
      "interview-request": "interview request", 
      "freelance-work": "freelance work inquiry",
      "collaboration": "collaboration proposal",
      "networking": "networking request"
    };
    return labels[type] || type.toLowerCase();
  }

  function createMailtoLink(data) {
    const subject = encodeURIComponent(`${getInquiryTypeLabel(data.inquiryType)} - ${data.name}`);
    const body = encodeURIComponent(`Hello Jayesh,

${data.message}

Contact Details:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company}
Inquiry Type: ${data.inquiryType}

Best regards,
${data.name}`);

    const mailtoLink = `mailto:jadhavjayesh949@gmail.com?subject=${subject}&body=${body}`;
    
    // Open mailto link after a short delay
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 2000);
  }
}

function addAnimations() {
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe sections for animation
  document.querySelectorAll(".contact-form-section, .quick-actions-section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(section);
  });
}

function highlightActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (linkHref === currentPage || 
        (currentPage === "contact.html" && linkHref === "contact.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
