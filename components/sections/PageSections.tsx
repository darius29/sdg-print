import Image from 'next/image';
import Link from 'next/link';
import { Chip, PillButton } from '@/components/sections/Chip';
import { FeatureCard } from '@/components/sections/FeatureCard';
import { FilterTabs } from '@/components/sections/FilterTabs';
import { ProcessStep } from '@/components/sections/ProcessStep';
import {
  BoltIcon,
  CheckIcon,
  CogIcon,
  LayersIcon,
  PaletteIcon,
  ShieldIcon,
  SparkIcon,
} from '@/components/sections/SectionIcons';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { ShowcaseCard, ShowcaseRow } from '@/components/sections/ShowcaseCard';

const serviceCategories = [
  { label: 'Semnalistică', icon: <LayersIcon className="h-4 w-4" aria-hidden /> },
  { label: 'Gifting premium', icon: <SparkIcon className="h-4 w-4" aria-hidden /> },
  { label: 'Retail branding', icon: <PaletteIcon className="h-4 w-4" aria-hidden /> },
  { label: 'Corporate kits', icon: <ShieldIcon className="h-4 w-4" aria-hidden /> },
  { label: 'Prototipare rapidă', icon: <BoltIcon className="h-4 w-4" aria-hidden /> },
  { label: 'Serii scurte', icon: <CogIcon className="h-4 w-4" aria-hidden /> },
  { label: 'Cutii personalizate', icon: <LayersIcon className="h-4 w-4" aria-hidden /> },
  { label: 'Ediții limitate', icon: <SparkIcon className="h-4 w-4" aria-hidden /> },
];

const materials = ['Lemn', 'MDF', 'Acril', 'Sticlă', 'Piele', 'Anodizat', 'Plută', 'Aluminiu'];

const engravingBenefits = [
  'Fiabilitate pentru producție repetată',
  'Linii curate chiar și la dimensiuni mici',
  'Personalizare eficientă pe loturi mixte',
  'Integrare ușoară în identitatea vizuală',
];

const techFeatures = [
  {
    title: 'Control al densității',
    description: 'Ajustări fine pentru suprafețe absorbante sau lucioase.',
    icon: <CogIcon className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Fidelitate cromatică',
    description: 'Profilare culoare pentru reproducere consistentă în campanii.',
    icon: <PaletteIcon className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Protecție UV',
    description: 'Rezistență la soare și umiditate pentru spații cu trafic intens.',
    icon: <ShieldIcon className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Ritm de producție',
    description: 'Setare rapidă și execuție fluidă pentru termene scurte.',
    icon: <BoltIcon className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Adaptare suprafețe',
    description: 'Rezultate stabile pe zidărie, metal, lemn sau materiale mixte.',
    icon: <LayersIcon className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Validare înainte de print',
    description: 'Revizie vizuală în pre-producție pentru livrare fără surprize.',
    icon: <SparkIcon className="h-5 w-5" aria-hidden />,
  },
];

const processSteps = [
  {
    title: 'Discuție & obiective',
    description: 'Colectăm dimensiuni, context și direcția vizuală dorită pentru proiect.',
  },
  {
    title: 'Propunere creativă',
    description: 'Pregătim variante de design și recomandăm materialele potrivite.',
  },
  {
    title: 'Execuție & predare',
    description: 'Programăm producția și livrăm cu verificare finală a calității.',
  },
];

const serviceFilters = [
  { id: 'all', label: 'All' },
  { id: 'walls', label: 'Walls' },
  { id: 'objects', label: 'Objects' },
  { id: 'textiles', label: 'Textiles' },
  { id: 'design', label: 'Design' },
];

const filterServices = [
  {
    id: 'wall-print',
    title: 'Wall Print',
    description: 'Grafici de impact pentru birouri, retail și HoReCa.',
    category: 'walls',
    benefits: ['Aplicare fără folii', 'Detalii precise pe suprafețe mari', 'Cerneluri cu uscare UV'],
    icon: <LayersIcon className="h-5 w-5" aria-hidden />,
  },
  {
    id: 'promo-objects',
    title: 'Promo Objects',
    description: 'Produse personalizate pentru campanii și onboarding.',
    category: 'objects',
    benefits: ['Loturi flexibile', 'Branding consistent', 'Ambalare gata de livrare'],
    icon: <SparkIcon className="h-5 w-5" aria-hidden />,
  },
  {
    id: 'textile-print',
    title: 'Textile Print',
    description: 'Tricouri, hanorace și accesorii pentru echipe sau merch.',
    category: 'textiles',
    benefits: ['Texturi plăcute la purtare', 'Rezistență la spălări repetate', 'Culori vibrante'],
    icon: <ShieldIcon className="h-5 w-5" aria-hidden />,
  },
  {
    id: 'visual-design',
    title: 'Visual Design',
    description: 'Concept, adaptare și layout pentru print fizic.',
    category: 'design',
    benefits: ['Direcție artistică clară', 'Fișiere pregătite de producție', 'Aliniere cu brand guide'],
    icon: <PaletteIcon className="h-5 w-5" aria-hidden />,
  },
];

