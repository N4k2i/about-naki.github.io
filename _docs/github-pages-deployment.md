---
title: GitHub Pages Deployment
record_id: doc-github-pages
status: Current
project: N4-K2 Website
tags:
- docs
- github-pages
- deployment
- jekyll
related_ids:
- doc-site-structure
- roadmap-site
---

## Repository deployment

The site is designed to be published by GitHub Pages from a repository source.

## Important files

- `_config.yml` controls Jekyll behavior.
- `Gemfile` declares the GitHub Pages dependency.
- `.gitignore` prevents local build output from being committed accidentally.
- There is intentionally no `.nojekyll` file because Jekyll processing is required.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open the local address printed by Jekyll.
