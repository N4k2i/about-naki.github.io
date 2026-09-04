---
layout: default
title: "Directory"
description: "A complete directory of the main sections of the website."
permalink: /directory/
---

{% include sections/page-hero.html eyebrow="DATABASE // DIRECTORY" title="Site Directory" description=page.description %}

<section class="section section-tight">
  <div class="shell">
    <div class="directory-grid">
      {% for item in site.data.navigation.directory %}
        <a class="directory-card reveal" href="{{ item.url | relative_url }}">
          <span class="directory-index">{{ forloop.index | prepend: "0" | slice: -2, 2 }}</span>
          <h3>{{ item.label }}</h3>
          <p>{{ item.description }}</p>
          <span class="directory-arrow">OPEN →</span>
        </a>
      {% endfor %}
    </div>
  </div>
</section>
