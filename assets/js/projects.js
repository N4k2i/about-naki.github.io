(() => {
  "use strict";

  const state = {
    query: "",
    filter: "all"
  };

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function matches(card) {
    const query = normalize(state.query);
    const filter = normalize(state.filter);

    const searchable = normalize(card.dataset.projectSearch);
    const tags = normalize(card.dataset.projectTags).split(/\s+/).filter(Boolean);

    const queryMatch = !query || searchable.includes(query);
    const filterMatch = filter === "all" || tags.includes(filter);

    return queryMatch && filterMatch;
  }

  function update() {
    const cards = [...document.querySelectorAll(".project-card[data-project-id]")];
    const empty = document.getElementById("projectEmpty");

    if (!cards.length) return;

    let visible = 0;

    cards.forEach((card) => {
      const show = matches(card);
      card.hidden = !show;
      if (show) visible += 1;
    });

    if (empty) empty.hidden = visible !== 0;
  }

  function setup() {
    const input = document.getElementById("projectSearch");
    const filters = document.getElementById("projectFilters");

    input?.addEventListener("input", () => {
      state.query = input.value;
      update();
    });

    filters?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;

      state.filter = button.dataset.filter || "all";

      filters.querySelectorAll("[data-filter]").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });

      update();
    });

    update();
  }

  document.addEventListener("DOMContentLoaded", setup);
})();
