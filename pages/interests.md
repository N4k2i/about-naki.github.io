---
layout: default
title: "Interests"
description: "A broader catalog of interests, aesthetics, topics, and recurring obsessions."
permalink: /interests/
---

{% include sections/page-hero.html eyebrow="PROFILE // INTERESTS" title="Interest Archive" description=page.description %}

<section class="section section-tight">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">AESTHETICS</p>
      <h2>Visual Language</h2>
    </div>

    <div class="massive-tag-cloud">
      {% for aesthetic in site.data.aesthetics %}
        <span>{{ aesthetic }}</span>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">CREATIVE TOPICS</p>
      <h2>Things I Like Building Around</h2>
    </div>

    <div class="directory-grid">
      <article class="directory-card"><span class="directory-index">01</span><h3>Characters</h3><p>Design, personality, relationships, growth, conflict, and continuity.</p></article>
      <article class="directory-card"><span class="directory-index">02</span><h3>Species</h3><p>Appearance, traits, biology, culture, and visual identity.</p></article>
      <article class="directory-card"><span class="directory-index">03</span><h3>Progression</h3><p>Levels, stats, abilities, mastery, territory, and meaningful unlocks.</p></article>
      <article class="directory-card"><span class="directory-index">04</span><h3>Puzzles</h3><p>Prompt logic, alternate answers, word systems, programming, and deduction.</p></article>
      <article class="directory-card"><span class="directory-index">05</span><h3>Interfaces</h3><p>Terminals, dashboards, databanks, command palettes, and dense but readable UI.</p></article>
      <article class="directory-card"><span class="directory-index">06</span><h3>Worldbuilding</h3><p>History, geography, factions, rules, continuity, and interconnected lore.</p></article>
    </div>
  </div>
</section>
