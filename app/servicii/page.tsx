import type { Metadata } from 'next';
import { CTASection } from '@/components/CTASection';
import {
  ServicesHeroSection,
  ServicesAlternatingSection,
  ServicesTrustSection,
  ServicesFilterSection,
  ServicesProcessTimeline,
  WallPrintSection,
  LaserCO2Section,
} from '@/components/sections/PageSections';
import { canonical } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Servicii',
  description:
    'SDG PRINT Timișoara: print UV direct pe perete (wall printer), gravare și debitare laser CO₂, obiecte personalizate și design vizual.',
  alternates: { canonical: canonical('/servicii') },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesTrustSection />
      <WallPrintSection />
      <LaserCO2Section />
      <ServicesAlternatingSection />
      <ServicesFilterSection />
      <ServicesProcessTimeline />
      <CTASection
        title="Ai nevoie de un pachet personalizat?"
        description="Combinăm serviciile în funcție de obiectivele tale de branding sau amenajare. Consultanță gratuită + ofertă rapidă."
      />
    </>
  );
}
