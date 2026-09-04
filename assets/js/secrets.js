(() => {
  "use strict";

  const STORAGE_KEY = "naki-achievements";

  function readAchievements() {
    try {
      return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
    } catch {
      return new Set();
    }
  }

  function saveAchievements(set) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  }

  function unlock(id, message) {
    const achievements = readAchievements();
    const firstTime = !achievements.has(id);

    achievements.add(id);
    saveAchievements(achievements);

    if (firstTime) {
      window.dispatchEvent(new CustomEvent("naki:toast", {
        detail: { message }
      }));
    }

    return firstTime;
  }

  function openSecret() {
    const section = document.getElementById("secret");
    if (!section) return;

    section.hidden = false;
    unlock("curious-creature", "Achievement unlocked: CURIOUS CREATURE.");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function closeSecret() {
    const section = document.getElementById("secret");
    if (!section) return;

    section.hidden = true;
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-secret]").forEach((trigger) => {
      trigger.addEventListener("click", openSecret);
    });

    document.getElementById("closeSecret")?.addEventListener("click", closeSecret);

    let keyBuffer = "";
    document.addEventListener("keydown", (event) => {
      if (event.key.length !== 1) return;

      keyBuffer = (keyBuffer + event.key.toLowerCase()).slice(-12);

      if (keyBuffer.endsWith("n4k2")) {
        unlock("keyboard-signal", "Hidden signal detected: N4-K2.");
      }
    });
  });
})();
