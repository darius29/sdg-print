import Link from 'next/link';

export function HomeHero() {
  return (
    <section
      className="relative isolate flex min-h-[520px] items-center overflow-hidden px-4 py-16 md:min-h-[70vh] md:px-8 md:py-20 lg:min-h-[100vh]"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(6, 9, 16, 0.92) 10%, rgba(6, 9, 16, 0.62) 55%, rgba(6, 9, 16, 0.95) 100%), radial-gradient(circle at 82% 0%, rgba(0, 217, 255, 0.22), transparent 32%), radial-gradient(circle at 14% 88%, rgba(122, 92, 255, 0.2), transparent 34%), url('/images/home/hero.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.05)_0%,transparent_35%)]" aria-hidden />
      <div className="mx-auto w-full max-w-[880px]">
        <div className="card-premium border-white/20 bg-surface/60 p-6 text-center shadow-black/35 backdrop-blur-sm supports-[backdrop-filter]:backdrop-blur-xl md:p-10 lg:p-12">
          <h1 className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-tight text-text sm:text-5xl md:text-6xl">
            Print premium care transformă orice spațiu într-o experiență vizuală
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Livrăm proiecte de wall print și personalizare industrială cu
            finisaj impecabil, montaj rapid și impact memorabil pentru brandul
            tău.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Cere ofertă personalizată
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
