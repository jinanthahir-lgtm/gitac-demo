// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  menuBtn.textContent =
    navMenu.classList.contains("active") ? "✕" : "☰";
});

// Close mobile menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

// Booking form
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;

  // Validate dates
  if (checkout <= checkin) {
    formMessage.textContent =
      "Please select a checkout date after your check-in date.";
    formMessage.style.color = "#ffb4a8";
    return;
  }

  formMessage.style.color = "#bce0b9";
  formMessage.textContent =
    `Thank you, ${name}! Your booking request has been received.`;

  bookingForm.reset();
});

// Prevent selecting past check-in dates
const today = new Date().toISOString().split("T")[0];

document.getElementById("checkin").min = today;
document.getElementById("checkout").min = today;

// Update checkout minimum when check-in changes
document.getElementById("checkin").addEventListener("change", function () {
  document.getElementById("checkout").min = this.value;
});
