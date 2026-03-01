import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const imageSpecs = [
  // Portfolio
  ['public/images/portfolio/receptie-corporate-1.svg', 'Recepție Corporate', 'Wall Print • Timișoara', ['#0f172a', '#1d4ed8']],
  ['public/images/portfolio/receptie-corporate-2.svg', 'Detaliu Recepție', 'Identitate vizuală premium', ['#111827', '#0ea5e9']],
  ['public/images/portfolio/dormitor-artistic-1.svg', 'Dormitor Artistic', 'Accent personalizat', ['#1f2937', '#8b5cf6']],
  ['public/images/portfolio/dormitor-artistic-2.svg', 'Perete Decorativ', 'Design custom', ['#0f172a', '#a855f7']],
  ['public/images/portfolio/tricouri-eveniment-1.svg', 'Tricouri Eveniment', 'Colecție personalizată', ['#111827', '#f97316']],
  ['public/images/portfolio/tricouri-eveniment-2.svg', 'Textile Branduite', 'Serii mici & mari', ['#1f2937', '#fb7185']],
  ['public/images/portfolio/pachet-promo-1.svg', 'Pachet Promo', 'Căni • Șepci • Textile', ['#0f172a', '#14b8a6']],
  ['public/images/portfolio/pachet-promo-2.svg', 'Brand Launch Kit', 'Materiale promo complete', ['#111827', '#22c55e']],

  // Before / After
  ['public/images/before-after/clinica-before.svg', 'ÎNAINTE', 'Recepție clinică', ['#334155', '#475569']],
  ['public/images/before-after/clinica-after.svg', 'DUPĂ', 'Recepție clinică', ['#0f172a', '#22d3ee']],
  ['public/images/before-after/showroom-before.svg', 'ÎNAINTE', 'Showroom auto', ['#374151', '#6b7280']],
  ['public/images/before-after/showroom-after.svg', 'DUPĂ', 'Showroom auto', ['#0f172a', '#3b82f6']],
  ['public/images/before-after/birou-before.svg', 'ÎNAINTE', 'Birou creativ', ['#374151', '#4b5563']],
  ['public/images/before-after/birou-after.svg', 'DUPĂ', 'Birou creativ', ['#1e1b4b', '#7c3aed']],

  // Process
  ['public/images/process/process-1.svg', 'Proces SDG', 'Măsurare & planificare', ['#0f172a', '#06b6d4']],
  ['public/images/process/process-2.svg', 'Proces SDG', 'Pregătire suprafață', ['#111827', '#6366f1']],
  ['public/images/process/process-3.svg', 'Proces SDG', 'Print UV final', ['#0f172a', '#f59e0b']],
];

const makeSvg = (title, subtitle, [c1, c2]) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}" />
      <stop offset="100%" stop-color="${c2}" />
    </linearGradient>
  </defs>
  <rect width="1600" height="1000" fill="url(#g)" />
  <circle cx="1280" cy="180" r="240" fill="rgba(255,255,255,0.08)" />
  <circle cx="300" cy="860" r="300" fill="rgba(255,255,255,0.05)" />
  <rect x="120" y="180" width="1360" height="640" rx="28" fill="rgba(15,23,42,0.35)" stroke="rgba(255,255,255,0.2)" />
  <text x="180" y="470" fill="#f8fafc" style="font: 700 92px Inter, Arial, sans-serif; letter-spacing: 1px;">${title}</text>
  <text x="180" y="560" fill="#cbd5e1" style="font: 500 44px Inter, Arial, sans-serif;">${subtitle}</text>
  <text x="180" y="760" fill="#e2e8f0" style="font: 500 28px Inter, Arial, sans-serif;">SDG PRINT &amp; Design</text>
</svg>`;

for (const [path, title, subtitle, colors] of imageSpecs) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, makeSvg(title, subtitle, colors));
}

console.log(`Generated ${imageSpecs.length} SVG images.`);
