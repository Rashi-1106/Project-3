document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");
  
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;
  
      formResponse.textContent = 'Thank you, ${name}, for your message: "${message}". We will get back to you soon!';
      contactForm.reset();
    });
  });