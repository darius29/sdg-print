'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { CountUp } from '@/components/CountUp';

const stats = [
  { value: 5, suffix: '+', label: 'Ani de experiență' },
  { value: 500, suffix: '+', label: 'Proiecte finalizate' },
  { value: 200, suffix: '+', label: 'Clienți mulțumiți' },
  { value: 3, suffix: '', label: 'Echipamente UV' },
];

export const DespreNoiHero = () => {
  const [started, setStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative isolate flex min-h-[600px] items-center overflow-hidden px-4 py-24 md:min-h-[85vh] md:px-8"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(6,9,16,0.95) 0%, rgba(6,9,16,0.75) 50%, rgba(6,9,16,0.97) 100%), radial-gradient(circle at 20% 10%, rgba(122,92,255,0.25), transparent 35%), radial-gradient(circle at 85% 80%, rgba(0,217,255,0.18), transparent 32%), url('/images/home/hero.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        aria-hidden
      />

      {/* Top gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg to-transparent" aria-hidden />

      <div className="relative mx-auto w-full max-w-4xl">
        <div className="flex flex-col items-center text-center">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Timișoara, România · Din 2020
            </span>
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-[1.1] text-text sm:text-5xl md:text-6xl">
            Pasiunea pentru print,{' '}
            <span className="bg-gradient-to-r from-accent via-cyan-300 to-primary bg-clip-text text-transparent">
              transpusă în fiecare proiect
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Suntem un atelier din Timișoara specializat în print UV direct pe
            suprafețe, gravare laser CO₂ și personalizare. Lucrăm cu atenție la
            detalii, echipamente moderne și un singur scop: rezultate care rămân.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contactează-ne
            </Link>
            <Link href="/portofoliu" className="btn-secondary">
              Vezi portofoliul
            </Link>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 bg-white/5 px-6 py-5 backdrop-blur-sm"
              >
                <span className="font-heading text-3xl font-bold text-text">
                  <CountUp end={stat.value} startAnimation={started} />
                  {stat.suffix}
                </span>
                <span className="text-xs font-medium text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" aria-hidden />
    </section>
  );
};
