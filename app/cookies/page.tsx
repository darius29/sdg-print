import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/sections/Section';
import { canonical, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Politica de cookies',
  description: 'Politica de cookies SDG PRINT & Design — ce cookie-uri folosim, de ce și cum le poți gestiona.',
  alternates: { canonical: canonical('/cookies') },
};

const lastUpdated = '31 martie 2026';

type CookieRow = { nume: string; tip: string; scop: string; durata: string };

const cookieTable: CookieRow[] = [
  {
    nume: '__session / next-auth',
    tip: 'Esențial',
    scop: 'Menținerea sesiunii și securitatea formularelor',
    durata: 'Sesiune',
  },
  {
    nume: 'cookie_consent',
    tip: 'Esențial',
    scop: 'Reținerea preferințelor tale de consimțământ cookies',
    durata: '12 luni',
  },
  {
    nume: '_ga, _ga_*',
    tip: 'Analiză (opțional)',
    scop: 'Statistici agregate de vizitatori via Google Analytics',
    durata: '13 luni',
  },
  {
    nume: '_fbp',
    tip: 'Marketing (opțional)',
    scop: 'Urmărire conversii Facebook Pixel (dacă este activat)',
    durata: '3 luni',
  },
];

export default function CookiesPage() {
  return (
    <Section variant="default">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Legal</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold md:text-4xl">
            Politica de cookies
          </h1>
          <p className="mt-3 text-sm text-muted">
            Ultima actualizare: <time dateTime="2026-03-31">{lastUpdated}</time>
          </p>
          <p className="mt-4 text-muted">
            Această pagină explică ce sunt cookie-urile, ce tipuri folosim pe site-ul{' '}
            <strong className="text-text">sdgprint.ro</strong>, de ce le folosim și cum le
            poți controla sau dezactiva. Utilizarea site-ului nostru după citirea acestei politici
            implică acceptul față de utilizarea cookie-urilor esențiale.
          </p>
        </div>

        <div className="space-y-10">

          {/* 1 */}
          <section aria-labelledby="c1">
            <h2 id="c1" className="mb-3 font-heading text-xl font-semibold text-text">
              1. Ce sunt cookie-urile?
            </h2>
            <p className="text-muted">
              Cookie-urile sunt fișiere text de mici dimensiuni stocate de browserul tău atunci
              când vizitezi un site web. Ele permit site-ului să-ți recunoască dispozitivul la
              vizite ulterioare și să rețină preferințele tale, contribuind la o experiență mai
              fluentă. Cookie-urile nu pot executa cod și nu conțin viruși.
            </p>
          </section>

          {/* 2 */}
          <section aria-labelledby="c2">
            <h2 id="c2" className="mb-3 font-heading text-xl font-semibold text-text">
              2. Tipuri de cookie-uri pe care le folosim
            </h2>

            <div className="space-y-4">
              {[
                {
                  tip: 'Cookie-uri esențiale',
                  culoare: 'border-primary/30 bg-primary/5',
                  badge: 'Întotdeauna active',
                  badgeClass: 'bg-primary/10 text-primary',
                  desc: 'Necesare pentru funcționarea de bază a site-ului: securitatea formularelor, menținerea sesiunii și reținerea preferințelor de consimțământ. Nu pot fi dezactivate fără a afecta funcționalitatea.',
                },
                {
                  tip: 'Cookie-uri de analiză',
                  culoare: 'border-accent/30 bg-accent/5',
                  badge: 'Necesită consimțământ',
                  badgeClass: 'bg-accent/10 text-accent',
                  desc: 'Ne ajută să înțelegem cum utilizatorii interacționează cu site-ul (ex. Google Analytics). Datele sunt agregate și anonimizate — nu identificăm personal vizitatorii.',
                },
                {
                  tip: 'Cookie-uri de marketing',
                  culoare: 'border-primary-2/30 bg-primary-2/5',
                  badge: 'Necesită consimțământ',
                  badgeClass: 'bg-primary-2/10 text-primary-2',
                  desc: 'Folosite pentru urmărirea conversiilor și afișarea de reclame relevante (ex. Facebook Pixel). Sunt activate doar dacă îți dai acordul explicit.',
                },
              ].map(({ tip, culoare, badge, badgeClass, desc }) => (
                <div key={tip} className={`rounded-2xl border p-5 ${culoare}`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-medium text-text">{tip}</h3>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeClass}`}>
                      {badge}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3 — table */}
          <section aria-labelledby="c3">
            <h2 id="c3" className="mb-3 font-heading text-xl font-semibold text-text">
              3. Lista detaliată a cookie-urilor
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface/50">
                    <th className="px-4 py-3 text-left font-medium text-text">Nume</th>
                    <th className="px-4 py-3 text-left font-medium text-text">Tip</th>
                    <th className="px-4 py-3 text-left font-medium text-text">Scop</th>
                    <th className="px-4 py-3 text-left font-medium text-text">Durată</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {cookieTable.map((row) => (
                    <tr key={row.nume} className="text-muted">
                      <td className="px-4 py-3 font-mono text-xs text-text">{row.nume}</td>
                      <td className="px-4 py-3">{row.tip}</td>
                      <td className="px-4 py-3">{row.scop}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.durata}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4 */}
          <section aria-labelledby="c4">
            <h2 id="c4" className="mb-3 font-heading text-xl font-semibold text-text">
              4. Cookie-uri ale terților
            </h2>
            <p className="text-muted">
              Anumite funcționalități pot utiliza servicii externe care setează propriile
              cookie-uri:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>
                  <strong className="text-text">Google Analytics</strong> — statistici de trafic
                  anonimizate.{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Politica Google
                  </a>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>
                  <strong className="text-text">Google Maps</strong> — harta afișată pe pagina de
                  contact poate seta cookie-uri.{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Politica Google
                  </a>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>
                  <strong className="text-text">Meta (Facebook)</strong> — Pixel de conversii
                  (dacă este activat).{' '}
                  <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Politica Meta
                  </a>
                </span>
              </li>
            </ul>
            <p className="mt-3 text-sm text-muted">
              Nu controlăm cookie-urile setate de terți. Consultă politicile lor de
              confidențialitate pentru detalii.
            </p>
          </section>

          {/* 5 */}
          <section aria-labelledby="c5">
            <h2 id="c5" className="mb-3 font-heading text-xl font-semibold text-text">
              5. Cum poți gestiona sau dezactiva cookie-urile
            </h2>
            <p className="text-muted">
              Ai mai multe opțiuni pentru a controla cookie-urile:
            </p>
            <div className="mt-4 space-y-3">
              {[
                {
                  titlu: 'Prin browserul tău',
                  desc: 'Poți configura browserul să blocheze sau să șteargă cookie-urile. Reține că dezactivarea cookie-urilor esențiale poate afecta funcționarea site-ului.',
                },
                {
                  titlu: 'Prin setările Google Analytics',
                  desc: 'Poți instala extensia „Google Analytics Opt-out" pentru a preveni colectarea datelor de analiză.',
                },
                {
                  titlu: 'Prin setările Meta',
                  desc: 'Dacă ești autentificat pe Facebook, poți gestiona preferințele de reclame din contul tău Meta.',
                },
              ].map(({ titlu, desc }) => (
                <div key={titlu} className="rounded-2xl border border-border bg-surface/30 p-4">
                  <p className="text-sm font-semibold text-text">{titlu}</p>
                  <p className="mt-1 text-sm text-muted">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-border bg-surface/30 p-4">
              <p className="text-sm font-semibold text-text">Ghiduri pe browser</p>
              <ul className="mt-2 flex flex-wrap gap-3 text-sm">
                {[
                  ['Chrome', 'https://support.google.com/chrome/answer/95647'],
                  ['Firefox', 'https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer'],
                  ['Safari', 'https://support.apple.com/guide/safari/manage-cookies-sfri11471'],
                  ['Edge', 'https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406'],
                ].map(([browser, url]) => (
                  <li key={browser}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {browser}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 6 */}
          <section aria-labelledby="c6">
            <h2 id="c6" className="mb-3 font-heading text-xl font-semibold text-text">
              6. Baza legală pentru utilizarea cookie-urilor
            </h2>
            <p className="text-muted">
              Cookie-urile esențiale sunt folosite în baza <strong className="text-text">interesului
              legitim</strong> și a necesității tehnice (Art. 6 (1) lit. f GDPR). Cookie-urile
              de analiză și marketing sunt folosite exclusiv pe baza{' '}
              <strong className="text-text">consimțământului tău explicit</strong> (Art. 6 (1)
              lit. a GDPR), conform Directivei ePrivacy.
            </p>
          </section>

          {/* 7 */}
          <section aria-labelledby="c7">
            <h2 id="c7" className="mb-3 font-heading text-xl font-semibold text-text">
              7. Modificări ale politicii de cookies
            </h2>
            <p className="text-muted">
              Putem actualiza această politică periodic. Orice modificare substanțială va fi
              comunicată printr-un banner de consimțământ afișat pe site. Data ultimei actualizări
              este menționată în partea de sus a paginii.
            </p>
          </section>

          {/* 8 */}
          <section aria-labelledby="c8">
            <h2 id="c8" className="mb-3 font-heading text-xl font-semibold text-text">
              8. Contact
            </h2>
            <p className="text-muted">
              Dacă ai întrebări despre modul în care folosim cookie-urile, ne poți contacta:
            </p>
            <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-5 text-sm text-muted">
              <p><strong className="text-text">SDG PRINT & Design</strong></p>
              <p className="mt-1">Timișoara, România</p>
              <p>
                Email:{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </section>

        </div>

        {/* Footer nav */}
        <div className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8 text-sm text-muted">
          <Link href="/privacy" className="hover:text-primary hover:underline">Politica de confidențialitate</Link>
          <Link href="/contact" className="hover:text-primary hover:underline">Contact</Link>
          <Link href="/" className="hover:text-primary hover:underline">Înapoi acasă</Link>
        </div>

      </div>
    </Section>
  );
}
