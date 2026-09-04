---
layout: default
title: "Now"
description: "What I am currently playing, building, writing, and learning."
permalink: /now/
---

{% include sections/page-hero.html eyebrow="LIVE RECORD" title="Now" description=page.description %}

<section class="section section-tight">
  <div class="shell">
    <div class="currently-grid">
      {% for item in site.data.now.items %}
        <article class="mini-card reveal">
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
        </article>
      {% endfor %}
    </div>

    <p class="updated-note">Last manually noted: {{ site.data.now.updated }}</p>
  </div>
</section>

<section class="section section-alt">
  <div class="shell narrow">
    <article class="glass-card prose">
      ## Why a Now Page?

      A normal About Me page is mostly stable. A **Now** page is for things that change.

      This is where I can update what I am currently playing, which project is receiving the most attention, what I am learning, or which system I am currently overthinking.

      It is intentionally simple to edit: the values live in `_data/now.yml`.
    </article>
  </div>
</section>
