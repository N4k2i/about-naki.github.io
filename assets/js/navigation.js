(() => {
  "use strict";

  function setupMobileNavigation() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("siteNav");

    if (!toggle || !nav) return;

    const close = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", close);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  }

  function setupHeaderState() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const update = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function setupSectionTracking() {
    const links = [...document.querySelectorAll(".site-nav a[href^='#']")];
    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visible.length) return;

      const activeId = `#${visible[0].target.id}`;

      links.forEach((link) => {
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === activeId
        );
      });
    }, {
      rootMargin: "-25% 0px -60% 0px",
      threshold: [0.01, 0.15, 0.3, 0.6]
    });

    sections.forEach((section) => observer.observe(section));
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupMobileNavigation();
    setupHeaderState();
    setupSectionTracking();
  });
})();
