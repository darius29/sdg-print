import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/sections/Section';

export const DespreNoiHero = () => (
  <Section variant="splitGlow">
    <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
      {/* Text */}
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          SDG Print & Design
        </p>
        <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-text via-cyan-100 to-text bg-clip-text text-transparent">
            Transformăm suprafețe în povești vizuale
          </span>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted">
          Suntem un atelier de print UV din Timișoara. Lucrăm cu pasiune pentru
          detalii, tehnologie modernă și un singur obiectiv: un rezultat care
          impresionează la prima vedere.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">
            Discută cu noi
          </Link>
          <Link href="/portofoliu" className="btn-secondary">
            Vezi portofoliul
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="relative flex-1">
        <div
          className="bg-primary/15 pointer-events-none absolute -left-6 -top-6 h-40 w-40 rounded-full blur-3xl"
          aria-hidden
        />
        <div
          className="bg-accent/10 pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 rounded-full blur-3xl"
          aria-hidden
        />
        <div className="border-primary/20 shadow-primary/10 relative overflow-hidden rounded-3xl border shadow-2xl">
          <Image
            src="/images/home/hero-printing.svg"
            alt="Atelier SDG Print — echipament de print UV"
            width={640}
            height={480}
            className="h-72 w-full object-cover md:h-[420px]"
            priority
          />
          <div className="from-bg/50 absolute inset-0 bg-gradient-to-tr via-transparent to-transparent" />
        </div>
      </div>
    </div>
  </Section>
);
