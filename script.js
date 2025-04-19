
window.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const main = document.getElementById("mainContent");
  const themeToggle = document.getElementById("themeToggle");

  // Handle splash
  setTimeout(() => {
    splash.classList.add("fade-out");
    setTimeout(() => {
      splash.style.display = "none";
      main.style.display = "block";
    }, 1000);
  }, 7000); // 7 seconds splash

  // Handle theme toggle
  const applyTheme = (theme) => {
    document.body.className = theme;
    themeToggle.textContent = theme === "light" ? "🌞" : "🌙";
  };

  themeToggle.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });

  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);
});
