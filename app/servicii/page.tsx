import type { Metadata } from 'next';
import { CTASection } from '@/components/CTASection';
import { SectionHeading } from '@/components/SectionHeading';
import { Section } from '@/components/sections/Section';
import { ServicesFilterSection, ServiceHighlightsSection } from '@/components/sections/PageSections';
import { services } from '@/content/services';
import { canonical } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Servicii',
  description: 'Servicii SDG PRINT: wall print, textile, obiecte promoționale și design personalizat.',
  alternates: { canonical: canonical('/servicii') },
};

export default function ServicesPage() {
  return (
    <>
      <Section variant="leftGlow">
        <SectionHeading title="Serviciile noastre" subtitle="De la pereți personalizați până la textile și obiecte promoționale." />
        <div className="space-y-6">
          {services.map((service) => (
            <article key={service.id} className="card-premium p-6">
              <h3 className="font-heading text-2xl">{service.title}</h3>
              <p className="mt-3 text-muted">{service.description}</p>
              <p className="mt-4 text-sm text-muted">Aplicabil pe: {service.applications.join(', ')}.</p>
            </article>
          ))}
        </div>
      </Section>

      <ServiceHighlightsSection />
      <ServicesFilterSection />

      <Section variant="rightGlow">
        <SectionHeading title="Proces detaliat în 4 pași" />
        <div className="grid gap-4 md:grid-cols-2">
          <article className="card-premium p-5"><h4 className="font-medium">1) Ne trimiți detaliile</h4><p className="mt-2 text-sm text-muted">Dimensiuni, suprafață, stil, termen și locație.</p></article>
          <article className="card-premium p-5"><h4 className="font-medium">2) Validăm designul</h4><p className="mt-2 text-sm text-muted">Adaptăm materialele grafice pentru un rezultat impecabil.</p></article>
          <article className="card-premium p-5"><h4 className="font-medium">3) Programăm execuția</h4><p className="mt-2 text-sm text-muted">Stabilim calendarul ideal și confirmăm toate detaliile.</p></article>
          <article className="card-premium p-5"><h4 className="font-medium">4) Printăm & predăm</h4><p className="mt-2 text-sm text-muted">Execuție atentă, curată, cu predare finală și recomandări.</p></article>
        </div>
      </Section>

      <CTASection title="Ai nevoie de un pachet personalizat?" description="Combinăm serviciile în funcție de obiectivele tale de branding sau amenajare." />
    </>
  );
}
