---
layout: default
title: "Uses"
description: "Software, languages, tools, platforms, and workflow notes."
permalink: /uses/
---

{% include sections/page-hero.html eyebrow="WORKFLOW // TOOLS" title="Uses" description=page.description %}

<section class="section section-tight">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">SOFTWARE</p>
      <h2>Tools & Platforms</h2>
    </div>

    <div class="skill-grid">
      {% for item in site.data.uses.software %}
        <article class="skill-card">
          <span>TOOL</span>
          <h3>{{ item.name }}</h3>
          <p>{{ item.use }}</p>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="shell narrow">
    <div class="section-heading">
      <p class="eyebrow">WORKFLOW</p>
      <h2>Typical Escalation Path</h2>
    </div>

    <ol class="timeline">
      {% for step in site.data.uses.workflow %}
        <li><b>{{ forloop.index | prepend: "0" | slice: -2, 2 }}</b><span>{{ step }}</span></li>
      {% endfor %}
    </ol>
  </div>
</section>
