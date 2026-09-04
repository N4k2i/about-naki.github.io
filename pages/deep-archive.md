---
layout: default
title: below the signal
description: The deeper ARG archive.
permalink: /signal/deep/
sitemap: false
---

<div class="arg-entry-hero">
  <p class="arg-terminal-label">DEEP ARCHIVE // POST-ENDING</p>
  <h1>BELOW THE SIGNAL</h1>
  <p class="arg-entry-lede">
    The main story can end without this archive.
    The deeper layers explain why it happened.
  </p>
</div>

<div class="arg-fiction-notice">
  <strong>NOTE:</strong>
  This section contains harder puzzles and heavier metafiction.
  It still requires no real-world travel, private data, external accounts, or GPS.
</div>

<section class="arg-layer-grid">
  {% assign deep_phases = "8,9,10,11,12" | split: "," %}
  {% for p in deep_phases %}
    {% assign pnum = p | plus: 0 %}
    {% assign phase = site.data.arg.phases | where: "number", pnum | first %}
    <article class="arg-layer-card">
      <span>LAYER {{ p }}</span>
      <h2>
        {% case p %}
          {% when "8" %}MIRROR
          {% when "9" %}REMNANT
          {% when "10" %}WITNESS
          {% when "11" %}NULL
          {% when "12" %}ROOT
        {% endcase %}
      </h2>
      <div class="arg-phase-records">
      {% assign records = site.arg | where: "phase", pnum | sort: "order" %}
      {% for r in records %}
        <a href="{{ r.url | relative_url }}"
           data-index-record="{{ r.arg_id }}"
           data-index-requires="{{ r.requires | join: ',' }}">
          <span>{{ r.log_number }}</span>
          <strong>{{ r.title }}</strong>
          <small data-index-state>UNREAD</small>
        </a>
      {% endfor %}
      </div>
    </article>
  {% endfor %}
</section>

<section class="arg-code-panel">
  <p class="arg-terminal-label">DEEP RECOVERY CONSOLE</p>
  <p>Deep-layer answers can unlock whole archives. Punctuation and spaces are ignored.</p>
  <div class="arg-code-form">
    <input type="text" data-arg-code-input placeholder="ENTER DEEP-LAYER RESPONSE">
    <button type="button" data-arg-code-submit>SUBMIT</button>
  </div>
  <p class="arg-code-feedback" data-arg-code-feedback></p>
</section>


---

<a class="button button-primary" href="{{ '/signal/labyrinth/' | relative_url }}">THE NOISE LABYRINTH // 45 PUZZLES</a>
