import Link from 'next/link';
import { HomeHero } from '@/components/sections/HomeHero';
import { CTASection } from '@/components/CTASection';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard, TestimonialCard } from '@/components/cards';
import { BeforeAfterCard } from '@/components/BeforeAfterSlider';
import { Reveal } from '@/components/Reveal';
import { Section } from '@/components/sections/Section';
import {
  HowItWorksSection,
  WallPrintSection,
  LaserCO2Section,
} from '@/components/sections/PageSections';
import { beforeAfterItems } from '@/content/beforeAfter';
import { services } from '@/content/services';
import { testimonials } from '@/content/testimonials';

export default function HomePage() {
  const primaryServices = services.slice(0, 2);
  const secondaryServices = services.slice(2);

  return (
    <>
      <HomeHero />

      {/* Services overview */}
      <Section variant="leftGlow">
        <div className="section-surface section-bloom">
          <SectionHeading
            title="Serviciile noastre"
            subtitle="Două tehnologii principale, o gamă completă de soluții vizuale pentru firme și spații comerciale."
          />

          {/* Primary services — large */}
          <div className="grid gap-5 md:grid-cols-2">
            {primaryServices.map((service, index) => (
              <Reveal key={service.id} delayMs={index * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>

          {/* Secondary services — smaller */}
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Servicii complementare
          </p>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            {secondaryServices.map((service, index) => (
              <Reveal key={service.id} delayMs={index * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Wall Print UV – full section */}
      <WallPrintSection />

      {/* Before / After */}
      <Section variant="rightGlow">
        <div className="section-surface">
          <SectionHeading
            title="Înainte / După"
            subtitle="Transformări reale pentru spații comerciale, birouri și locații premium."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {beforeAfterItems.map((item, index) => (
              <Reveal key={item.id} delayMs={index * 70}>
                <BeforeAfterCard item={item} />
              </Reveal>
            ))}
          </div>
          <Link href="/before-after" className="btn-secondary mt-8">
            Vezi toate transformările
          </Link>
        </div>
      </Section>

      {/* Laser CO2 – full section */}
      <LaserCO2Section />

      {/* How it works */}
      <HowItWorksSection />

      {/* Testimonials */}
      <Section variant="splitGlow">
        <div className="section-surface">
          <SectionHeading title="Ce spun clienții" />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.id} delayMs={index * 60}>
                <TestimonialCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Gata să îți transformi spațiul?"
        description="Trimite-ne o poză cu peretele sau produsul dorit și primești rapid ofertă personalizată + consultanță gratuită."
      />
    </>
  );
}
