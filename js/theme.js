document.addEventListener("DOMContentLoaded", function () {
  const themeSwitcher = document.getElementById("theme-switcher");
  const body = document.body;

  // Function to set the theme
  const setTheme = (theme) => {
    if (theme === "light") {
      body.classList.add("light-mode");
    } else {
      body.classList.remove("light-mode");
    }
    localStorage.setItem("theme", theme);
  };

  // Check for saved theme in localStorage and set it
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Default to dark mode if no theme is saved
    setTheme("dark");
  }

  // Add click event listener to the switcher
  if (themeSwitcher) {
    themeSwitcher.addEventListener("click", function () {
      if (body.classList.contains("light-mode")) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    });
  }
});
