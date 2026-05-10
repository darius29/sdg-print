'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Section } from '@/components/sections/Section';
import { SectionHeading } from '@/components/sections/SectionHeading';

const MATERIALS = [
  { id: 'perete', label: 'Perete', multiplier: 1.0 },
  { id: 'mdf', label: 'MDF / PAL', multiplier: 1.05 },
  { id: 'sticla', label: 'Sticlă', multiplier: 1.15 },
  { id: 'metal', label: 'Metal', multiplier: 1.1 },
  { id: 'plastic', label: 'Plastic / Acril', multiplier: 1.05 },
];

const BASE_PRICE = 350;
const DESIGN_FEE = 350;
const RANGE_FACTOR = 0.2;

function fmt(n: number) {
  return new Intl.NumberFormat('ro-RO').format(Math.round(n));
}

export const PriceCalculator = () => {
  const [surface, setSurface] = useState(10);
  const [materialId, setMaterialId] = useState('perete');
  const [hasFisier, setHasFisier] = useState(true);

  const material = MATERIALS.find((m) => m.id === materialId)!;
  const minSurface = hasFisier ? 2 : 3;
  const s = Math.max(surface, minSurface);

  const base = s * BASE_PRICE * material.multiplier;
  const low = hasFisier ? base : base + DESIGN_FEE;
  const high = low * (1 + RANGE_FACTOR);

  return (
    <Section variant="meshSoft">
      <div className="section-surface">
        <SectionHeading
          eyebrow="Calculator orientativ"
          title="Estimează costul proiectului tău"
          description="Ajustează parametrii și obții o estimare instantanee. Oferta exactă o primești în câteva ore după ce ne contactezi."
        />

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_300px]">
          {/* Controls */}
          <div className="space-y-7">
            {/* Surface slider */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <label htmlFor="calc-surface" className="text-sm font-medium">
                  Suprafață
                </label>
                <span className="font-heading text-2xl font-bold tabular-nums text-primary">
                  {surface} m²
                </span>
              </div>
              <input
                id="calc-surface"
                type="range"
                min={2}
                max={50}
                value={surface}
                onChange={(e) => setSurface(Number(e.target.value))}
                className="calc-range w-full"
                aria-label="Suprafață în metri pătrați"
              />
              <div className="mt-2 flex justify-between text-xs text-muted">
                <span>2 m²</span>
                <span>50 m²</span>
              </div>
            </div>

            {/* Material */}
            <div>
              <p className="mb-3 text-sm font-medium">Material suprafață</p>
              <div className="flex flex-wrap gap-2">
                {MATERIALS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMaterialId(m.id)}
                    className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
                      materialId === m.id
                        ? 'border-primary bg-primary/10 text-primary shadow-[0_0_12px_rgba(0,217,255,0.15)]'
                        : 'border-border text-muted hover:border-primary/40 hover:text-text'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Has file toggle */}
            <div className="flex items-center justify-between rounded-xl border border-border bg-bg/50 px-5 py-4">
              <div>
                <p className="text-sm font-medium">Ai fișier gata de print?</p>
                <p className="mt-0.5 text-xs text-muted">
                  PDF / AI / PNG HD minim 150 DPI
                </p>
              </div>
              <button
                role="switch"
                aria-checked={hasFisier}
                aria-label="Ai fișier gata de print"
                onClick={() => setHasFisier((p) => !p)}
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                  hasFisier ? 'bg-primary' : 'bg-border'
                }`}
              >
                <span
                  className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${
                    hasFisier ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Breakdown legend */}
            <div className="rounded-xl border border-border/50 bg-bg/30 p-4 text-xs text-muted">
              <p className="mb-2 font-semibold uppercase tracking-[0.15em]">
                Din ce este compusă estimarea
              </p>
              <ul className="space-y-1.5">
                <li className="flex justify-between">
                  <span>
                    {s} m² × {BASE_PRICE} lei/m²
                  </span>
                  <span className="font-medium text-text">
                    {fmt(s * BASE_PRICE)} lei
                  </span>
                </li>
                {material.multiplier !== 1 && (
                  <li className="flex justify-between">
                    <span>Ajustare material ({material.label})</span>
                    <span className="font-medium text-text">
                      +{Math.round((material.multiplier - 1) * 100)}%
                    </span>
                  </li>
                )}
                {!hasFisier && (
                  <li className="flex justify-between">
                    <span>Pregătire / adaptare fișier</span>
                    <span className="font-medium text-text">
                      +{fmt(DESIGN_FEE)} lei
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Result card */}
          <div className="flex flex-col rounded-2xl border border-primary/25 bg-gradient-to-b from-primary/8 to-transparent p-6 shadow-[0_0_40px_rgba(0,217,255,0.08)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Estimare orientativă
            </p>

            <div className="mt-5 flex-1">
              <p className="font-heading text-4xl font-bold tabular-nums text-text">
                {fmt(low)}
              </p>
              <p className="mt-1 text-lg font-medium text-muted">
                – {fmt(high)} lei
              </p>
              <p className="mt-1 text-xs text-muted">fără TVA</p>
            </div>

            <div className="my-5 h-px w-full bg-border/50" />

            <ul className="space-y-2 text-xs text-muted">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Prețul final variază în funcție de detaliile suprafeței și complexitatea fișierului.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Oferta exactă o primești în câteva ore după completarea formularului.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Consultanță gratuită inclusă.
              </li>
            </ul>

            <Link href="/contact" className="btn-primary mt-6 w-full justify-center">
              Cere ofertă exactă
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};
