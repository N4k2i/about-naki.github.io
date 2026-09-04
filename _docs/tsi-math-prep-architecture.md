---
title: TSI Math Prep — Architecture
record_id: doc-tsi-architecture
status: Planning / Prototype
project: TSI Math Prep
tags:
- docs
- minecraft
- java
- education
- tsi-math-prep
related_ids:
- roadmap-tsi
- doc-tsi-content
---

## Design goal

TSI Math Prep should behave like a game with educational content rather than a worksheet displayed inside Minecraft.

## Suggested modules

### Question engine

Responsible for:

- Selecting questions
- Difficulty
- Subject
- Answer validation
- Explanations
- Retry behavior
- Mastery updates

### Progression engine

Responsible for:

- Experience
- Unlocks
- Mastery
- Achievement conditions
- Difficulty access
- Optional subjects
- Long-term goals

### Content registry

Question content should be data-driven where possible so expanding the question bank does not require rewriting the game logic.

## Platform strategy

If multi-loader support becomes a goal, shared gameplay logic should be separated from loader-specific integration code as early as practical.
