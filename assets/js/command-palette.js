(() => {
  "use strict";

  const state = {
    items: [],
    selected: 0,
    open: false
  };

  function getElements() {
    return {
      dialog: document.getElementById("commandDialog"),
      input: document.getElementById("commandInput"),
      results: document.getElementById("commandResults"),
      close: document.getElementById("commandClose"),
      button: document.getElementById("commandButton"),
      heroButton: document.getElementById("heroCommandButton")
    };
  }

  function escapeHTML(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function staticCommands() {
    return [
      {
        title: "Toggle visual theme",
        description: "Switch between Void and Nebula visual modes.",
        type: "action",
        action: "theme"
      },
      {
        title: "Return to top",
        description: "Scroll to the beginning of the current page.",
        type: "action",
        action: "top"
      },
      {
        title: "Open site directory",
        description: "View all major site sections.",
        type: "action",
        url: "/directory/"
      },
      {
        title: "Open project database",
        description: "Browse all tracked projects.",
        type: "action",
        url: "/projects/"
      },
      {
        title: "Open writing archive",
        description: "Browse writing and worldbuilding records.",
        type: "action",
        url: "/writing/"
      }
    ];
  }

  function resolveBaseURL(path) {
    const brandHref = document.querySelector("a.brand")?.getAttribute("href") || "/";
    const base = brandHref.replace(/\/$/, "");

    if (!path) return base || "/";
    if (/^(?:https?:)?\/\//i.test(path)) return path;
    if (!path.startsWith("/")) return path;

    // Jekyll's relative_url already prefixes the configured baseurl.
    // If the incoming path already starts with that base path, keep it.
    if (base && path.startsWith(`${base}/`)) return path;
    if (base && path === base) return path;

    return `${base}${path}` || path;
  }

  function getItems(query) {
    const pageItems = window.NakiSearch?.search(query, 18) || [];
    const commands = staticCommands().filter((item) => {
      const haystack = `${item.title} ${item.description}`.toLowerCase();
      return !query || haystack.includes(query.toLowerCase());
    });

    return [...commands, ...pageItems].slice(0, 20);
  }

  function render(query = "") {
    const { results } = getElements();
    if (!results) return;

    state.items = getItems(query);
    state.selected = Math.min(state.selected, Math.max(0, state.items.length - 1));

    if (!state.items.length) {
      results.innerHTML = '<div class="command-empty">No matching records.</div>';
      return;
    }

    results.innerHTML = state.items.map((item, index) => `
      <button class="command-item ${index === state.selected ? "is-selected" : ""}"
              type="button"
              data-command-index="${index}">
        <span class="command-item-copy">
          <strong>${escapeHTML(item.title)}</strong>
          <small>${escapeHTML(item.description || item.url || "")}</small>
        </span>
        <span class="command-item-type">${escapeHTML(item.type || "page")}</span>
      </button>
    `).join("");
  }

  function execute(item) {
    if (!item) return;

    if (item.action === "theme") {
      document.getElementById("themeToggle")?.click();
      closePalette();
      return;
    }

    if (item.action === "top") {
      closePalette();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (item.url) {
      window.location.href = resolveBaseURL(item.url);
    }
  }

  function openPalette() {
    const { dialog, input } = getElements();
    if (!dialog) return;

    state.open = true;
    state.selected = 0;

    if (!dialog.open) dialog.showModal();

    render("");
    requestAnimationFrame(() => {
      input?.focus();
      input?.select();
    });
  }

  function closePalette() {
    const { dialog } = getElements();
    if (!dialog?.open) return;

    state.open = false;
    dialog.close();
  }

  function moveSelection(delta) {
    if (!state.items.length) return;

    state.selected = (state.selected + delta + state.items.length) % state.items.length;
    render(getElements().input?.value || "");

    const selected = document.querySelector(".command-item.is-selected");
    selected?.scrollIntoView({ block: "nearest" });
  }

  function setup() {
    const { dialog, input, results, close, button, heroButton } = getElements();
    if (!dialog) return;

    button?.addEventListener("click", openPalette);
    heroButton?.addEventListener("click", openPalette);
    close?.addEventListener("click", closePalette);

    input?.addEventListener("input", () => {
      state.selected = 0;
      render(input.value);
    });

    results?.addEventListener("click", (event) => {
      const item = event.target.closest("[data-command-index]");
      if (!item) return;
      execute(state.items[Number(item.dataset.commandIndex)]);
    });

    document.addEventListener("keydown", (event) => {
      const shortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";

      if (shortcut) {
        event.preventDefault();
        state.open ? closePalette() : openPalette();
        return;
      }

      if (!state.open) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closePalette();
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        moveSelection(1);
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        moveSelection(-1);
      }

      if (event.key === "Enter") {
        event.preventDefault();
        execute(state.items[state.selected]);
      }
    });

    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();
      const outside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

      if (outside) closePalette();
    });
  }

  document.addEventListener("DOMContentLoaded", setup);

  window.NakiCommandPalette = Object.freeze({
    open: openPalette,
    close: closePalette
  });
})();
