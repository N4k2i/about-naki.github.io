(() => {
  "use strict";

  const STORAGE_KEY = "naki-site-theme";

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "void" || saved === "nebula") {
      return saved;
    }
    return "void";
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function toggleTheme() {
    const current = document.documentElement.dataset.theme || "void";
    const next = current === "void" ? "nebula" : "void";
    applyTheme(next);

    window.dispatchEvent(new CustomEvent("naki:toast", {
      detail: {
        message: `Visual mode changed to ${next.toUpperCase()}.`
      }
    }));
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(getPreferredTheme());

    const button = document.getElementById("themeToggle");
    if (button) {
      button.addEventListener("click", toggleTheme);
    }
  });
})();
