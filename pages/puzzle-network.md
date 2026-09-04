---
layout: default
title: the noise labyrinth
description: 45 additional ARG puzzles across five difficulty bands.
permalink: /signal/labyrinth/
sitemap: false
---

<div class="arg-entry-hero"><p class="arg-terminal-label">PUZZLE NETWORK // 45 ADDITIONAL TESTS</p><h1>THE NOISE LABYRINTH</h1><p class="arg-entry-lede">Five escalating bands: Beginner, Medium, Hard, Very Hard, Expert/Master.</p></div>

{% assign puzzle_phases = "13,14,15,16,17" | split: "," %}
<div class="arg-layer-grid">{% for p in puzzle_phases %}{% assign pnum = p | plus: 0 %}<article class="arg-layer-card"><span>PUZZLE BAND {{ p }}</span><h2>{% case p %}{% when "13" %}ENTRY TESTS{% when "14" %}HOUSE CIPHER{% when "15" %}CHARACTER LATTICE{% when "16" %}PROTOCOL MAZE{% when "17" %}NOISE ENGINE{% endcase %}</h2><div class="arg-phase-records">{% assign records = site.arg | where: "phase", pnum | sort: "order" %}{% for r in records %}<a href="{{ r.url | relative_url }}" data-index-record="{{ r.arg_id }}" data-index-requires="{{ r.requires | join: ',' }}"><span>{{ r.log_number }}</span><strong>{{ r.title }}</strong><small data-index-state>UNREAD</small></a>{% endfor %}</div></article>{% endfor %}</div>
