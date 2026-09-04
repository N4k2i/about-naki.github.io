---
layout: default
title: ARG settings
description: Settings for OUTSIDE THE NOISE.
permalink: /signal/settings/
sitemap: false
---

<div class="arg-entry-hero">
  <p class="arg-terminal-label">LOCAL ARG SETTINGS // AGE-RESTRICTED CONTENT</p>
  <h1>ARG SETTINGS</h1>
  <p class="arg-entry-lede">
    Mature Mode requires a three-step local age check before the 18+ archive can be opened.
  </p>
</div>

<section class="glass-card prose arg-settings-panel">
  <div class="arg-content-warning">
    <strong>STATIC-SITE AGE CHECK</strong>
    <p>
      This gate runs entirely in your browser and does not upload your date of birth.
      GitHub Pages cannot perform government-ID or server-side age verification.
    </p>
  </div>

  <div class="arg-age-flow" data-arg-age-flow>
    <div class="arg-age-progress" aria-label="Age verification progress">
      <span data-age-step-marker="1">1</span><i></i>
      <span data-age-step-marker="2">2</span><i></i>
      <span data-age-step-marker="3">3</span>
    </div>

    <form class="arg-age-stage" data-age-stage="1" novalidate>
      <p class="arg-terminal-label">STEP 1 // DATE OF BIRTH</p>
      <h2>Confirm your age</h2>
      <p>
        Enter your date of birth. Your browser calculates your age locally.
        The full date is not retained after successful verification.
      </p>
      <label for="arg-dob"><strong>Date of birth</strong></label>
      <input id="arg-dob" name="dob" type="date" required data-arg-dob>
      <label class="arg-age-check">
        <input type="checkbox" data-arg-dob-truth required>
        <span>I confirm this is my actual date of birth.</span>
      </label>
      <div class="arg-age-actions">
        <button class="button button-primary" type="submit">CONTINUE</button>
      </div>
      <p class="arg-code-feedback" data-age-feedback="1" aria-live="polite"></p>
    </form>

    <form class="arg-age-stage" data-age-stage="2" hidden novalidate>
      <p class="arg-terminal-label">STEP 2 // CONTENT ATTESTATION</p>
      <h2>Confirm the 18+ content warning</h2>
      <div class="arg-content-warning">
        <p>
          Mature Mode contains stronger violence, death, animal death in failure branches,
          grief, trauma, disturbing psychological material, and profanity.
        </p>
      </div>
      <label class="arg-age-check">
        <input type="checkbox" data-arg-content-attest required>
        <span>I understand this section contains adult-oriented material.</span>
      </label>
      <label class="arg-age-check">
        <input type="checkbox" data-arg-age-attest required>
        <span>I confirm that I am 18 years of age or older.</span>
      </label>
      <div class="arg-age-actions">
        <button class="button button-ghost" type="button" data-age-back="1">BACK</button>
        <button class="button button-primary" type="submit">CONTINUE</button>
      </div>
      <p class="arg-code-feedback" data-age-feedback="2" aria-live="polite"></p>
    </form>

    <form class="arg-age-stage" data-age-stage="3" hidden novalidate>
      <p class="arg-terminal-label">STEP 3 // FINAL CONFIRMATION</p>
      <h2>Type the confirmation phrase</h2>
      <p>Type this phrase exactly:</p>
      <div class="arg-confirm-phrase">I AM 18 OR OLDER</div>
      <input type="text"
             autocomplete="off"
             autocapitalize="characters"
             spellcheck="false"
             data-arg-age-phrase
             placeholder="TYPE CONFIRMATION PHRASE">
      <label class="arg-age-check">
        <input type="checkbox" data-arg-local-consent required>
        <span>I understand this verification is local to this browser and expires automatically.</span>
      </label>
      <div class="arg-age-actions">
        <button class="button button-ghost" type="button" data-age-back="2">BACK</button>
        <button class="button button-primary" type="submit">VERIFY 18+ ACCESS</button>
      </div>
      <p class="arg-code-feedback" data-age-feedback="3" aria-live="polite"></p>
    </form>
  </div>

  <hr>

  <div class="arg-setting-row">
    <div>
      <strong>18+ Mode</strong>
      <small>Requires a current verification session. Sessions expire after 12 hours.</small>
    </div>
    <button type="button" class="button button-primary"
            data-arg-mature-toggle disabled>18+ MODE: LOCKED</button>
  </div>

  <div class="arg-age-status" data-arg-age-status>
    <strong>Verification status:</strong>
    <span>NOT VERIFIED</span>
  </div>

  <div class="arg-age-actions">
    <a class="button button-ghost" data-arg-mode-enter
       href="{{ '/signal/' | relative_url }}">ENTER STANDARD ARCHIVE</a>
    <button type="button" class="button button-ghost" data-arg-age-clear>
      CLEAR AGE VERIFICATION
    </button>
  </div>
</section>
