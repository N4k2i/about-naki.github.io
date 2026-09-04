---
layout: default
title: mature archive entry
description: Final 18+ session check before entering the mature ARG.
permalink: /signal/18plus-entry/
sitemap: false
---

<div class="arg-entry-hero">
  <p class="arg-terminal-label">18+ ACCESS CHECK</p>
  <h1>MATURE ARCHIVE ENTRY</h1>
  <p class="arg-entry-lede">
    Your current local 18+ session is checked again before the mature ARG opens.
  </p>
</div>

<section class="glass-card prose arg-settings-panel">
  <div class="arg-age-status" data-arg-age-status>
    <strong>Verification status:</strong>
    <span>CHECKING…</span>
  </div>

  <div data-arg-interstitial-locked hidden>
    <div class="arg-content-warning">
      <strong>ACCESS LOCKED</strong>
      <p>A valid 18+ session was not found or has expired.</p>
    </div>
    <a class="button button-primary"
       href="{{ '/signal/settings/' | relative_url }}">VERIFY AGE</a>
  </div>

  <div data-arg-interstitial-ready hidden>
    <div class="arg-content-warning">
      <strong>18+ ACCESS READY</strong>
      <p>Your local 18+ verification session is currently valid.</p>
    </div>
    <label class="arg-age-check">
      <input type="checkbox" data-arg-entry-confirm>
      <span>I want to enter the mature 18+ ARG now.</span>
    </label>
    <button type="button" class="button button-primary"
            data-arg-enter-mature disabled>ENTER 18+ ARCHIVE</button>
  </div>
</section>
