---
layout: default
title: "TAHAUFYA Character Bible"
description: "The complete current-cast character bible for TAHAUFYA: Found in the Noise."
permalink: /character-bible/
---

{% include sections/page-hero.html eyebrow="TAHAUFYA // CURRENT CANON" title="Character Bible" description=page.description %}

<section class="section section-tight">
  <div class="shell">
    <div class="bible-intro-grid">
      <article class="glass-card prose">
        <h2>Current Cast Only</h2>
        <p>This section contains <strong>{{ site.tahaufya_bible | size }} active dossiers</strong> for the current September 2026 continuity and intentionally does not import superseded or non-canon characters.</p>
        <p>The dossiers separate <strong>Locked Canon</strong>, <strong>Bible Expansion</strong>, and <strong>Open Field</strong> so writer-facing expansion is never mistaken for immutable canon.</p>
      </article>
      <article class="glass-card">
        <div class="card-label">BIBLE SCOPE</div>
        <dl class="data-list">
          <div><dt>Active dossiers</dt><dd>{{ site.tahaufya_bible | size }}</dd></div>
          <div><dt>Continuity</dt><dd>Current cast only</dd></div>
          <div><dt>Setting</dt><dd>Grounded by default</dd></div>
          <div><dt>Source</dt><dd>September 2026</dd></div>
        </dl>
      </article>
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">ROSTER NAVIGATOR</p>
      <h2>{{ site.tahaufya_bible | size }} Active Dossiers</h2>
      <p>Search the current cast or browse by role group.</p>
    </div>
    <div class="wiki-filterbar">
      <label class="search-box">
        <span class="sr-only">Filter character bible</span>
        <input type="search" data-wiki-filter placeholder="Search Naki, Markov, Blade, prank war...">
        <span aria-hidden="true">⌕</span>
      </label>
      <span class="wiki-count">{{ site.tahaufya_bible | size }} dossiers</span>
    </div>
    <div class="record-index-grid bible-record-grid" data-wiki-grid>
      {% assign dossiers = site.tahaufya_bible | sort: "dossier_number" %}
      {% for record in dossiers %}
        <a class="record-index-card reveal" href="{{ record.url | relative_url }}" data-wiki-record="{{ record.title | append: ' ' | append: record.category | append: ' ' | append: record.species_type | append: ' ' | append: record.story_role | downcase | escape }}">
          <small>DOSSIER {{ forloop.index }} // {{ record.category }}</small>
          <h2>{{ record.title }}</h2>
          <p>{{ record.story_role }}</p>
          <div class="bible-card-meta"><span>{{ record.pronouns }}</span><span>{{ record.species_type }}</span></div>
        </a>
      {% endfor %}
    </div>
    <p class="empty-state" data-wiki-empty hidden>No matching dossiers.</p>
  </div>
</section>

<!-- twenty-four is also a password -->
