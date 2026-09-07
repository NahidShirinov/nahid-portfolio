// Regenerates the favicon PNGs, apple-touch-icon and Open Graph image
// from an inline SVG source. Run with: npm run gen:assets
import {mkdir, writeFile} from 'node:fs/promises';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

import sharp from 'sharp';

const publicDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="112" fill="#1c1917"/>
  <rect x="40" y="40" width="432" height="432" rx="80" fill="none" stroke="#f97316" stroke-width="16"/>
  <path d="M150 366V146h44l124 150V146h44v220h-44L194 216v150z" fill="#f5f5f4"/>
</svg>`;

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#12100e"/>
  <rect width="1200" height="8" y="622" fill="#f97316"/>
  <text x="80" y="250" font-family="Archivo, Helvetica, Arial, sans-serif" font-size="96" font-weight="800" fill="#f5f5f4">Nahid Islam</text>
  <text x="80" y="330" font-family="Archivo, Helvetica, Arial, sans-serif" font-size="48" font-weight="600" fill="#f97316">QA Engineer</text>
  <text x="80" y="420" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#b4aaa0">Test automation &#183; API testing &#183; CI/CD quality gates</text>
</svg>`;

const tasks = [
  {name: 'icon-512.png', svg: iconSvg, size: 512},
  {name: 'icon-192.png', svg: iconSvg, size: 192},
  {name: 'apple-touch-icon.png', svg: iconSvg, size: 180},
  {name: 'favicon-32x32.png', svg: iconSvg, size: 32},
  {name: 'favicon-16x16.png', svg: iconSvg, size: 16},
];

await mkdir(publicDir, {recursive: true});
await writeFile(join(publicDir, 'icon.svg'), `${iconSvg}\n`);

for (const {name, svg, size} of tasks) {
  await sharp(Buffer.from(svg)).resize(size, size).png().toFile(join(publicDir, name));
  console.log(`  public/${name}`);
}

await sharp(Buffer.from(ogSvg)).png().toFile(join(publicDir, 'og.png'));
console.log('  public/og.png');
