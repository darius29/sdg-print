'use client';

import Image from 'next/image';
import { useRef } from 'react';
import {
  BoltIcon,
  CheckIcon,
  CogIcon,
  LayersIcon,
  PaletteIcon,
  ShieldIcon,
  SparkIcon,
} from '@/components/sections/SectionIcons';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { useStickyScrollProgress } from '@/components/sections/useStickyScrollProgress';

const techFeatures = [
  {
    title: 'Control al densității',
    description: 'Ajustări fine pentru suprafețe absorbante sau lucioase.',
    icon: <CogIcon className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Fidelitate cromatică',
    description:
      'Profilare culoare pentru reproducere consistentă în campanii.',
    icon: <PaletteIcon className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Protecție UV',
    description:
      'Rezistență la soare și umiditate pentru spații cu trafic intens.',
    icon: <ShieldIcon className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Ritm de producție',
    description: 'Setare rapidă și execuție fluidă pentru termene scurte.',
    icon: <BoltIcon className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Adaptare suprafețe',
    description:
      'Rezultate stabile pe zidărie, metal, lemn sau materiale mixte.',
    icon: <LayersIcon className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Validare înainte de print',
    description:
      'Revizie vizuală în pre-producție pentru livrare fără surprize.',
    icon: <SparkIcon className="h-5 w-5" aria-hidden />,
  },
];

const keySpecs = [
  '2880 DPI',
  'UV Ink',
  'Low Odor',
  '290 cm înălțime',
  '2–6 m²/oră',
  'Multi-surface',
];

const bestForTags = ['HoReCa', 'Retail & showroom', 'Birouri & corporate'];

const statCards = [
  {
    label: 'Rezoluție',
    value: '2880 DPI',
    icon: <SparkIcon className="h-4 w-4" aria-hidden />,
  },
  {
    label: 'Înălțime max.',
    value: '290 cm',
    icon: <LayersIcon className="h-4 w-4" aria-hidden />,
  },
  {
    label: 'Viteză',
    value: '2–6 m²/h',
    icon: <BoltIcon className="h-4 w-4" aria-hidden />,
  },
  {
    label: 'Tehnologie',
    value: 'UV instant',
    icon: <CheckIcon className="h-4 w-4" aria-hidden />,
  },
];

export const TechFeatureSplitSectionContent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { progress, reducedMotion } = useStickyScrollProgress(sectionRef);

  return (
    <section ref={sectionRef} className="section-surface section-bloom">
      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading
            eyebrow="Wall print tech"
            title="Tehnologie optimizată pentru suprafețe reale"
            description="Echipamente calibrate pentru detalii curate, timpi rapizi și rezultate consistente în proiecte comerciale."
          />

          <div
            className="mb-4 flex flex-wrap gap-2"
            aria-label="Specificații cheie"
          >
            {keySpecs.map((spec) => (
              <span
                key={spec}
                className="bg-surface-2/70 text-secondary inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium tracking-wide"
              >
                {spec}
              </span>
            ))}
          </div>

          <div className="mb-3 text-sm text-muted">
            <span className="mr-2">Best for:</span>
            <span className="inline-flex flex-wrap gap-2 align-middle">
              {bestForTags.map((tag) => (
                <span
                  key={tag}
                  className="bg-surface-2/60 rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                >
                  • {tag}
                </span>
              ))}
            </span>
          </div>

          <div className="bg-surface-2/55 text-secondary mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs">
            <CheckIcon className="h-3.5 w-3.5 text-accent" aria-hidden />
            <span>Color calibration &amp; pre-check included</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {techFeatures.map((feature) => (
              <article
                key={feature.title}
                className="card-premium hover:border-accent/40 group rounded-2xl p-5 transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none"
                tabIndex={0}
              >
                <div className="border-border/80 group-hover:border-accent/50 group-hover:ring-accent/20 mb-3 inline-flex rounded-xl border bg-surface-2 p-2 text-accent shadow-sm ring-0 transition duration-300 group-hover:ring-2">
                  <span className="from-accent/20 to-accent/10 rounded-lg bg-gradient-to-br via-transparent p-1">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="bg-surface/70 border-border/90 relative overflow-hidden rounded-2xl border p-3 shadow-[0_20px_55px_rgba(2,6,23,0.22)]">
            <div className="bg-surface-2/80 text-secondary absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <SparkIcon className="h-3.5 w-3.5 text-accent" aria-hidden />
              Sistem calibrat pentru suprafețe reale
            </div>

            <Image
              src="/images/process/process-1.svg"
              alt="Sistem de print calibrat pentru detalii de înaltă rezoluție"
              width={900}
              height={640}
              className="h-auto w-full rounded-xl object-cover will-change-transform"
              style={
                reducedMotion
                  ? undefined
                  : { transform: `translateY(${(progress - 0.5) * 12}px)` }
              }
            />

            <div
              className="from-white/4 pointer-events-none inset-0 rounded-2xl bg-gradient-to-b via-transparent to-slate-950/40"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.06] mix-blend-soft-light"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 15%, #fff 0.7px, transparent 0.9px)',
                backgroundSize: '4px 4px',
              }}
              aria-hidden
            />
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {statCards.map((stat) => (
              <article key={stat.label} className="card-premium p-4">
                <div className="text-accent">{stat.icon}</div>
                <p className="mt-2 text-xs uppercase tracking-wider text-muted">
                  {stat.label}
                </p>
                <p className="mt-1 font-heading text-lg font-semibold">
                  {stat.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
