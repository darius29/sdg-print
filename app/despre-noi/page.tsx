import type { Metadata } from 'next';
import { CTASection } from '@/components/CTASection';
import { DespreNoiHero } from '@/components/sections/DespreNoiHero';
import {
  AboutStorySection,
  AboutTechSection,
  AboutEquipmentSection,
  AboutComparisonSection,
  AboutGallerySection,
  AboutCoverageSection,
  AboutPortfolioPreview,
} from '@/components/sections/AboutSections';
import { canonical } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Despre Noi',
  description: 'Povestea SDG PRINT & Design — atelier de print UV și gravare laser din Timișoara. Echipamente, tehnologie și zonă de acoperire.',
  alternates: { canonical: canonical('/despre-noi') },
};

export default function AboutPage() {
  return (
    <>
      <DespreNoiHero />
      <AboutStorySection />
      <AboutTechSection />
      <AboutEquipmentSection />
      <AboutComparisonSection />
      <AboutGallerySection />
      <AboutCoverageSection />
      <AboutPortfolioPreview />
      <CTASection
        title="Vrei să discutăm proiectul tău?"
        description="Suntem gata să îți propunem cea mai bună soluție de print personalizat."
      />
    </>
  );
}
