# cultivateplaystudio.com

Apps from Cultivate Play Pediatric Therapy, served by GitHub Pages.

- `/` → `index.html`, the list of apps
- `/scribble-sprouts/` → Scribble Sprouts prewriting app (installable, works offline)
- `/body-clues/` → Body Clues interoception app, "coming soon" page for now (`body-clues/index.html`)
- `/kids-creations/` → Kids' Creations gallery (`kids-creations/index.html`), one folder per creation
  - `/kids-creations/spider-verse/` → Dr. Alyssa's Spider Verse game (single file, `index.html`)

## Adding a kid's creation
Make a folder under `kids-creations/` with its own `index.html` (and an `icon.svg` for the card),
then add a card for it in `kids-creations/index.html`.

## Updating Scribble Sprouts
Edit `scribble-sprouts/index.html`. The feedback form link is `FEEDBACK_URL` near the
bottom of that file. After changing any file in the folder, bump `CACHE` in
`scribble-sprouts/sw.js` (for example `scribble-sprouts-v2`) so installed copies refresh.
