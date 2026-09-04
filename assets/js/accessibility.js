(() => {
  "use strict";

  function setupAccordionBehavior() {
    const container = document.querySelector("[data-accordion]");
    if (!container) return;

    const details = [...container.querySelectorAll("details")];

    details.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;

        details.forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
  }

  function setupDialogFocus() {
    const dialog = document.getElementById("projectDialog");
    if (!dialog) return;

    let lastFocused = null;

    dialog.addEventListener("close", () => {
      if (lastFocused instanceof HTMLElement) {
        lastFocused.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (event.target.closest("[data-open-project]")) {
        lastFocused = event.target.closest("[data-open-project]");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupAccordionBehavior();
    setupDialogFocus();
  });
})();
