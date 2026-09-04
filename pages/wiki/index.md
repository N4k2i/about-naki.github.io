---
layout: default
title: Wiki
description: Characters, species, lore, and interconnected records.
permalink: /wiki/
---

{% include sections/page-hero.html eyebrow="N4-K2 KNOWLEDGE BASE" title="Wiki" description=page.description %}

<section class="section section-tight">
  <div class="shell">
    <div class="wiki-namespace-grid">
      {% for namespace in site.data.wiki.namespaces %}
        <a class="namespace-card reveal" href="{{ namespace.url | relative_url }}">
          <span>{{ namespace.collection | upcase }}</span>
          <h2>{{ namespace.label }}</h2>
          <p>{{ namespace.description }}</p>
          <strong>OPEN NAMESPACE →</strong>
        </a>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">KNOWLEDGE GRAPH</p>
      <h2>Record Counts</h2>
    </div>

    <div class="currently-grid">
      <article class="mini-card"><span>CHARACTERS</span><strong>{{ site.characters | size }}</strong></article>
      <article class="mini-card"><span>SPECIES</span><strong>{{ site.species | size }}</strong></article>
      <article class="mini-card"><span>LORE</span><strong>{{ site.lore | size }}</strong></article>
      <article class="mini-card"><span>DOCS</span><strong>{{ site.docs | size }}</strong></article>
      <article class="mini-card"><span>ROADMAPS</span><strong>{{ site.roadmaps | size }}</strong></article>
      <article class="mini-card"><span>CHANGELOGS</span><strong>{{ site.changelogs | size }}</strong></article>
    </div>
  </div>
</section>
