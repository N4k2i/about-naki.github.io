---
layout: default
title: Tags
description: Browse wiki records by topic.
permalink: /tags/
---

{% include sections/page-hero.html eyebrow="META // TAG INDEX" title="Tags" description=page.description %}

{% assign all_records = site.characters
  | concat: site.species
  | concat: site.lore
  | concat: site.docs
  | concat: site.roadmaps
  | concat: site.galleries
  | concat: site.changelogs
  | concat: site.projects
  | concat: site.writing %}

{% assign tag_string = "" %}
{% for record in all_records %}
  {% for tag in record.tags %}
    {% assign tag_string = tag_string | append: tag | append: "||" %}
  {% endfor %}
{% endfor %}
{% assign tags = tag_string | split: "||" | uniq | sort %}

<section class="section section-tight">
  <div class="shell">
    <div class="massive-tag-cloud tag-index-cloud">
      {% for tag in tags %}
        {% unless tag == "" %}
          <a href="#{{ tag | slugify }}">{{ tag }}</a>
        {% endunless %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="shell">
    {% for tag in tags %}
      {% unless tag == "" %}
      <section class="tag-section" id="{{ tag | slugify }}">
        <div class="section-heading compact-heading">
          <p class="eyebrow">TAG</p>
          <h2>{{ tag }}</h2>
        </div>

        <div class="backlink-list">
          {% for record in all_records %}
            {% if record.tags contains tag %}
              <a class="backlink-item" href="{{ record.url | relative_url }}">
                <span>{{ record.title }}</span>
                <small>{{ record.collection | upcase }}</small>
              </a>
            {% endif %}
          {% endfor %}
        </div>
      </section>
      {% endunless %}
    {% endfor %}
  </div>
</section>
