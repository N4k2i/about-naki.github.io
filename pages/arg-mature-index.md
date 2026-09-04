---
layout: default
title: outside the noise 18+
description: Mature-mode parallel version of the ARG.
permalink: /signal-mature/
sitemap: false
requires_age_gate: true
---

<div class="arg-content-warning">
  <strong>AGE VERIFICATION REQUIRED</strong>
  <p>
    This mature archive is blocked unless the local 18+ age verification has been completed.
    If you have not verified your age, this page will be covered by the age gate.
  </p>
</div>

<div class="arg-entry-hero">
  <p class="arg-terminal-label">18+ ARCHIVE // MATURE MODE ENABLED</p>
  <h1>OUTSIDE THE NOISE // 18+</h1>
  <p class="arg-entry-lede">
    Same ARG. Same puzzles. Same continuity.
    Stronger language, violence, psychological material, death, grief, and consequences.
  </p>
</div>

<div class="arg-content-warning">
  <strong>18+ CONTENT WARNING</strong>
  <p>
    This mode includes stronger depictions of violence and its aftermath, profanity,
    disturbing psychological themes, irreversible death, grief, fear, and trauma.
    It does not require external accounts or real-world actions.
  </p>
</div>

<div class="arg-progress-card">
  <div>
    <span>MATURE ARCHIVE RECOVERY</span>
    <strong data-arg-progress-text>0 / 0 RECORDS</strong>
  </div>
  <div class="arg-progress-track"><i data-arg-progress-bar></i></div>
</div>

<div class="arg-phase-grid">
{% for phase in site.data.arg.phases %}
  <section class="arg-phase-card">
    <span>PHASE {{ phase.number }}</span>
    <h2>{{ phase.name }}</h2>
    <p>{{ phase.theme }}</p>
    <div class="arg-phase-records">
      {% assign phase_records = site.arg_mature | where: "phase", phase.number | sort: "order" %}
      {% for record in phase_records %}
      <a href="{{ record.url | relative_url }}"
         data-index-record="MATURE-{{ record.arg_id }}"
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

<p>
  <a class="button button-ghost" href="{{ '/signal/settings/' | relative_url }}">ARG SETTINGS</a>
  <a class="button button-ghost" href="{{ '/signal/' | relative_url }}">STANDARD ARCHIVE</a>
</p>
