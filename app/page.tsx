import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard, TestimonialCard } from '@/components/cards';
import { BeforeAfterCard } from '@/components/BeforeAfterSlider';
import { beforeAfterItems } from '@/content/beforeAfter';
import { services } from '@/content/services';
import { testimonials } from '@/content/testimonials';

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay" aria-hidden />
        <div className="section-container relative py-24 md:py-32">
          <Reveal>
            <h1 className="max-w-4xl font-heading text-4xl font-bold md:text-6xl">
              Print direct pe perete. Personalizare fără limite. Impact
              garantat.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Wall print pe orice suprafață + textile și obiecte personalizate.
              Timișoara & România.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Cere ofertă personalizată
              </Link>
              <Link href="/portofoliu" className="btn-secondary">
                Vezi portofoliul
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
              <span className="rounded-full border border-slate-700 px-4 py-2">
                Timișoara & RO
              </span>
              <span className="rounded-full border border-slate-700 px-4 py-2">
                Design inclus
              </span>
              <span className="rounded-full border border-slate-700 px-4 py-2">
                Execuție rapidă
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-container">
        <SectionHeading
          title="Servicii principale"
          subtitle="Soluții complete de personalizare pentru spații, branduri și evenimente."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionHeading
          title="Înainte / După"
          subtitle="Vezi transformările reale ale proiectelor noastre."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {beforeAfterItems.map((item) => (
            <BeforeAfterCard key={item.id} item={item} />
          ))}
        </div>
        <Link href="/before-after" className="btn-secondary mt-8">
          Vezi toate transformările
        </Link>
      </section>

      <section className="section-container">
        <SectionHeading title="Proces simplu, clar, rapid" />
        <div className="grid gap-4 md:grid-cols-4">
          {[
            'Ne trimiți detaliile',
            'Validăm designul',
            'Programăm execuția',
            'Printăm & predăm',
          ].map((step, index) => (
            <article key={step} className="card-premium p-5">
              <p className="text-sm text-accent">Pasul {index + 1}</p>
              <h3 className="mt-2 font-medium">{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionHeading title="Ce spun clienții" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <CTASection
        title="Ai un spațiu de transformat?"
        description="Trimite-ne detaliile proiectului și primești rapid o ofertă personalizată, transparentă și potrivită bugetului tău."
      />
    </>
  );
}
