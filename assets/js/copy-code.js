(() => {
  "use strict";

  async function copyText(text) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();

    const result = document.execCommand("copy");
    area.remove();

    return result;
  }

  function enhanceCodeBlocks() {
    document.querySelectorAll(".prose pre").forEach((pre) => {
      if (pre.querySelector(".copy-code-button")) return;

      const code = pre.querySelector("code");
      if (!code) return;

      const button = document.createElement("button");
      button.className = "copy-code-button";
      button.type = "button";
      button.textContent = "COPY";

      button.addEventListener("click", async () => {
        const original = button.textContent;

        try {
          await copyText(code.innerText);
          button.textContent = "COPIED";
        } catch {
          button.textContent = "FAILED";
        }

        window.setTimeout(() => {
          button.textContent = original;
        }, 1500);
      });

      pre.appendChild(button);
    });
  }

  document.addEventListener("DOMContentLoaded", enhanceCodeBlocks);
})();
