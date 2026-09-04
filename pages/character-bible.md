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
        <p>This section is built from the September 2026 <strong>CURRENT CAST ONLY</strong> character bible. It contains 25 active dossiers and intentionally does not import superseded characters from older editions.</p>
        <p>The source separates <strong>Locked Canon</strong>, <strong>Bible Expansion</strong>, and <strong>Open Field</strong>. The web dossiers preserve those labels so writer-facing expansion is never mistaken for immutable canon.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="{{ '/assets/docs/TAHAUFYA_Found_in_the_Noise_Character_Bible_CURRENT_CAST_ONLY.pdf' | relative_url }}" target="_blank" rel="noopener">OPEN ORIGINAL PDF</a>
          <a class="button button-ghost" href="{{ '/assets/docs/TAHAUFYA_Found_in_the_Noise_Character_Bible_CURRENT_CAST_ONLY.pdf' | relative_url }}" download>DOWNLOAD PDF</a>
        </div>
      </article>
      <article class="glass-card">
        <div class="card-label">BIBLE SCOPE</div>
        <dl class="data-list">
          <div><dt>Active dossiers</dt><dd>25</dd></div>
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
      <h2>25 Active Dossiers</h2>
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
          <small>DOSSIER {{ record.dossier_number }} // {{ record.category }}</small>
          <h2>{{ record.title }}</h2>
          <p>{{ record.story_role }}</p>
          <div class="bible-card-meta"><span>{{ record.pronouns }}</span><span>{{ record.species_type }}</span></div>
        </a>
      {% endfor %}
    </div>
    <p class="empty-state" data-wiki-empty hidden>No matching dossiers.</p>
  </div>
</section>

<section class="section">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">SOURCE DOCUMENT</p>
      <h2>Full 212-Page Bible</h2>
      <p>The original current-cast PDF is included directly in the repository.</p>
    </div>
    <iframe class="bible-pdf-frame" src="{{ '/assets/docs/TAHAUFYA_Found_in_the_Noise_Character_Bible_CURRENT_CAST_ONLY.pdf' | relative_url }}" title="TAHAUFYA Character Bible PDF"></iframe>
  </div>
</section>


<!-- twenty-five is also a password -->
