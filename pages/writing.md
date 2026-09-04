---
layout: default
title: "Writing"
description: "Writing projects, worldbuilding archives, and author notes."
permalink: /writing/
---

{% include sections/page-hero.html eyebrow="ARCHIVE // NAWKIES" title="Writing & Worldbuilding" description=page.description %}

<section class="section section-tight">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">ACTIVE RECORDS</p>
      <h2>Writing Projects</h2>
    </div>

    <div class="project-grid">
      {% for item in site.writing %}
        <article class="project-card reveal">
          <div class="project-meta">
            <span>WRITING_{{ forloop.index | prepend: "0" | slice: -2, 2 }}</span>
            <span>{{ item.status }}</span>
          </div>

          <h3>{{ item.title }}</h3>
          <p>{{ item.summary }}</p>

          <div class="tag-cloud">
            {% for tag in item.tags %}
              <span>{{ tag | upcase }}</span>
            {% endfor %}
          </div>

          <div class="project-card-actions">
            <a class="button button-ghost" href="{{ item.url | relative_url }}">OPEN ARCHIVE</a>
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">WRITING SYSTEM</p>
      <h2>What I Track</h2>
    </div>

    <div class="currently-grid">
      <article class="mini-card"><span>CHARACTERS</span><strong>Identity, design, relationships, arcs</strong></article>
      <article class="mini-card"><span>SPECIES</span><strong>Biology, appearance, traits, rules</strong></article>
      <article class="mini-card"><span>CANON</span><strong>Current continuity and superseded ideas</strong></article>
      <article class="mini-card"><span>WORLD</span><strong>Locations, history, factions, territory</strong></article>
      <article class="mini-card"><span>SYSTEMS</span><strong>Abilities, stats, progression, limits</strong></article>
      <article class="mini-card"><span>NOTES</span><strong>Author decisions and future development</strong></article>
    </div>
  </div>
</section>
