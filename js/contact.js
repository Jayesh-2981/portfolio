document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("clientemail").value;
  const phone = document.getElementById("clientphone").value;
  const isClient = document.getElementById("isclient").checked;

  let msg = `Thanks for reaching out, ${email}! `;
  if (isClient) {
    msg += "Excited to collaborate on your project. 🚀";
  } else {
    msg += "I’ll get back to you soon.";
  }

  document.getElementById("formMsg").innerText = msg;
  document.getElementById("contactForm").reset();
});
