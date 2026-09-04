(() => {
  "use strict";

  function updateProgress() {
    const bar = document.getElementById("readingProgress");
    if (!bar) return;

    const root = document.documentElement;
    const scrollable = root.scrollHeight - root.clientHeight;

    if (scrollable <= 0) {
      bar.style.width = "0%";
      return;
    }

    const progress = Math.min(1, Math.max(0, root.scrollTop / scrollable));
    bar.style.width = `${progress * 100}%`;
  }

  document.addEventListener("DOMContentLoaded", updateProgress);
  document.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress, { passive: true });
})();
