---
layout: default
title: "FAQ"
description: "Frequently asked questions about me, my projects, and this website."
permalink: /faq/
---

{% include sections/page-hero.html eyebrow="DATABASE // FAQ" title="Frequently Asked Questions" description=page.description %}

<section class="section section-tight">
  <div class="shell narrow">
    <div class="accordion" data-accordion>
      {% for item in site.data.faq %}
        <details class="reveal">
          <summary>{{ item.question }}</summary>
          <div><p>{{ item.answer }}</p></div>
        </details>
      {% endfor %}
    </div>
  </div>
</section>
