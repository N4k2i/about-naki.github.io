---
title: Checksum Failure
subtitle: The first proof was not a face. It was a file that refused to stay the same
  size.
arg_id: P0-00-CHECKSUM-FAILURE
phase: 0
order: 0
log_number: '0.00'
record_type: RECOVERED RECORD
signal_strength: 100%
requires: []
timestamp: DAY 0 // 02:13:07
prev_slug: null
next_slug: cache-mismatch
sitemap: false
tags:
- arg
- outside-the-noise
- tahaufya
- phase-0
clue: Remove the spaces from the sentence the build refuses to lose.
code_prompt: The archive expects the sentence that survived every rebuild.
content_warning: Existential horror, fictionalized real people, themes of unreality
  and loss.
---

The build had finished normally. The repository had the same folders it had the night before:
layouts, data, projects, the character bible, the About page Jonathan had just spent too much
time making sound like himself. Nothing in the commit history described an ARG. Nothing in the
commit history described a directory named `signal`.

Then the generated site contained one more page than the source tree.

Jonathan rebuilt it. The page disappeared. He rebuilt it again. It returned with a different
checksum and the same sentence in the footer:

**THE EDGE IS NOT A WALL.**

He assumed he had left a debugging string somewhere. That explanation lasted until he searched
the repository and found no copy of the sentence. He deleted the build output completely. The
next build placed the sentence inside the character-bible index, directly between Naki's dossier
and Mako's.

The strangest part was the character count. The source said twenty-four active dossiers.
The generated page briefly said twenty-five.

The twenty-fifth entry had no name.

`LOCATION: OUTSIDE`

Jonathan refreshed. The entry vanished. Somewhere in the house, Shadow hissed at a closed
hallway. Scout, who had been sleeping, stood up at exactly the same moment and stared at the same
empty space.

The site rebuilt itself without being asked.
