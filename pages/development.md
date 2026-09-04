---
layout: default
title: "Development"
description: "Programming languages, development interests, tools, and project philosophy."
permalink: /development/
---

{% include sections/page-hero.html eyebrow="PROFILE // DEVELOPMENT" title="Developer Profile" description=page.description %}

<section class="section section-tight">
  <div class="shell dev-grid">
    <article class="code-window">
      <div class="window-bar">
        <span>developer_profile.js</span>
        <span class="window-actions">— □ ×</span>
      </div>
      <pre><code><span class="code-keyword">const</span> <span class="code-var">naki</span> = {
  roles: [
    <span class="code-string">"developer"</span>,
    <span class="code-string">"gamer"</span>,
    <span class="code-string">"storyteller"</span>,
    <span class="code-string">"worldbuilder"</span>
  ],

  languages: [
    <span class="code-string">"Lua / Luau"</span>,
    <span class="code-string">"Python"</span>,
    <span class="code-string">"Java"</span>,
    <span class="code-string">"JavaScript"</span>,
    <span class="code-string">"C#"</span>,
    <span class="code-string">"C++"</span>,
    <span class="code-string">"C"</span>
  ],

  web: [
    <span class="code-string">"HTML"</span>,
    <span class="code-string">"CSS"</span>,
    <span class="code-string">"Jekyll"</span>,
    <span class="code-string">"Liquid"</span>
  ],

  projectScope: <span class="code-number">Infinity</span>
};</code></pre>
    </article>

    <article class="glass-card">
      <div class="card-label">BUILD AREAS</div>
      <ul class="check-list">
        {% for area in site.data.skills.areas %}
          <li>{{ area }}</li>
        {% endfor %}
      </ul>
    </article>
  </div>
</section>

<section class="section section-alt">
  <div class="shell">
    <div class="section-heading">
      <p class="eyebrow">LANGUAGE MATRIX</p>
      <h2>Programming & Web</h2>
    </div>

    <div class="skill-grid">
      {% for language in site.data.skills.languages %}
        <article class="skill-card">
          <span>{{ language.category }}</span>
          <h3>{{ language.name }}</h3>
          <p>{{ language.note }}</p>
          <strong>{{ language.level }}</strong>
        </article>
      {% endfor %}

      {% for skill in site.data.skills.web %}
        <article class="skill-card">
          <span>{{ skill.category }}</span>
          <h3>{{ skill.name }}</h3>
          <p>{{ skill.note }}</p>
          <strong>{{ skill.level }}</strong>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section">
  <div class="shell narrow">
    <blockquote class="big-quote">
      “Why make a tiny feature when I can accidentally turn it into an entire progression system?”
    </blockquote>
  </div>
</section>
