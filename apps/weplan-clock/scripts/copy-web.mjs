// Copies the website version of WePlan Clock (../../weplan-clock) into www/ for the apps.
// The service worker, install manifest and website-only pages stay on the website.
import { cpSync, rmSync, mkdirSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, '..', '..', '..', 'weplan-clock');
const out = join(here, '..', 'www');
const skip = new Set(['sw.js', 'manifest.webmanifest', 'privacy.html', 'support.html', 'pages.css']);

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(src, out, { recursive: true, filter: p => !skip.has(basename(p)) });
console.log('Copied WePlan Clock into www/');
