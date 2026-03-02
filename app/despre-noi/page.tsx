import type { Metadata } from 'next';
import Image from 'next/image';
import { CTASection } from '@/components/CTASection';
import { SectionHeading } from '@/components/SectionHeading';
import { TypeLoopWord } from '@/components/TypeLoopWord';
import { canonical } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Despre Noi',
  description: 'Povestea SDG PRINT & Design și tehnologia noastră de personalizare premium.',
  alternates: { canonical: canonical('/despre-noi') },
};

export default function AboutPage() {
  const heroWords = ['spații', 'tricouri', 'obiecte', 'căni', 'spații'];

  return (
    <>
      <section className="section-container">
        <div className="relative mb-10 max-w-3xl">
          <span
            className="bg-primary/10 pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-full blur-2xl"
            aria-hidden
          />
          <h1
            className="relative font-heading text-3xl font-semibold md:text-4xl"
            aria-label="Print care transformă spații în experiențe memorabile"
          >
            <span className="bg-gradient-to-r from-text via-cyan-100 to-text bg-clip-text text-transparent">
              Print care transformă{' '}
              <span className="inline-block text-primary">
                <TypeLoopWord words={heroWords} />
              </span>{' '}
              în experiențe memorabile
            </span>
          </h1>
          <div className="bg-primary/20 relative mt-3 h-1 w-24 overflow-hidden rounded" aria-hidden>
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary-2" />
          </div>
          <p className="mt-4 text-muted">
            Suntem o echipă din Timișoara care transformă idei în suprafețe cu impact vizual real.
          </p>
        </div>
        <p className="max-w-4xl text-muted">Construim proiecte de print premium pentru persoane fizice și companii din toată România. Punem accent pe calitatea execuției, design personalizat și suport rapid de la idee la implementare.</p>
      </section>

      <section className="section-container">
        <SectionHeading title="Tehnologie care face diferența" />
        <ul className="grid gap-4 text-muted md:grid-cols-2">
          <li className="card-premium p-5">Print UV direct pe suprafață</li>
          <li className="card-premium p-5">Durabilitate și culori vibrante</li>
          <li className="card-premium p-5">Fără tapet sau folie</li>
          <li className="card-premium p-5">Rezultate premium, curate</li>
        </ul>
      </section>

      <section className="section-container">
        <SectionHeading title="De ce să ne alegi" />
        <ul className="list-disc space-y-3 pl-6 text-muted">
          <li>Versatilitate totală</li>
          <li>Design personalizat</li>
          <li>Rapiditate</li>
          <li>Servicii pentru persoane fizice și companii</li>
        </ul>
      </section>

      <section className="section-container">
        <SectionHeading title="Galerie echipamente & proces" />
        <div className="grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((img) => (
            <Image key={img} src={`/images/process/process-${img}.svg`} alt={`Proces ${img}`} width={700} height={500} className="card-premium h-60 w-full object-cover" />
          ))}
        </div>
      </section>

      <CTASection title="Vrei să discutăm proiectul tău?" description="Suntem gata să îți propunem cea mai bună soluție de print personalizat." />
    </>
  );
}
