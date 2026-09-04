---
layout: default
title: Species
description: Species appearance, biology, visual rules, and shared traits.
permalink: /wiki/species/
---

{% include sections/page-hero.html eyebrow="WIKI // SPECIES" title="Species" description=page.description %}

<section class="section section-tight">
  <div class="shell">
    <div class="wiki-filterbar">
      <label class="search-box">
        <span class="sr-only">Filter species</span>
        <input type="search" data-wiki-filter placeholder="Filter species...">
        <span aria-hidden="true">⌕</span>
      </label>
      <span class="wiki-count">{{ site.species | size }} records</span>
    </div>

    <div class="record-index-grid" data-wiki-grid>
      {% assign records = site.species | sort: "title" %}
      {% for record in records %}
        <a class="record-index-card reveal"
           href="{{ record.url | relative_url }}"
           data-wiki-record="{{ record.title | append: ' ' | append: record.tags | join: ' ' | downcase | escape }}">
          <small>{{ record.record_type | default: record.collection | upcase }}</small>
          <h2>{{ record.title }}</h2>
          {% if record.project %}<p>{{ record.project }}</p>{% endif %}
          <div class="tag-cloud">
            {% for tag in record.tags %}<span>{{ tag | upcase }}</span>{% endfor %}
          </div>
        </a>
      {% endfor %}
    </div>

    <p class="empty-state" data-wiki-empty hidden>No matching records.</p>
  </div>
</section>
