---
layout: default
title: "Links"
description: "Public profiles and external destinations."
permalink: /links/
---

{% include sections/page-hero.html eyebrow="EXTERNAL CONNECTIONS" title="Links" description=page.description %}

<section class="section section-tight">
  <div class="shell">
    <div class="link-grid">
      {% for link in site.data.links %}
        {% include cards/link-card.html link=link %}
      {% endfor %}
    </div>
  </div>
</section>
