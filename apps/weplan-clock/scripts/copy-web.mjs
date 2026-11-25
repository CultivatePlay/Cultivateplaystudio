// Copies the WePlan Clock app (../web) into www/, the folder Capacitor puts inside the native apps.
import { cpSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, '..', 'web');
const out = join(here, '..', 'www');

rmSync(out, { recursive: true, force: true });
cpSync(src, out, { recursive: true });
console.log('Copied WePlan Clock into www/');