const showcaseRows = [
  {
    title: 'Uniforme textile',
    description: 'Seturi pentru echipe de retail și hospitality.',
    tag: 'Comfort',
    icon: <ShieldIcon className="h-4 w-4" aria-hidden />,
  },
  {
    title: 'Pachete corporate',
    description: 'Notebook, cană și accesorii în identitate unitară.',
    tag: 'Business',
    icon: <LayersIcon className="h-4 w-4" aria-hidden />,
  },
  {
    title: 'Colecții promo',
    description: 'Produse pentru lansări, târguri și activări sezoniere.',
    tag: 'Popular',
    icon: <SparkIcon className="h-4 w-4" aria-hidden />,
  },
  {
    title: 'Merch creativ',
    description: 'Serii limitate cu elemente de design custom.',
    tag: 'Limited',
    icon: <PaletteIcon className="h-4 w-4" aria-hidden />,
  },
];

const statCards = [
  { label: 'Rezoluție', value: '2880 DPI', icon: <SparkIcon className="h-4 w-4" aria-hidden /> },
  { label: 'Cerneluri', value: 'UV+ Low Odor', icon: <ShieldIcon className="h-4 w-4" aria-hidden /> },
  { label: 'Setup', value: '≤ 30 min', icon: <BoltIcon className="h-4 w-4" aria-hidden /> },
];

export const ServiceHighlightsSection = () => (
  <SectionContainer>
    <SectionHeading
      centered
      eyebrow="Laser engraving"
      title="Categorii rapide pentru gravură personalizată"
      description="Selectează rapid tipul de proiect și verifică materialele pe care lucrăm cel mai des."
    />

    <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {serviceCategories.map((category) => (
        <PillButton key={category.label} label={category.label} icon={category.icon} className="justify-center" />
      ))}
    </div>

    <div className="mt-10 card-premium p-6">
      <h3 className="font-heading text-xl font-semibold">Materiale compatibile</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {materials.map((material) => (
          <Chip key={material} label={material} />
        ))}
      </div>
    </div>

    <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {engravingBenefits.map((benefit) => (
        <article key={benefit} className="card-premium flex items-start gap-2 p-4">
          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
          <p className="text-sm text-muted">{benefit}</p>
        </article>
      ))}
    </div>
  </SectionContainer>
);

export const TechFeatureSplitSection = () => (
  <SectionContainer>
    <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <SectionHeading
          eyebrow="Wall print tech"
          title="Tehnologie optimizată pentru suprafețe reale"
          description="Echipamente calibrate pentru detalii curate, timpi rapizi și rezultate consistente în proiecte comerciale."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {techFeatures.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>

      <div>
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-surface/60 p-3 shadow-xl">
          <Image
            src="/images/process/process-1.svg"
            alt="Sistem de print calibrat pentru detalii de înaltă rezoluție"
            width={900}
            height={640}
            className="h-auto w-full rounded-xl object-cover"
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_-90px_120px_rgba(2,6,23,0.4)]" aria-hidden />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {statCards.map((stat) => (
            <article key={stat.label} className="card-premium p-4">
              <div className="text-accent">{stat.icon}</div>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted">{stat.label}</p>
              <p className="mt-1 font-heading text-lg font-semibold">{stat.value}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </SectionContainer>
);

export const HowItWorksSection = () => (
  <SectionContainer>
    <SectionHeading
      eyebrow="How it works"
      title="Un proces simplu, clar și previzibil"
      description="Fiecare etapă este documentată, ca să ai control complet de la brief la livrare."
    />

    <ol className="space-y-4">
      {processSteps.map((step, index) => (
        <ProcessStep key={step.title} index={index} title={step.title} description={step.description} />
      ))}
    </ol>

    <Link href="/contact" className="btn-primary mt-8" aria-label="Solicită oferta pentru proiectul tău">
      Începe proiectul
    </Link>
  </SectionContainer>
);

export const ServicesFilterSection = () => (
  <SectionContainer>
    <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
      <SectionHeading
        className="mb-0"
        eyebrow="Services our"
        title="Servicii construite pentru branding memorabil"
        description="Filtrează rapid tipurile de servicii și găsește combinația potrivită pentru proiectul tău."
      />
    </div>

    <FilterTabs filters={serviceFilters} items={filterServices} />
  </SectionContainer>
);

export const ProductShowcaseSection = () => (
  <SectionContainer>
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <SectionHeading
        className="mb-0"
        eyebrow="Objects & textiles"
        title="Categorii populare pentru obiecte și textile"
        description="Mixăm funcționalitatea cu designul pentru produse care se remarcă imediat."
      />
      <Link href="/contact" className="btn-primary self-start" aria-label="Solicită o ofertă pentru obiecte și textile">
        Request quote
      </Link>
    </div>

    <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <ShowcaseCard
        icon={<SparkIcon className="h-5 w-5" aria-hidden />}
        title="Colecții promoționale complete"
        description="De la pachete de onboarding la cadouri corporate, fiecare produs este coordonat vizual și livrat rapid."
        badges={['Fast delivery', 'Durable print', 'Vibrant colors']}
      />
      <div className="space-y-3">
        {showcaseRows.map((row) => (
          <ShowcaseRow key={row.title} icon={row.icon} title={row.title} description={row.description} tag={row.tag} />
        ))}
      </div>
    </div>
  </SectionContainer>
);
