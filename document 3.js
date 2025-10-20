
    // === Sidebar Toggle ===
    const sidebar = document.getElementById("sidebar");
    const toggleSidebarBtn = document.getElementById("toggleSidebar");

    toggleSidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });

    // === Theme Toggle (Light/Dark) ===
    const toggleThemeBtn = document.getElementById("toggleTheme");

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-theme");
    }

    toggleThemeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });

    // === Live Clock ===
    function updateClock() {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      document.getElementById("clock").textContent = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock();
  