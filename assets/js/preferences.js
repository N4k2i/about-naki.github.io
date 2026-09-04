(() => {
  "use strict";

  const keys = Object.freeze({
    motion: "naki-pref-motion",
    glow: "naki-pref-glow"
  });

  function read(key, fallback) {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  }

  function applyPreferences() {
    const motion = read(keys.motion, "system");
    const glow = read(keys.glow, "on");

    document.documentElement.dataset.motion = motion;
    document.documentElement.dataset.glow = glow;
  }

  function setMotion(value) {
    localStorage.setItem(keys.motion, value);
    applyPreferences();
  }

  function setGlow(value) {
    localStorage.setItem(keys.glow, value);
    applyPreferences();
  }

  document.addEventListener("DOMContentLoaded", applyPreferences);

  window.NakiPreferences = Object.freeze({
    setMotion,
    setGlow,
    apply: applyPreferences
  });
})();
