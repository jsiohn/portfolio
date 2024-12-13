// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

emailjs.init("LbQP4KSo2XOvUdYID");

// Contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.sendForm("service_qcvdnqn", "template_8zi3udk", this).then(
      function (response) {
        console.log("Email sent successfully:", response);
        document.getElementById("form-message").innerHTML =
          "Thank you for your message! I will get back to you soon.";
        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.log("Error sending email:", error);
        document.getElementById("form-message").innerHTML =
          "Oops! Something went wrong. Please try again.";
      }
    );

    // Simple validation
    if (name && email && message) {
      document.getElementById("form-message").innerHTML =
        "Thank you for reaching out! I will get back to you soon.";
      document.getElementById("contact-form").reset();
    } else {
      document.getElementById("form-message").innerHTML =
        "Please fill in all fields.";
    }
  });
