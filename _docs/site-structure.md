---
title: Website Structure
record_id: doc-site-structure
status: Current
project: N4-K2 Website
tags:
- docs
- site
- jekyll
- architecture
related_ids:
- lore-wiki-architecture
- roadmap-site
---

## Overview

This site is a Jekyll-generated static website intended for GitHub Pages.

## Main directories

```text
_data/        Structured YAML data
_includes/    Reusable HTML fragments
_layouts/     Page shells
_posts/       Devlog posts
_projects/    Project records
_writing/     Writing archive records
_characters/  Character wiki
_species/     Species wiki
_lore/        Lore wiki
_docs/        Technical documentation
_roadmaps/    Roadmaps
_galleries/   Gallery records
_changelogs/  Changelog records
assets/       CSS, JavaScript, and images
pages/        Hand-authored landing pages
```

## Build model

Jekyll reads front matter and collection files, applies Liquid templates, and emits a fully static site.

That means the published site does not need a database or server-side runtime.
