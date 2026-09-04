---
layout: default
title: "Gaming"
description: "Games, platforms, modding interests, and gaming-related projects."
permalink: /gaming/
---

{% include sections/page-hero.html eyebrow="PROFILE // GAMING" title="Gaming" description=page.description %}

<section class="section section-tight">
  <div class="shell">
    <div class="game-grid">
      {% for game in site.data.games %}
        <article class="game-card reveal">
          <div class="game-card-top">
            <span>{{ game.category | upcase }}</span>
            <strong>{{ game.interest }}</strong>
          </div>
          <h2>{{ game.name }}</h2>
          <div class="tag-cloud">
            {% for note in game.notes %}
              <span>{{ note | upcase }}</span>
            {% endfor %}
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">WHAT I LIKE</p>
      <h2>Game Design Things That Hook Me</h2>
    </div>

    <div class="directory-grid">
      <article class="directory-card"><span class="directory-index">01</span><h3>Progression</h3><p>Levels, unlocks, upgrades, mastery, and visible growth.</p></article>
      <article class="directory-card"><span class="directory-index">02</span><h3>Customization</h3><p>Avatars, builds, equipment, visual identity, and personal expression.</p></article>
      <article class="directory-card"><span class="directory-index">03</span><h3>Discovery</h3><p>Secrets, unusual mechanics, obscure areas, and systems that reward curiosity.</p></article>
      <article class="directory-card"><span class="directory-index">04</span><h3>Modding</h3><p>Games that can become platforms for entirely new mechanics and content.</p></article>
      <article class="directory-card"><span class="directory-index">05</span><h3>Puzzles</h3><p>Wordplay, programming, deduction, alternate answers, and layered logic.</p></article>
      <article class="directory-card"><span class="directory-index">06</span><h3>Systems</h3><p>Mechanics that interact rather than existing as isolated features.</p></article>
    </div>
  </div>
</section>
