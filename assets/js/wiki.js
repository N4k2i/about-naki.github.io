(() => {
  "use strict";

  function setupWikiFilters() {
    document.querySelectorAll("[data-wiki-filter]").forEach((input) => {
      const section = input.closest("section");
      const grid = section?.querySelector("[data-wiki-grid]");
      const empty = section?.querySelector("[data-wiki-empty]");

      if (!grid) return;

      const cards = [...grid.querySelectorAll("[data-wiki-record]")];

      function update() {
        const query = input.value.trim().toLowerCase();
        let visible = 0;

        cards.forEach((card) => {
          const haystack = (card.dataset.wikiRecord || "").toLowerCase();
          const show = !query || haystack.includes(query);
          card.hidden = !show;
          if (show) visible += 1;
        });

        if (empty) empty.hidden = visible !== 0;
      }

      input.addEventListener("input", update);
      update();
    });
  }

  function setupCopyRecordLink() {
    document.querySelectorAll("[data-copy-record-link]").forEach((button) => {
      button.addEventListener("click", async () => {
        const original = button.textContent;

        try {
          await navigator.clipboard.writeText(window.location.href);
          button.textContent = "COPIED";
        } catch {
          button.textContent = "COPY FAILED";
        }

        window.setTimeout(() => {
          button.textContent = original;
        }, 1500);
      });
    });
  }

  function setupRecordHeadingLinks() {
    document.querySelectorAll(".wiki-article h2, .wiki-article h3").forEach((heading) => {
      if (!heading.id) return;

      heading.classList.add("wiki-anchor-heading");

      heading.addEventListener("click", async () => {
        const url = `${window.location.origin}${window.location.pathname}#${heading.id}`;

        try {
          await navigator.clipboard.writeText(url);
          window.dispatchEvent(new CustomEvent("naki:toast", {
            detail: { message: "Section link copied." }
          }));
        } catch {
          // Copy support is optional.
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupWikiFilters();
    setupCopyRecordLink();
    setupRecordHeadingLinks();
  });
})();
