# cultivateplaystudio.com

Apps from Cultivate Play Pediatric Therapy, served by GitHub Pages.

- `/` → `index.html`, the list of apps
- `/scribble-sprouts/` → Scribble Sprouts prewriting app (installable, works offline)

## Updating Scribble Sprouts
Edit `scribble-sprouts/index.html`. The feedback form link is `FEEDBACK_URL` near the
bottom of that file. After changing any file in the folder, bump `CACHE` in
`scribble-sprouts/sw.js` (for example `scribble-sprouts-v2`) so installed copies refresh.
