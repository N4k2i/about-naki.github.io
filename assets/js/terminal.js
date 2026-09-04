(() => {
  "use strict";

  const lines = [
    { text: "> locating identity record...", delay: 100 },
    { text: "> loading profile...", delay: 360 },
    { text: "> loading project collection...", delay: 620 },
    { text: "> loading writing archive...", delay: 880 },
    { text: "> indexing site directory...", delay: 1140 },
    { text: "> initializing command palette...", delay: 1400 },
    { text: "> checking project scope...", delay: 1660 },
    { text: "> warning: scope exceeds recommended limits.", delay: 1920 },
    { text: "> system ready.", delay: 2180, ok: true }
  ];

  function setupBoot() {
    const target = document.getElementById("bootLines");
    const button = document.getElementById("enterSite");
    const screen = document.getElementById("bootScreen");

    if (!target || !button || !screen) return;

    button.style.opacity = "0";
    button.style.pointerEvents = "none";

    lines.forEach((line) => {
      window.setTimeout(() => {
        const p = document.createElement("p");
        p.textContent = line.text;
        if (line.ok) p.classList.add("ok");
        target.appendChild(p);
      }, line.delay);
    });

    window.setTimeout(() => {
      button.style.opacity = "1";
      button.style.pointerEvents = "auto";
    }, 2360);

    const enter = () => {
      screen.classList.add("is-hidden");
      document.body.classList.remove("no-scroll");
      sessionStorage.setItem("naki-boot-seen", "1");
    };

    button.addEventListener("click", enter);

    if (sessionStorage.getItem("naki-boot-seen") === "1") {
      screen.classList.add("is-hidden");
    } else {
      document.body.classList.add("no-scroll");
    }
  }

  document.addEventListener("DOMContentLoaded", setupBoot);
})();
