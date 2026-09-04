(() => {
  "use strict";

  function createStars() {
    const container = document.getElementById("stars");
    if (!container) return;

    const count = Math.min(140, Math.max(50, Math.floor(window.innerWidth / 10)));
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i += 1) {
      const star = document.createElement("i");
      star.className = "star";
      star.style.setProperty("--x", `${Math.random() * 100}%`);
      star.style.setProperty("--y", `${Math.random() * 100}%`);
      star.style.setProperty("--size", `${(Math.random() * 1.7 + 0.5).toFixed(2)}px`);
      star.style.setProperty("--opacity", `${(Math.random() * 0.65 + 0.15).toFixed(2)}`);
      star.style.setProperty("--speed", `${(Math.random() * 4 + 2).toFixed(2)}s`);
      fragment.appendChild(star);
    }

    container.replaceChildren(fragment);
  }

  function setupRevealObserver() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries, revealObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.08
    });

    elements.forEach((element) => observer.observe(element));
  }

  function setupCursorGlow() {
    const glow = document.getElementById("cursorGlow");
    if (!glow) return;

    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      glow.hidden = true;
      return;
    }

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    document.addEventListener("pointermove", (event) => {
      tx = event.clientX;
      ty = event.clientY;
    }, { passive: true });

    function animate() {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  function setupToasts() {
    const stack = document.getElementById("toastStack");
    if (!stack) return;

    window.addEventListener("naki:toast", (event) => {
      const toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = event.detail?.message || "Notification";
      stack.appendChild(toast);

      window.setTimeout(() => {
        toast.remove();
      }, 4200);
    });
  }

  function setYear() {
    const year = document.getElementById("currentYear");
    if (year) year.textContent = new Date().getFullYear();
  }

  function handleResize() {
    let timeout = null;

    window.addEventListener("resize", () => {
      clearTimeout(timeout);
      timeout = setTimeout(createStars, 180);
    }, { passive: true });
  }

  document.addEventListener("DOMContentLoaded", () => {
    createStars();
    setupRevealObserver();
    setupCursorGlow();
    setupToasts();
    setYear();
    handleResize();
  });
})();
