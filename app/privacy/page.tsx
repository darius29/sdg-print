import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/sections/Section';
import { canonical, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Politica de confidențialitate',
  description: 'Politica de confidențialitate SDG PRINT & Design — cum colectăm, folosim și protejăm datele tale personale.',
  alternates: { canonical: canonical('/privacy') },
};

const lastUpdated = '31 martie 2026';

export default function PrivacyPage() {
  return (
    <Section variant="default">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Legal</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold md:text-4xl">
            Politica de confidențialitate
          </h1>
          <p className="mt-3 text-sm text-muted">
            Ultima actualizare: <time dateTime="2026-03-31">{lastUpdated}</time>
          </p>
          <p className="mt-4 text-muted">
            SDG PRINT & Design (denumit în continuare „Operatorul", „noi" sau „SDG Print") se
            angajează să protejeze confidențialitatea datelor tale personale. Prezentul document
            descrie tipurile de date pe care le colectăm, scopul utilizării lor și drepturile de
            care beneficiezi conform Regulamentului (UE) 2016/679 (GDPR).
          </p>
        </div>

        <div className="prose-custom space-y-10">

          {/* 1 */}
          <section aria-labelledby="s1">
            <h2 id="s1" className="mb-3 font-heading text-xl font-semibold text-text">
              1. Operatorul de date cu caracter personal
            </h2>
            <p className="text-muted">
              Operatorul datelor tale cu caracter personal este:
            </p>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              <li><strong className="text-text">Denumire:</strong> SDG PRINT & Design</li>
              <li><strong className="text-text">Sediu:</strong> Timișoara, România</li>
              <li><strong className="text-text">Email:</strong>{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                  {siteConfig.email}
                </a>
              </li>
              <li><strong className="text-text">Telefon:</strong>{' '}
                <a href={`tel:${siteConfig.phone}`} className="text-primary hover:underline">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </section>

          {/* 2 */}
          <section aria-labelledby="s2">
            <h2 id="s2" className="mb-3 font-heading text-xl font-semibold text-text">
              2. Ce date colectăm
            </h2>
            <p className="text-muted">
              Colectăm date cu caracter personal doar în măsura necesară îndeplinirii scopurilor
              descrise mai jos. Categoriile de date prelucrate sunt:
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface/50">
                    <th className="px-4 py-3 text-left font-medium text-text">Categorie</th>
                    <th className="px-4 py-3 text-left font-medium text-text">Date specifice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ['Date de identificare', 'Nume, prenume'],
                    ['Date de contact', 'Număr de telefon, adresă de email'],
                    ['Date de localizare', 'Orașul/județul (opțional)'],
                    ['Conținut mesaj', 'Descrierea proiectului trimis prin formular'],
                    ['Date tehnice', 'Adresă IP, tip browser, pagini vizitate (prin cookies)'],
                  ].map(([cat, details]) => (
                    <tr key={cat} className="text-muted">
                      <td className="px-4 py-3 font-medium text-text">{cat}</td>
                      <td className="px-4 py-3">{details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted">
              Nu colectăm date sensibile (categorii speciale conform Art. 9 GDPR), date despre
              minori sau date financiare (numere de card etc.).
            </p>
          </section>

          {/* 3 */}
          <section aria-labelledby="s3">
            <h2 id="s3" className="mb-3 font-heading text-xl font-semibold text-text">
              3. Scopurile și temeiul juridic al prelucrării
            </h2>
            <div className="space-y-4">
              {[
                {
                  scop: 'Răspuns la cereri de ofertă',
                  detalii: 'Când completezi formularul de contact, prelucrăm datele tale pentru a-ți furniza oferta solicitată și pentru a comunica detalii despre servicii.',
                  temei: 'Art. 6 (1) lit. b GDPR — executarea unui contract sau măsuri precontractuale',
                },
                {
                  scop: 'Comunicări comerciale',
                  detalii: 'Dacă îți exprimi acordul, putem trimite informații despre servicii noi, oferte sau promoții.',
                  temei: 'Art. 6 (1) lit. a GDPR — consimțământul tău explicit',
                },
                {
                  scop: 'Obligații legale',
                  detalii: 'Păstrăm anumite date pentru a respecta obligațiile contabile și fiscale impuse de legislația română.',
                  temei: 'Art. 6 (1) lit. c GDPR — obligație legală',
                },
                {
                  scop: 'Îmbunătățirea site-ului',
                  detalii: 'Analizăm date agregate de trafic (fără identificare personală) pentru a optimiza experiența utilizatorilor.',
                  temei: 'Art. 6 (1) lit. f GDPR — interes legitim',
                },
              ].map(({ scop, detalii, temei }) => (
                <div key={scop} className="rounded-2xl border border-border bg-surface/30 p-5">
                  <h3 className="font-medium text-text">{scop}</h3>
                  <p className="mt-1 text-sm text-muted">{detalii}</p>
                  <p className="mt-2 text-xs text-primary">{temei}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4 */}
          <section aria-labelledby="s4">
            <h2 id="s4" className="mb-3 font-heading text-xl font-semibold text-text">
              4. Perioada de stocare
            </h2>
            <p className="text-muted">
              Datele cu caracter personal sunt stocate numai pe durata necesară scopului pentru
              care au fost colectate:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span><strong className="text-text">Cereri de ofertă:</strong> maxim 2 ani de la data trimiterii sau până la retragerea consimțământului.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span><strong className="text-text">Documente contabile/fiscale:</strong> conform obligațiilor legale (de regulă 5–10 ani).</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span><strong className="text-text">Date tehnice (cookies):</strong> conform politicii de cookies — maxim 12 luni.</span>
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section aria-labelledby="s5">
            <h2 id="s5" className="mb-3 font-heading text-xl font-semibold text-text">
              5. Destinatarii datelor
            </h2>
            <p className="text-muted">
              Datele tale nu sunt vândute sau închiriate terților. Le putem transmite exclusiv
              către:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span><strong className="text-text">Furnizori de servicii tehnice</strong> — platforme de email (Resend), hosting și infrastructură cloud, exclusiv în scopul prestării serviciului.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span><strong className="text-text">Autorități publice</strong> — doar când suntem obligați legal (ex. organe fiscale, instanțe).</span>
              </li>
            </ul>
            <p className="mt-3 text-sm text-muted">
              Toate serviciile terțe folosite oferă garanții adecvate de protecție a datelor
              conform GDPR.
            </p>
          </section>

          {/* 6 */}
          <section aria-labelledby="s6">
            <h2 id="s6" className="mb-3 font-heading text-xl font-semibold text-text">
              6. Drepturile tale
            </h2>
            <p className="text-muted">
              Conform GDPR, ai următoarele drepturi cu privire la datele tale:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { drept: 'Dreptul de acces', desc: 'Poți solicita o copie a datelor personale pe care le deținem despre tine.' },
                { drept: 'Dreptul la rectificare', desc: 'Poți cere corectarea datelor inexacte sau incomplete.' },
                { drept: 'Dreptul la ștergere', desc: 'Poți solicita ștergerea datelor („dreptul de a fi uitat"), în limitele legii.' },
                { drept: 'Dreptul la restricționare', desc: 'Poți cere limitarea prelucrării în anumite situații.' },
                { drept: 'Dreptul la portabilitate', desc: 'Poți primi datele în format structurat, dacă prelucrarea se bazează pe consimțământ.' },
                { drept: 'Dreptul de opoziție', desc: 'Poți obiecta față de prelucrarea bazată pe interes legitim sau în scop de marketing.' },
                { drept: 'Retragerea consimțământului', desc: 'Poți retrage oricând consimțământul, fără a afecta legalitatea prelucrărilor anterioare.' },
                { drept: 'Dreptul de a depune plângere', desc: 'Poți sesiza ANSPDCP (Autoritatea Națională de Supraveghere) dacă consideri că drepturile îți sunt încălcate.' },
              ].map(({ drept, desc }) => (
                <div key={drept} className="rounded-2xl border border-border bg-surface/30 p-4">
                  <p className="text-sm font-semibold text-primary">{drept}</p>
                  <p className="mt-1 text-xs text-muted">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">
              Pentru exercitarea oricărui drept, ne poți contacta la{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                {siteConfig.email}
              </a>
              . Îți răspundem în maxim 30 de zile calendaristice.
            </p>
          </section>

          {/* 7 */}
          <section aria-labelledby="s7">
            <h2 id="s7" className="mb-3 font-heading text-xl font-semibold text-text">
              7. Securitatea datelor
            </h2>
            <p className="text-muted">
              Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor
              împotriva accesului neautorizat, pierderii sau distrugerii, incluzând:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden /><span>Transmitere criptată prin HTTPS/TLS</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden /><span>Acces restricționat la datele personale (principiul nevoii de a cunoaște)</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden /><span>Parteneri de hosting cu certificări de securitate recunoscute</span></li>
            </ul>
          </section>

          {/* 8 */}
          <section aria-labelledby="s8">
            <h2 id="s8" className="mb-3 font-heading text-xl font-semibold text-text">
              8. Modificări ale politicii
            </h2>
            <p className="text-muted">
              Putem actualiza periodic această politică. Data ultimei modificări este afișată
              în partea de sus a paginii. Te încurajăm să o consulți periodic. Continuarea
              utilizării site-ului după publicarea modificărilor constituie acceptarea noii versiuni.
            </p>
          </section>

          {/* 9 */}
          <section aria-labelledby="s9">
            <h2 id="s9" className="mb-3 font-heading text-xl font-semibold text-text">
              9. Contact
            </h2>
            <p className="text-muted">
              Pentru orice întrebare sau solicitare legată de datele tale personale:
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
              <p>
                Telefon:{' '}
                <a href={`tel:${siteConfig.phone}`} className="text-primary hover:underline">
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </section>

        </div>

        {/* Footer nav */}
        <div className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8 text-sm text-muted">
          <Link href="/cookies" className="hover:text-primary hover:underline">Politica de cookies</Link>
          <Link href="/contact" className="hover:text-primary hover:underline">Contact</Link>
          <Link href="/" className="hover:text-primary hover:underline">Înapoi acasă</Link>
        </div>

      </div>
    </Section>
  );
}
