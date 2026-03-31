import Link from 'next/link';

const highlights = [
  { label: 'Print direct pe suprafață' },
  { label: 'Culori vii CMYK' },
  { label: 'Tehnologie UV instant' },
  { label: 'Materiale multiple' },
];

export function HomeHero() {
  return (
    <section
      className="relative isolate flex min-h-[580px] items-center overflow-hidden px-4 py-20 md:min-h-[80vh] md:px-8 md:py-24 lg:min-h-[100vh]"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(6,9,16,0.94) 0%, rgba(6,9,16,0.72) 50%, rgba(6,9,16,0.96) 100%), radial-gradient(circle at 82% 0%, rgba(0,217,255,0.22), transparent 32%), radial-gradient(circle at 14% 88%, rgba(122,92,255,0.2), transparent 34%), url('/images/home/hero.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.04)_0%,transparent_35%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            SDG Print — Timișoara
          </p>

          <h1 className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-[1.1] text-text sm:text-5xl md:text-6xl lg:text-7xl">
            Transformăm pereții și materialele în{' '}
            <span className="bg-gradient-to-r from-primary via-cyan-300 to-accent bg-clip-text text-transparent">
              produse vizuale cu impact
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Print UV direct pe perete, gravură și debitare laser CO₂, obiecte
            personalizate și branding vizual pentru firme, HoReCa, showroom-uri
            și spații comerciale.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Cere ofertă personalizată
            </Link>
            <Link href="/portofoliu" className="btn-secondary">
              Vezi portofoliul
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span className="text-xs font-medium leading-snug text-muted">
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
