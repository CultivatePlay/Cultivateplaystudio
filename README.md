# cultivateplaystudio.com

Apps from Cultivate Play Pediatric Therapy, served by GitHub Pages.

- `/` → `index.html`, the list of apps
- `/scribble-sprouts/` → Scribble Sprouts prewriting app (installable, works offline)
- `/weplan-clock/` → WePlan Clock app preview page with an App Store link (`weplan-clock/index.html`), plus its
  privacy policy and support pages. The app itself lives in `apps/weplan-clock/` and isn't published on the site
  (`_config.yml` excludes `apps/`)
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

## Updating WePlan Clock
The app is `apps/weplan-clock/web/index.html`; see `apps/weplan-clock/README.md` for store builds.
The website only has the preview page (`weplan-clock/index.html`), screenshots, privacy and support pages.
