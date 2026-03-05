import type { Metadata } from 'next';
import Image from 'next/image';
import { CTASection } from '@/components/CTASection';
import { SectionHeading } from '@/components/SectionHeading';
import { HomeHero } from '@/components/sections/HomeHero';
import { Section } from '@/components/sections/Section';
import { canonical } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Despre Noi',
  description: 'Povestea SDG PRINT & Design și tehnologia noastră de personalizare premium.',
  alternates: { canonical: canonical('/despre-noi') },
};

export default function AboutPage() {
  return (
    <>
      <HomeHero />

      <Section variant="leftGlow">
        <SectionHeading title="Tehnologie care face diferența" />
        <ul className="grid gap-4 text-muted md:grid-cols-2">
          <li className="card-premium p-5">Print UV direct pe suprafață</li>
          <li className="card-premium p-5">Durabilitate și culori vibrante</li>
          <li className="card-premium p-5">Fără tapet sau folie</li>
          <li className="card-premium p-5">Rezultate premium, curate</li>
        </ul>
      </Section>

      <Section variant="rightGlow">
        <SectionHeading title="De ce să ne alegi" />
        <ul className="list-disc space-y-3 pl-6 text-muted">
          <li>Versatilitate totală</li>
          <li>Design personalizat</li>
          <li>Rapiditate</li>
          <li>Servicii pentru persoane fizice și companii</li>
        </ul>
      </Section>

      <Section variant="meshSoft">
        <SectionHeading title="Galerie echipamente & proces" />
        <div className="grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((img) => (
            <Image
              key={img}
              src={`/images/process/process-${img}.svg`}
              alt={`Proces ${img}`}
              width={700}
              height={500}
              className="card-premium h-60 w-full object-cover"
            />
          ))}
        </div>
      </Section>

      <CTASection
        title="Vrei să discutăm proiectul tău?"
        description="Suntem gata să îți propunem cea mai bună soluție de print personalizat."
      />
    </>
  );
}
