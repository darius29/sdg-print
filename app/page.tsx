import Link from 'next/link';
import { HomeHero } from '@/components/HomeHero';
import { CTASection } from '@/components/CTASection';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard, TestimonialCard } from '@/components/cards';
import { BeforeAfterCard } from '@/components/BeforeAfterSlider';
import {
  HowItWorksSection,
  ProductShowcaseSection,
  TechFeatureSplitSection,
} from '@/components/sections/PageSections';
import { beforeAfterItems } from '@/content/beforeAfter';
import { services } from '@/content/services';
import { testimonials } from '@/content/testimonials';

const wallPrintCapabilities = [
  {
    title: 'Aliniere precisă',
    description: 'Sistem optic pentru aliniere perfectă pe suprafață.',
  },
  {
    title: 'Rezoluție înaltă',
    description: 'Detalii fine și culori consistente, până la 2880 DPI.',
  },
  {
    title: 'Cerneluri UV durabile',
    description: 'Rezistență sporită la zgârieturi, lumină și umezeală.',
  },
  {
    title: 'Multi-suprafețe',
    description: 'Print pe beton, cărămidă, lemn, sticlă sau metal.',
  },
  {
    title: 'Low-odor, non-toxic',
    description: 'Potrivit pentru spații interioare comerciale sau rezidențiale.',
  },
  {
    title: 'Flux eficient',
    description: 'Configurare rapidă și execuție accelerată în teren.',
  },
];

const laserEngravingBenefits = [
  'Precizie ridicată pentru detalii fine',
  'Gravură permanentă, fără uzură în timp',
  'Aspect profesional pentru branding',
  'Personalizare completă pentru fiecare comandă',
];

const objectAndTextileProducts = [
  {
    title: 'Căni personalizate',
    useCases: 'Branding, cadouri corporate, activări de brand.',
  },
  {
    title: 'Tricouri',
    useCases: 'Echipă internă, promoții, merch de campanie.',
  },
  {
    title: 'Hanorace',
    useCases: 'Merch premium, colecții capsule, confort zilnic.',
  },
  {
    title: 'Șepci',
    useCases: 'Evenimente, promo outdoor, uniformizare echipe.',
  },
];

const executionSteps = ['Consultare', 'Design personalizat', 'Print', 'Predare & montaj'];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section-container">
        <SectionHeading
          title="Serviciile noastre"
          subtitle="Alege categoria potrivită proiectului tău și vezi rapid soluțiile noastre de personalizare."
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
          subtitle="Transformări reale pentru spații comerciale, birouri și locații premium."
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

      <TechFeatureSplitSection />

      <HowItWorksSection />

      <ProductShowcaseSection />

      <section className="section-container">
        <SectionHeading
          title="Precizie, viteză și culori care rămân impecabile"
          subtitle="Tehnologie wall print cu cerneluri UV durabile, optimizată pentru multiple suprafețe."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {wallPrintCapabilities.map((feature) => (
            <article key={feature.title} className="card-premium p-5">
              <h3 className="font-heading text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionHeading title="Cum funcționează" />
        <div className="grid gap-4 md:grid-cols-4">
          {executionSteps.map((step, index) => (
            <article key={step} className="card-premium p-5">
              <p className="text-sm text-accent">Pasul {index + 1}</p>
              <h3 className="mt-2 font-medium">{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionHeading
          title="Gravură laser personalizată"
          subtitle="Realizăm gravură de înaltă precizie pe lemn, MDF, acril, piele și alte materiale compatibile."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <article className="card-premium p-6">
            <h3 className="font-heading text-lg font-semibold">Materiale compatibile</h3>
            <p className="mt-2 text-sm text-muted">
              Lemn, MDF, acril, piele, placaj și materiale speciale pentru
              semnalistică, gifting și branding premium.
            </p>
          </article>
          <article className="card-premium p-6">
            <h3 className="font-heading text-lg font-semibold">De ce gravură laser?</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {laserEngravingBenefits.map((benefit) => (
                <li key={benefit}>• {benefit}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-container">
        <SectionHeading
          title="Print personalizat pe obiecte & textile"
          subtitle="Produse ideale pentru branding, echipe, evenimente și cadouri corporate."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {objectAndTextileProducts.map((product) => (
            <article key={product.title} className="card-premium p-5">
              <h3 className="font-heading text-lg font-semibold">{product.title}</h3>
              <p className="mt-2 text-sm text-muted">{product.useCases}</p>
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
        title="Gata să îți transformi spațiul?"
        description="Trimite-ne o poză cu peretele sau produsul dorit și primești rapid ofertă personalizată + consultanță gratuită."
      />
    </>
  );
}
