'use client';

import Link from 'next/link';

const stats = [
  { display: '2880 DPI', label: 'Rezoluție maximă print' },
  { display: '48h', label: 'Livrare standard' },
  { display: '10+', label: 'Materiale compatibile' },
  { display: '2', label: 'Tehnologii de print' },
];

export const DespreNoiHero = () => {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-8 pt-16 md:px-8 md:pt-28">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, rgba(122,92,255,0.1), transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-[350px] w-[350px] rounded-full blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, rgba(0,217,255,0.07), transparent 70%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-24">
          {/* Brand mark + meta info — decorative, hidden on mobile */}
          <div className="hidden flex-col gap-10 lg:flex lg:pt-2">
            <div className="relative select-none">
              <p
                className="font-heading font-black leading-none text-text"
                style={{
                  fontSize: 'clamp(5.5rem, 11vw, 8.5rem)',
                  opacity: 0.04,
                }}
                aria-hidden
              >
                SDG
              </p>
              <div className="absolute inset-x-0 bottom-2">
                <p className="font-heading text-xl font-bold text-text">
                  SDG Print
                </p>
                <p className="text-sm text-muted">& Design</p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-muted/60 text-[10px] font-semibold uppercase tracking-[0.2em]">
                  Timp de livrare
                </p>
                <p className="mt-1 font-heading text-5xl font-bold text-text">
                  48h
                </p>
              </div>
              <div>
                <p className="text-muted/60 text-[10px] font-semibold uppercase tracking-[0.2em]">
                  Locație
                </p>
                <p className="mt-1 font-medium text-muted">
                  Timișoara, România
                </p>
              </div>
            </div>
          </div>

          {/* Heading + text + CTAs + stats */}
          <div>
            <h1 className="font-heading text-4xl font-bold leading-[1.1] text-text sm:text-5xl md:text-6xl">
              Pasiunea pentru print,{' '}
              <span className="text-primary">transpusă în fiecare proiect</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Suntem un atelier din Timișoara specializat în print UV direct pe
              suprafețe, gravare laser CO₂ și personalizare. Lucrăm cu atenție
              la detalii, echipamente moderne și un singur scop: rezultate care
              rămân.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Contactează-ne
              </Link>
              <Link href="/portofoliu" className="btn-secondary">
                Vezi portofoliul
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-bold text-text">
                    {stat.display}
                  </p>
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
