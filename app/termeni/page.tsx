import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/sections/Section';
import { canonical, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Termeni și condiții',
  description: 'Termenii și condițiile contractuale ale SDG PRINT & Design pentru servicii de print UV, gravare laser și personalizare.',
  alternates: { canonical: canonical('/termeni') },
};

const lastUpdated = '31 martie 2026';

export default function TermeniPage() {
  return (
    <Section variant="default">
      <div className="mx-auto max-w-3xl">

        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Legal</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold md:text-4xl">
            Termeni și condiții
          </h1>
          <p className="mt-3 text-sm text-muted">
            Ultima actualizare: <time dateTime="2026-03-31">{lastUpdated}</time>
          </p>
          <p className="mt-4 text-muted">
            Prezentul document reglementează relația contractuală dintre{' '}
            <strong className="text-text">SDG PRINT & Design</strong> (prestator) și
            persoanele fizice sau juridice care utilizează serviciile noastre (client).
            Prin plasarea unei comenzi sau a unei cereri de ofertă, clientul acceptă
            integral acești termeni și condiții.
          </p>
        </div>

        <div className="space-y-10">

          {/* 1 */}
          <section aria-labelledby="t1">
            <h2 id="t1" className="mb-3 font-heading text-xl font-semibold text-text">
              1. Părțile contractante
            </h2>
            <div className="rounded-2xl border border-border bg-surface/30 p-5 text-sm text-muted">
              <p><strong className="text-text">Prestator:</strong> SDG PRINT & Design, Timișoara, România</p>
              <p className="mt-1"><strong className="text-text">Contact:</strong>{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>
                {' · '}
                <a href={`tel:${siteConfig.phone}`} className="text-primary hover:underline">{siteConfig.phone}</a>
              </p>
              <p className="mt-2"><strong className="text-text">Client:</strong> orice persoană fizică sau juridică care solicită sau achiziționează servicii de la SDG PRINT & Design.</p>
            </div>
          </section>

          {/* 2 */}
          <section aria-labelledby="t2">
            <h2 id="t2" className="mb-3 font-heading text-xl font-semibold text-text">
              2. Servicii oferite
            </h2>
            <p className="text-muted">SDG PRINT & Design prestează următoarele categorii de servicii:</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {[
                'Print UV direct pe perete și alte suprafețe rigide (beton, lemn, sticlă, metal, MDF)',
                'Gravare și debitare laser CO₂ pe lemn, acril, piele, textile, sticlă și alte materiale compatibile',
                'Print personalizat pe obiecte promoționale (căni, huse, etc.)',
                'Print personalizat pe textile (tricouri, hanorace, șepci)',
                'Design grafic și adaptare fișiere pentru producție',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted">
              Serviciile sunt prestate pe baza specificațiilor agreate prin cerere de ofertă, email
              sau formular de contact. Orice modificare față de specificațiile inițiale poate
              implica ajustarea prețului și/sau termenului de livrare.
            </p>
          </section>

          {/* 3 */}
          <section aria-labelledby="t3">
            <h2 id="t3" className="mb-3 font-heading text-xl font-semibold text-text">
              3. Procesul de comandă
            </h2>
            <ol className="space-y-3 text-sm text-muted">
              {[
                { nr: '01', titlu: 'Cerere de ofertă', desc: 'Clientul transmite specificațiile proiectului (dimensiuni, suprafață, design, termen) prin formular, email sau telefon.' },
                { nr: '02', titlu: 'Ofertă și confirmare', desc: 'SDG Print transmite oferta de preț în maxim 24–48h. Comanda este confirmată prin acordul explicit al clientului (email sau mesaj scris).' },
                { nr: '03', titlu: 'Avans și producție', desc: 'La confirmarea comenzii se solicită un avans de 50% din valoarea totală. Producția începe după achitarea avansului și aprobarea designului.' },
                { nr: '04', titlu: 'Aprobare design', desc: 'Clientul primește un mock-up sau proof digital spre aprobare înainte de executarea comenzii. Producția începe exclusiv după aprobarea scrisă.' },
                { nr: '05', titlu: 'Execuție și predare', desc: 'Lucrarea este executată conform specificațiilor aprobate și predată la termenul agreat. Soldul se achită la predare sau conform condițiilor agreate.' },
              ].map(({ nr, titlu, desc }) => (
                <li key={nr} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-heading text-sm font-bold text-primary">
                    {nr}
                  </span>
                  <div>
                    <p className="font-medium text-text">{titlu}</p>
                    <p className="mt-0.5 text-muted">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* 4 */}
          <section aria-labelledby="t4">
            <h2 id="t4" className="mb-3 font-heading text-xl font-semibold text-text">
              4. Prețuri și modalități de plată
            </h2>
            <p className="text-muted">
              Prețurile sunt comunicate prin ofertă personalizată și variază în funcție de tipul
              serviciului, dimensiuni, materiale și complexitate. Toate prețurile sunt exprimate
              în RON și pot include sau exclude TVA, conform specificației din ofertă.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { metoda: 'Transfer bancar', detalii: 'Cont comunicat în ofertă/factură' },
                { metoda: 'Card bancar', detalii: 'Prin POS sau link de plată online' },
                { metoda: 'Numerar', detalii: 'Doar la predarea lucrării, pentru comenzi sub 1.000 RON' },
                { metoda: 'Factură cu termen', detalii: 'Disponibilă pentru persoane juridice, la cerere' },
              ].map(({ metoda, detalii }) => (
                <div key={metoda} className="rounded-2xl border border-border bg-surface/30 p-4">
                  <p className="text-sm font-semibold text-text">{metoda}</p>
                  <p className="mt-1 text-xs text-muted">{detalii}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-muted">
              Neplata la termen a soldului poate atrage penalități de 0,1%/zi de întârziere și
              suspendarea predării lucrării.
            </p>
          </section>

          {/* 5 */}
          <section aria-labelledby="t5">
            <h2 id="t5" className="mb-3 font-heading text-xl font-semibold text-text">
              5. Termene de execuție
            </h2>
            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface/50">
                    <th className="px-4 py-3 text-left font-medium text-text">Serviciu</th>
                    <th className="px-4 py-3 text-left font-medium text-text">Termen standard</th>
                    <th className="px-4 py-3 text-left font-medium text-text">Termen urgent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ['Wall Print UV (până la 10 m²)', '2–3 zile lucrătoare', 'La cerere + tarif urgență'],
                    ['Gravare / debitare laser', '3–5 zile lucrătoare', 'La cerere + tarif urgență'],
                    ['Obiecte personalizate', '5–7 zile lucrătoare', 'Nu disponibil'],
                    ['Print textile', '5–7 zile lucrătoare', 'Nu disponibil'],
                    ['Design grafic', '1–2 zile lucrătoare', 'La cerere + tarif urgență'],
                  ].map(([serviciu, standard, urgent]) => (
                    <tr key={serviciu} className="text-muted">
                      <td className="px-4 py-3 font-medium text-text">{serviciu}</td>
                      <td className="px-4 py-3">{standard}</td>
                      <td className="px-4 py-3 text-xs">{urgent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted">
              Termenele încep să curgă de la data aprobării designului și a achitării avansului,
              nu de la data cererii de ofertă. Termenele pot varia pentru proiecte de mari
              dimensiuni sau cu specificații complexe.
            </p>
          </section>

          {/* 6 */}
          <section aria-labelledby="t6">
            <h2 id="t6" className="mb-3 font-heading text-xl font-semibold text-text">
              6. Obligațiile clientului
            </h2>
            <ul className="space-y-2 text-sm text-muted">
              {[
                'Furnizarea fișierelor grafice în formatele și la rezoluțiile solicitate (PDF, AI, PSD, PNG min. 150 DPI la scară 1:1, profil culoare CMYK).',
                'Pregătirea suprafeței de print conform instrucțiunilor transmise (perete curat, uscat, fără grunduit recent).',
                'Asigurarea accesului la locație în ziua execuției la ora agreată.',
                'Comunicarea oricărei modificări față de specificațiile inițiale cu minimum 48h înainte de producție.',
                'Aprobarea proofului digital înainte de producție — comenzile fără aprobare nu vor fi executate.',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 7 */}
          <section aria-labelledby="t7">
            <h2 id="t7" className="mb-3 font-heading text-xl font-semibold text-text">
              7. Garanție și reclamații
            </h2>
            <p className="text-muted">
              SDG PRINT & Design garantează conformitatea lucrărilor cu specificațiile aprobate
              de client. În cazul unor defecțiuni cauzate exclusiv de erori de execuție din
              partea noastră:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>Refacerea gratuită a lucrării în termen de 10 zile lucrătoare de la sesizare.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>Reclamațiile se transmit în scris (email) în maxim <strong className="text-text">5 zile calendaristice</strong> de la predarea lucrării, însoțite de fotografii ale defecțiunii.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>Garanția nu acoperă: deteriorări cauzate de intervenții ulterioare ale clientului, condiții improprii de mediu (umiditate extremă, substanțe chimice), sau discrepanțe față de proofurile aprobate.</span>
              </li>
            </ul>
            <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-muted">
              <strong className="text-text">Anularea comenzii:</strong> Comenzile anulate după aprobarea designului și începerea producției atrag reținerea avansului. Comenzile anulate înainte de aprobare beneficiază de rambursarea integrală a avansului.
            </div>
          </section>

          {/* 8 */}
          <section aria-labelledby="t8">
            <h2 id="t8" className="mb-3 font-heading text-xl font-semibold text-text">
              8. Proprietate intelectuală
            </h2>
            <p className="text-muted">
              Clientul garantează că deține drepturile de utilizare a tuturor materialelor grafice
              furnizate (logo-uri, fotografii, ilustrații, fonturi). SDG PRINT & Design nu este
              responsabilă pentru încălcarea drepturilor de autor cauzată de materialele furnizate
              de client.
            </p>
            <p className="mt-3 text-muted">
              Designurile create de SDG Print la solicitarea clientului rămân proprietatea
              clientului după achitarea integrală a comenzii. SDG Print îți rezervă dreptul de
              a utiliza imaginile lucrărilor finalizate în scop de promovare, cu excepția cazurilor
              în care clientul solicită explicit confidențialitate.
            </p>
          </section>

          {/* 9 */}
          <section aria-labelledby="t9">
            <h2 id="t9" className="mb-3 font-heading text-xl font-semibold text-text">
              9. Limitarea răspunderii
            </h2>
            <p className="text-muted">
              Răspunderea SDG PRINT & Design este limitată la valoarea lucrării contractate.
              Nu ne asumăm răspunderea pentru:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {[
                'Daune indirecte, pierderi de profit sau oportunități de afaceri ale clientului.',
                'Întârzieri cauzate de forță majoră (calamități, greve, restricții guvernamentale).',
                'Rezultate diferite față de proofurile digitale cauzate de calibrarea monitoarelor clientului.',
                'Deteriorări ale suprafeței pre-existente descoperite în timpul execuției.',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/60" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 10 — ANPC */}
          <section aria-labelledby="t10">
            <h2 id="t10" className="mb-3 font-heading text-xl font-semibold text-text">
              10. Soluționarea litigiilor — ANPC
            </h2>
            <p className="text-muted">
              Orice litigiu se va soluționa cu prioritate pe cale amiabilă. În cazul în care
              aceasta nu este posibilă, consumatorul (persoana fizică) poate apela la:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href="https://anpc.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-primary/20 bg-primary/5 p-4 transition hover:border-primary/40"
              >
                <p className="text-sm font-semibold text-primary">ANPC</p>
                <p className="mt-1 text-xs text-muted">Autoritatea Națională pentru Protecția Consumatorilor — anpc.ro</p>
              </a>
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-accent/20 bg-accent/5 p-4 transition hover:border-accent/40"
              >
                <p className="text-sm font-semibold text-accent">SAL / ODR</p>
                <p className="mt-1 text-xs text-muted">Platforma europeană de soluționare alternativă a litigiilor online.</p>
              </a>
            </div>
          </section>

          {/* 11 */}
          <section aria-labelledby="t11">
            <h2 id="t11" className="mb-3 font-heading text-xl font-semibold text-text">
              11. Legea aplicabilă
            </h2>
            <p className="text-muted">
              Prezentul contract este guvernat de legislația română. Instanțele competente sunt
              cele de la sediul prestatorului, cu excepția cazurilor în care legea prevede altfel
              pentru consumatori.
            </p>
          </section>

          {/* 12 */}
          <section aria-labelledby="t12">
            <h2 id="t12" className="mb-3 font-heading text-xl font-semibold text-text">
              12. Modificări ale termenilor
            </h2>
            <p className="text-muted">
              SDG PRINT & Design își rezervă dreptul de a modifica acești termeni. Versiunea
              actualizată va fi publicată pe site cu data modificării. Comenzile plasate anterior
              modificării sunt guvernate de termenii în vigoare la data plasării.
            </p>
          </section>

        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8 text-sm text-muted">
          <Link href="/privacy" className="hover:text-primary hover:underline">Politica de confidențialitate</Link>
          <Link href="/cookies" className="hover:text-primary hover:underline">Politica de cookies</Link>
          <Link href="/pregatire-fisiere" className="hover:text-primary hover:underline">Pregătire fișiere</Link>
          <Link href="/contact" className="hover:text-primary hover:underline">Contact</Link>
        </div>
      </div>
    </Section>
  );
}
