(() => {
  "use strict";

  function readSearchData() {
    const node = document.getElementById("siteSearchData");
    if (!node) return [];

    try {
      return JSON.parse(node.textContent);
    } catch (error) {
      console.warn("Could not parse site search data.", error);
      return [];
    }
  }

  function normalize(value) {
    return String(value || "").toLowerCase().trim();
  }

  function scoreItem(item, query) {
    const q = normalize(query);
    if (!q) return 1;

    const title = normalize(item.title);
    const description = normalize(item.description);
    const type = normalize(item.type);

    let score = 0;

    if (title === q) score += 100;
    if (title.startsWith(q)) score += 60;
    if (title.includes(q)) score += 35;
    if (description.includes(q)) score += 15;
    if (type.includes(q)) score += 8;

    const words = q.split(/\s+/).filter(Boolean);
    for (const word of words) {
      if (title.includes(word)) score += 12;
      if (description.includes(word)) score += 4;
    }

    return score;
  }

  function search(query, limit = 12) {
    const data = readSearchData();

    return data
      .map((item) => ({
        ...item,
        score: scoreItem(item, query)
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
      .slice(0, limit);
  }

  window.NakiSearch = Object.freeze({
    readSearchData,
    search,
    normalize,
    scoreItem
  });
})();
