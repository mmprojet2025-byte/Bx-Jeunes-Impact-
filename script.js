document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  toggleBtn.addEventListener("click", function() {
    navMenu.classList.toggle("show");
  });
});
