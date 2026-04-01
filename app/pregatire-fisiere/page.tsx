import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/sections/Section';
import { canonical, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Pregătire fișiere pentru print',
  description: 'Ghid complet pentru pregătirea fișierelor grafice pentru print UV pe perete, gravare laser și personalizare. Formate acceptate, rezoluție, profil culoare.',
  alternates: { canonical: canonical('/pregatire-fisiere') },
};

const CheckIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="mt-0.5 shrink-0 text-accent">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const WarnIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="mt-0.5 shrink-0 text-amber-400">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export default function PregatireFisierePage() {
  return (
    <Section variant="default">
      <div className="mx-auto max-w-3xl">

        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Ghid tehnic</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold md:text-4xl">
            Pregătire fișiere pentru print
          </h1>
          <p className="mt-4 text-muted">
            Calitatea printului depinde direct de calitatea fișierelor primite. Urmând
            acest ghid elimini întârzierile cauzate de fișiere neconforme și te asiguri
            că rezultatul final este exact cum ți-ai dorit.
          </p>
          <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-muted">
            <strong className="text-text">Nu ești sigur de fișierele tale?</strong>{' '}
            Trimite-le pe{' '}
            <a href="mailto:sdgprintdesign@gmail.com" className="text-primary hover:underline">
              email
            </a>{' '}
            sau pe WhatsApp și le verificăm gratuit înainte de confirmare.
          </div>
        </div>

        <div className="space-y-10">

          {/* Formate acceptate */}
          <section aria-labelledby="f1">
            <h2 id="f1" className="mb-4 font-heading text-xl font-semibold text-text">
              1. Formate de fișiere acceptate
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  categorie: 'Vectorial — recomandat',
                  culoare: 'border-accent/30 bg-accent/5',
                  badge: 'Ideal',
                  badgeClass: 'bg-accent/10 text-accent',
                  formate: ['PDF (vectorial, fonturi incluse / converit la curbe)', 'AI — Adobe Illustrator (.ai)', 'EPS — Encapsulated PostScript'],
                  nota: 'Fișierele vectoriale permit scalare la orice dimensiune fără pierdere de calitate.',
                },
                {
                  categorie: 'Raster — acceptat',
                  culoare: 'border-primary/30 bg-primary/5',
                  badge: 'Acceptat',
                  badgeClass: 'bg-primary/10 text-primary',
                  formate: ['PSD — Adobe Photoshop (.psd)', 'TIFF — necomprimat (.tif)', 'PNG — 24-bit, fără compresie cu pierderi'],
                  nota: 'Fișierele raster trebuie să respecte cerințele de rezoluție de mai jos.',
                },
              ].map(({ categorie, culoare, badge, badgeClass, formate, nota }) => (
                <div key={categorie} className={`rounded-2xl border p-5 ${culoare}`}>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-text">{categorie}</h3>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${badgeClass}`}>{badge}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted">
                    {formate.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckIcon />
                        <span className="font-mono text-xs">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-muted italic">{nota}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-muted">
              <strong className="text-red-400">Nu acceptăm:</strong> JPEG/JPG pentru lucrări mari (compresie cu pierderi), fișiere Word/Excel/PowerPoint, capturi de ecran, fișiere corupte sau parțial incomplete.
            </div>
          </section>

          {/* Rezolutie */}
          <section aria-labelledby="f2">
            <h2 id="f2" className="mb-4 font-heading text-xl font-semibold text-text">
              2. Rezoluție — DPI
            </h2>
            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface/50">
                    <th className="px-4 py-3 text-left font-medium text-text">Tip lucrare</th>
                    <th className="px-4 py-3 text-left font-medium text-text">DPI minim</th>
                    <th className="px-4 py-3 text-left font-medium text-text">DPI recomandat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ['Wall print (vizualizare de la 1–2 m)', '72–100 DPI la scară 1:1', '150 DPI la scară 1:1'],
                    ['Gravare laser (detalii fine)', '300 DPI la scară 1:1', '600 DPI la scară 1:1'],
                    ['Obiecte mici (căni, huse)', '150 DPI la scară 1:1', '300 DPI la scară 1:1'],
                    ['Print textile', '150 DPI la scară 1:1', '300 DPI la scară 1:1'],
                  ].map(([tip, min, rec]) => (
                    <tr key={tip} className="text-muted">
                      <td className="px-4 py-3 font-medium text-text">{tip}</td>
                      <td className="px-4 py-3">{min}</td>
                      <td className="px-4 py-3 text-accent">{rec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 flex items-start gap-2 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-muted">
              <WarnIcon />
              <span>Rezoluția se măsoară la dimensiunea finală de print, nu la dimensiunea de pe ecran. Un fișier de 300 DPI la 10×10 cm nu este echivalent cu 300 DPI la 1×1 m.</span>
            </div>
          </section>

          {/* Profil culoare */}
          <section aria-labelledby="f3">
            <h2 id="f3" className="mb-4 font-heading text-xl font-semibold text-text">
              3. Profil de culoare
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-text">CMYK — recomandat</h3>
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">Ideal</span>
                </div>
                <p className="mt-2 text-sm text-muted">Profil recomandat: <strong className="text-text">ISO Coated v2 (ECI)</strong> sau <strong className="text-text">Fogra39</strong>. Culorile CMYK sunt cele mai aproape de rezultatul final al printului.</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface/30 p-5">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-text">RGB — acceptat cu rezerve</h3>
                  <span className="rounded-full bg-amber-400/10 px-2 py-0.5 text-xs font-medium text-amber-400">Atenție</span>
                </div>
                <p className="mt-2 text-sm text-muted">Fișierele RGB vor fi convertite la CMYK înainte de print. Culorile vii (verde neon, albastru electric) pot apărea diferit față de ecran. Verificăm și comunicăm orice diferență înainte de producție.</p>
              </div>
            </div>
          </section>

          {/* Fonturi */}
          <section aria-labelledby="f4">
            <h2 id="f4" className="mb-4 font-heading text-xl font-semibold text-text">
              4. Fonturi și texte
            </h2>
            <ul className="space-y-3 text-sm text-muted">
              {[
                { tip: 'check', text: 'Convertește toate fonturile la curbe (Outline/Create Outlines) înainte de salvare — elimină orice risc de substituire a fonturilor.' },
                { tip: 'check', text: 'Dacă preferi să trimiți fonturile separat, include fișierele .ttf sau .otf alături de fișierul principal.' },
                { tip: 'warn', text: 'Fonturile descărcate gratuit de pe internet pot avea restricții de licență pentru print comercial — verifică licența înainte de utilizare.' },
                { tip: 'warn', text: 'Verifică ortografia înainte de trimitere. Nu suntem responsabili pentru greșeli de scriere aprobate de client în proof.' },
              ].map(({ tip, text }, i) => (
                <li key={i} className="flex gap-2">
                  {tip === 'check' ? <CheckIcon /> : <WarnIcon />}
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Dimensiuni si bleed */}
          <section aria-labelledby="f5">
            <h2 id="f5" className="mb-4 font-heading text-xl font-semibold text-text">
              5. Dimensiuni și zone de siguranță
            </h2>
            <div className="space-y-4 text-sm text-muted">
              <p>
                Documentul trebuie creat la <strong className="text-text">dimensiunea exactă de print</strong> (nu la scară redusă cu note „se multiplică la X ori").
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { zona: 'Bleed (tăietură)', val: '+3–5 mm pe fiecare latură', desc: 'Fundalul / grafica de margine trebuie să depășească dimensiunea finală' },
                  { zona: 'Zonă de siguranță', val: 'Min. 5 mm interior', desc: 'Textele și elementele importante nu trebuie să fie mai aproape de margine' },
                  { zona: 'Suprapunere panel-uri', val: '2–3 cm', desc: 'Pentru lucrări în mai multe panouri (wall print mare)' },
                ].map(({ zona, val, desc }) => (
                  <div key={zona} className="rounded-2xl border border-border bg-surface/30 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{zona}</p>
                    <p className="mt-1 font-medium text-text">{val}</p>
                    <p className="mt-1 text-xs text-muted">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Trimitere fisiere */}
          <section aria-labelledby="f6">
            <h2 id="f6" className="mb-4 font-heading text-xl font-semibold text-text">
              6. Cum trimiți fișierele
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { metoda: 'Email', detalii: 'sdgprintdesign@gmail.com — pentru fișiere sub 25 MB', icon: '✉️' },
                { metoda: 'WeTransfer / Google Drive', detalii: 'Trimite link-ul de descărcare pe email sau WhatsApp — pentru fișiere mari', icon: '📁' },
                { metoda: 'WhatsApp', detalii: `${siteConfig.phone} — pentru fișiere mici și comunicare rapidă`, icon: '💬' },
                { metoda: 'Formular contact', detalii: 'Upload direct pe site (în curând disponibil)', icon: '📤' },
              ].map(({ metoda, detalii, icon }) => (
                <div key={metoda} className="flex items-start gap-3 rounded-2xl border border-border bg-surface/30 p-4">
                  <span className="text-xl">{icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-text">{metoda}</p>
                    <p className="mt-0.5 text-xs text-muted">{detalii}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">
              <strong className="text-text">Denumire fișiere:</strong> Folosește denumiri descriptive și fără caractere speciale:{' '}
              <code className="rounded bg-surface/50 px-1.5 py-0.5 font-mono text-xs text-primary">
                client-proiect-v1.pdf
              </code>{' '}
              în loc de{' '}
              <code className="rounded bg-surface/50 px-1.5 py-0.5 font-mono text-xs text-muted">
                final_FINAL_ok2 (3).psd
              </code>
            </p>
          </section>

          {/* Checklist */}
          <section aria-labelledby="f7">
            <h2 id="f7" className="mb-4 font-heading text-xl font-semibold text-text">
              7. Checklist înainte de trimitere
            </h2>
            <div className="rounded-2xl border border-border bg-surface/30 p-5">
              <ul className="space-y-2.5 text-sm text-muted">
                {[
                  'Fișierul este în format PDF vectorial, AI, PSD sau TIFF',
                  'Dimensiunile sunt corecte și la scară 1:1',
                  'Rezoluția este de minim 150 DPI (300 DPI pentru detalii fine)',
                  'Profilul de culoare este CMYK',
                  'Fonturile sunt convertite la curbe sau incluse',
                  'Bleed-ul de 3–5 mm este adăugat pe toate laturile',
                  'Textele și elementele importante sunt la min. 5 mm de margine',
                  'Ortografia a fost verificată',
                  'Fișierul a fost deschis și verificat după export',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-border bg-surface/50 text-[10px]" aria-hidden>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
          <h3 className="font-heading text-lg font-semibold">Ai fișierele pregătite?</h3>
          <p className="mt-2 text-sm text-muted">Trimite-ne cererea și fișierele — îți răspundem cu o ofertă în maxim 24h.</p>
          <Link href="/contact" className="btn-primary mt-5">
            Trimite cererea
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 border-t border-border pt-8 text-sm text-muted">
          <Link href="/termeni" className="hover:text-primary hover:underline">Termeni și condiții</Link>
          <Link href="/contact" className="hover:text-primary hover:underline">Contact</Link>
          <Link href="/" className="hover:text-primary hover:underline">Înapoi acasă</Link>
        </div>
      </div>
    </Section>
  );
}
