document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("toggle-theme");
    const currentTheme = localStorage.getItem("theme");
  
    if (currentTheme === "dark") {
      document.body.classList.add("dark");
    }
  
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
      );
    });
  });
  