// Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Toggle projects section
const toggleProjectsBtn = document.getElementById("toggle-projects");
const projectsGrid = document.getElementById("projects-grid");

toggleProjectsBtn.addEventListener("click", () => {
  projectsGrid.classList.toggle("hidden");

  if (projectsGrid.classList.contains("hidden")) {
    toggleProjectsBtn.textContent = "Show Projects";
  } else {
    toggleProjectsBtn.textContent = "Hide Projects";
  }
});

// Footer year
const footerText = document.getElementById("footer-text");
const currentYear = new Date().getFullYear();
footerText.textContent = `© ${currentYear} Rafael. All rights reserved.`;
