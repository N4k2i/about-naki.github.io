---
layout: default
title: "Projects"
description: "Development, Minecraft, writing, and experimental project records."
permalink: /projects/
---

{% include sections/page-hero.html eyebrow="DATABASE // PROJECTS" title="Project Database" description=page.description %}

<section class="section section-tight">
  <div class="shell">
    <div class="project-toolbar">
      <label class="search-box">
        <span class="sr-only">Search projects</span>
        <input id="projectSearch" type="search" placeholder="Search projects, tags, or types...">
        <span aria-hidden="true">⌕</span>
      </label>

      <div class="filter-row" id="projectFilters">
        <button class="filter is-active" data-filter="all" type="button">ALL</button>
        <button class="filter" data-filter="writing" type="button">WRITING</button>
        <button class="filter" data-filter="minecraft" type="button">MINECRAFT</button>
        <button class="filter" data-filter="java" type="button">JAVA</button>
        <button class="filter" data-filter="worldbuilding" type="button">WORLDBUILDING</button>
      </div>
    </div>

    <div class="project-grid" id="projectGrid">
      {% for project in site.projects %}
        {% include cards/project-card.html project=project %}
      {% endfor %}
    </div>

    <p class="empty-state" id="projectEmpty" hidden>No project records matched that search.</p>
  </div>
</section>
