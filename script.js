
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("mode-toggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    toggle.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀";
  });
});
