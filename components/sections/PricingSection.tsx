import Link from 'next/link';
import { SVGProps } from 'react';
import { Section } from '@/components/sections/Section';
import { SectionHeading } from '@/components/sections/SectionHeading';

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden {...props}>
    <path d="M5 12h14" />
  </svg>
);

const tiers = [
  {
    name: 'Esențial',
    price: '350',
    unit: 'lei / m²',
    subtitle: 'Ideal dacă ai fișierul gata de print',
    min: 'Minim 2 m²',
    badge: null,
    highlight: false,
    features: [
      'Print UV direct pe suprafață',
      'Fișier furnizat de client (PDF / AI / PNG HD)',
      'Perete, MDF, sticlă, metal, plastic',
      'Execuție în 48h',
      'Zona Timișoara inclusă',
    ],
    excluded: [
      'Adaptare / pregătire fișier',
      'Deplasare națională',
    ],
    cta: 'Cere ofertă',
    ctaStyle: 'btn-secondary' as const,
  },
  {
    name: 'Standard',
    price: '350',
    unit: 'lei / m² + design',
    subtitle: 'Print cu pregătire fișier și consultanță',
    min: 'Minim 3 m²',
    badge: 'Cel mai ales',
    highlight: true,
    features: [
      'Print UV direct pe suprafață',
      'Pregătire și adaptare fișier inclusă',
      'Consultanță suprafață și materiale',
      'Până la 2 revizii design',
      'Execuție în 48–72h',
      'Zona Timișoara + 50 km',
    ],
    excluded: [
      'Design grafic de la zero',
    ],
    cta: 'Cere ofertă',
    ctaStyle: 'btn-primary' as const,
  },
  {
    name: 'Corporate',
    price: 'Ofertă',
    unit: 'personalizată',
    subtitle: 'Proiecte mari, design complet, național',
    min: 'De la 10 m²',
    badge: null,
    highlight: false,
    features: [
      'Print UV direct pe suprafață',
      'Design grafic complet inclus',
      'Vizită de evaluare suprafață',
      'Execuție prioritară',
      'Deplasare națională inclusă',
      'Garanție execuție + retușuri',
      'Factură cu termen pentru firme',
    ],
    excluded: [],
    cta: 'Contactează-ne',
    ctaStyle: 'btn-secondary' as const,
  },
];

const notes = [
  'Prețurile sunt orientative și pot varia în funcție de suprafață, materiale și complexitate.',
  'Deplasarea în afara zonei menționate se tarifează separat (se stabilește la ofertă).',
  'Design grafic de la zero: tarif separat în funcție de complexitate și volum.',
  'Prețurile nu includ TVA. Emitem factură pentru persoane juridice și fizice.',
];

export const PricingSection = () => (
  <Section variant="splitGlow">
    <SectionHeading
      eyebrow="Prețuri transparente"
      title="Cât costă un print UV?"
      description="Prețuri orientative pentru print UV direct pe perete și suprafețe rigide. Obții o ofertă exactă în câteva ore după ce ne trimiți detaliile proiectului."
    />

    <div className="grid gap-5 lg:grid-cols-3">
      {tiers.map((tier) => (
        <article
          key={tier.name}
          className={`card-premium relative flex flex-col overflow-visible p-0 ${
            tier.highlight
              ? 'border-primary/40 shadow-[0_0_48px_rgba(0,217,255,0.10)]'
              : ''
          }`}
        >
          {/* Popular badge */}
          {tier.badge && (
            <div className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2">
              <span
                className="rounded-full px-4 py-1 text-xs font-bold text-bg shadow-lg"
                style={{ background: 'linear-gradient(120deg, var(--primary), var(--accent))' }}
              >
                {tier.badge}
              </span>
            </div>
          )}

          {/* Header */}
          <div
            className={`rounded-t-2xl p-5 ${
              tier.highlight
                ? 'bg-primary/8 border-b border-primary/20'
                : 'bg-surface/40 border-b border-slate-700/40'
            }`}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              {tier.name}
            </p>

            <div className="mt-3 flex items-end gap-2 leading-none">
              <span
                className={`font-heading text-5xl font-bold tabular-nums ${
                  tier.highlight ? 'text-primary' : 'text-text'
                }`}
              >
                {tier.price}
              </span>
              <span className="mb-1 text-sm leading-tight text-muted">{tier.unit}</span>
            </div>

            <p className="mt-2 text-xs text-muted">{tier.subtitle}</p>

            <span className="mt-4 inline-block rounded-full border border-slate-700/80 bg-slate-800/60 px-3 py-1 text-[11px] text-muted">
              {tier.min}
            </span>
          </div>

          {/* Features list */}
          <div className="flex flex-1 flex-col gap-5 p-5">
            <ul className="flex-1 space-y-2.5">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                  <span
                    className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
                    aria-hidden
                  >
                    <CheckIcon />
                  </span>
                  {f}
                </li>
              ))}
              {tier.excluded.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted/40">
                  <span
                    className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-600"
                    aria-hidden
                  >
                    <MinusIcon />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <Link href="/contact" className={`${tier.ctaStyle} w-full justify-center`}>
              {tier.cta}
            </Link>
          </div>
        </article>
      ))}
    </div>

    {/* Disclaimer notes */}
    <div className="mt-8 rounded-2xl border border-slate-700/40 bg-surface/20 p-5">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
        Note importante
      </p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {notes.map((note) => (
          <li key={note} className="flex items-start gap-2 text-xs leading-relaxed text-muted">
            <span
              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/50"
              aria-hidden
            />
            {note}
          </li>
        ))}
      </ul>
    </div>
  </Section>
);
