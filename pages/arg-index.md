---
layout: default
title: signal
description: An unindexed archive.
permalink: /signal/
sitemap: false
---

<div class="arg-entry-hero">
  <p class="arg-terminal-label">UNINDEXED ROUTE // DO NOT CACHE</p>
  <h1>OUTSIDE THE NOISE</h1>
  <p class="arg-entry-lede">
    The site says this directory does not exist.
    The build log says it has existed for longer than the repository.
  </p>
</div>

<div class="arg-fiction-notice">
  <strong>FICTION NOTICE:</strong> {{ site.data.arg.fiction_notice }}
</div>

<section class="arg-index-intro">
  <p>
    At 02:13 local archive time, twenty-five records in the
    <em>TAHAUFYA: Found in the Noise</em> character bible stopped resolving as text
    and began resolving as witnesses.
  </p>
  <p>
    The first entry was written by nobody. The second was written by Jonathan.
    The third contains a sentence Jonathan insists he never typed:
    <strong>THE EDGE IS NOT A WALL.</strong>
  </p>
</section>

<div class="arg-progress-card">
  <div><span>LOCAL RECOVERY</span><strong data-arg-progress-text>0 / 0 RECORDS</strong></div>
  <div class="arg-progress-track"><i data-arg-progress-bar></i></div>
</div>

<div class="arg-phase-grid">
{% for phase in site.data.arg.phases %}
  <section class="arg-phase-card" data-phase-card="{{ phase.number }}">
    <span>PHASE {{ phase.number }}</span>
    <h2>{{ phase.name }}</h2>
    <p>{{ phase.theme }}</p>
    <div class="arg-phase-records">
      {% assign phase_records = site.arg | where: "phase", phase.number | sort: "order" %}
      {% for record in phase_records %}
        <a href="{{ record.url | relative_url }}"
           data-index-record="{{ record.arg_id }}"
           data-index-requires="{{ record.requires | join: ',' }}">
          <span>{{ record.log_number }}</span>
          <strong>{{ record.title }}</strong>
          <small data-index-state>UNREAD</small>
        </a>
      {% endfor %}
    </div>
  </section>
{% endfor %}
</div>

<section class="arg-code-panel arg-index-code">
  <p class="arg-terminal-label">RECOVERY CONSOLE</p>
  <p>Some records contain words that are not part of the prose. If a phrase feels too deliberate, try it.</p>
  <div class="arg-code-form">
    <input type="text" data-arg-code-input autocomplete="off" spellcheck="false"
           placeholder="ENTER RECOVERY STRING">
    <button type="button" data-arg-code-submit>SUBMIT</button>
  </div>
  <p class="arg-code-feedback" data-arg-code-feedback aria-live="polite"></p>
</section>

<details class="arg-help">
  <summary>ACCESSIBILITY / PUZZLE HELP</summary>
  <p>
    The ARG uses simple ciphers/acrostics, source comments, local browser progress,
    and hidden links. No GPS, phone calls, real-world travel, external accounts, or
    private information are required. Everything needed is on this website.
  </p>
</details>

<!-- T H E E D G E I S N O T A W A L L -->


---

<section class="arg-code-panel">
  <p class="arg-terminal-label">LOCAL CONFIGURATION</p>
  <p>The archive has an optional parallel 18+ route.</p>
  <a class="button button-ghost" href="{{ '/signal/settings/' | relative_url }}">ARG SETTINGS</a>
</section>
