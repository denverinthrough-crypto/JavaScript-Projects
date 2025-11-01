document.addEventListener("DOMContentLoaded", () => {
  const openFormBtn = document.getElementById("openFormBtn");
  const popupForm = document.getElementById("popupForm");
  const closeBtn = document.getElementById("closeBtn");
  const contactForm = document.getElementById("contactForm");

  // ✅ Open popup
  openFormBtn.addEventListener("click", () => {
    popupForm.style.display = "flex";
  });

  // ✅ Close popup when clicking X
  closeBtn.addEventListener("click", () => {
    popupForm.style.display = "none";
  });

  // ✅ Close popup when clicking outside
  window.addEventListener("click", (event) => {
    if (event.target === popupForm) {
      popupForm.style.display = "none";
    }
  });

  // ✅ Form validation
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (name === "" || email === "" || phone === "") {
      alert("Please fill out all fields before submitting.");
    } else {
      alert("Form submitted successfully!");
      popupForm.style.display = "none"; // close only after valid
      contactForm.reset();
    }
  });
});
