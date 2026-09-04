---
layout: default
title: "Devlog"
description: "Build notes and development updates."
permalink: /devlog/
---

{% include sections/page-hero.html eyebrow="BUILD LOG" title="Devlog" description=page.description %}

<section class="section section-tight">
  <div class="shell narrow">
    <div class="post-list">
      {% for post in site.posts %}
        <article class="post-preview glass-card reveal">
          <p class="eyebrow">{{ post.date | date: "%Y-%m-%d" }}</p>
          <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
          {% if post.description %}<p>{{ post.description }}</p>{% endif %}
          <a class="text-link" href="{{ post.url | relative_url }}">READ ENTRY →</a>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
