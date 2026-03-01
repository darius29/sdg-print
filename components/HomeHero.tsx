import Link from 'next/link';

export function HomeHero() {
  return (
    <section
      className="relative isolate flex min-h-[520px] items-center overflow-hidden px-4 py-16 md:min-h-[70vh] md:px-8 md:py-20 lg:min-h-[78vh]"
      style={{
        backgroundImage:
          "linear-gradient(115deg, rgba(11, 15, 20, 0.86) 10%, rgba(11, 15, 20, 0.62) 55%, rgba(11, 15, 20, 0.9) 100%), radial-gradient(circle at center, rgba(11, 15, 20, 0.06) 35%, rgba(11, 15, 20, 0.6) 100%), url('/images/home/hero-printing.svg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="mx-auto w-full max-w-[880px]">
        <div className="rounded-2xl border border-white/20 bg-surface/55 p-6 text-center shadow-2xl shadow-black/35 backdrop-blur-sm supports-[backdrop-filter]:backdrop-blur-xl md:p-10 lg:p-12">
          <h1 className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-tight text-text sm:text-5xl md:text-6xl">
            Print premium care transformă orice spațiu într-o experiență vizuală
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Livrăm proiecte de wall print și personalizare industrială cu finisaj impecabil,
            montaj rapid și impact memorabil pentru brandul tău.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg">
              Cere ofertă personalizată
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
