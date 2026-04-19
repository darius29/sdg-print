import Link from 'next/link';
import { Chip, PillButton } from '@/components/sections/Chip';
import { FilterTabs } from '@/components/sections/FilterTabs';
import { ProcessStep } from '@/components/sections/ProcessStep';
import { TechFeatureSplitSectionContent } from '@/components/sections/TechFeatureSplitSection';
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
import { services } from '@/content/services';
import { ServicesInteractive as ServicesInteractiveComponent } from '@/components/sections/ServicesInteractive';

const serviceCategories = [
  {
    label: 'Semnalistică',
    icon: <LayersIcon className="h-4 w-4" aria-hidden />,
  },
  {
    label: 'Gifting premium',
    icon: <SparkIcon className="h-4 w-4" aria-hidden />,
  },
  {
    label: 'Retail branding',
    icon: <PaletteIcon className="h-4 w-4" aria-hidden />,
  },
  {
    label: 'Corporate kits',
    icon: <ShieldIcon className="h-4 w-4" aria-hidden />,
  },
  {
    label: 'Prototipare rapidă',
    icon: <BoltIcon className="h-4 w-4" aria-hidden />,
  },
  { label: 'Serii scurte', icon: <CogIcon className="h-4 w-4" aria-hidden /> },
  {
    label: 'Cutii personalizate',
    icon: <LayersIcon className="h-4 w-4" aria-hidden />,
  },
  {
    label: 'Ediții limitate',
    icon: <SparkIcon className="h-4 w-4" aria-hidden />,
  },
];

const materials = [
  'Lemn',
  'MDF',
  'Placaj',
  'Acril / Plexiglas',
  'Sticlă',
  'Piele',
  'Cauciuc',
  'Textile',
  'Hârtie & Carton',
  'Plăci bicolore',
  'Plastic',
  'Silicon',
];

const engravingBenefits = [
  'Fiabilitate pentru producție repetată',
  'Linii curate chiar și la dimensiuni mici',
  'Personalizare eficientă pe loturi mixte',
  'Integrare ușoară în identitatea vizuală',
];

const processSteps = [
  {
    title: 'Discuție & obiective',
    description:
      'Colectăm dimensiuni, context și direcția vizuală dorită pentru proiect.',
  },
  {
    title: 'Propunere creativă',
    description:
      'Pregătim variante de design și recomandăm materialele potrivite.',
  },
  {
    title: 'Execuție & predare',
    description:
      'Programăm producția și livrăm cu verificare finală a calității.',
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
    benefits: [
      'Aplicare fără folii',
      'Detalii precise pe suprafețe mari',
      'Cerneluri cu uscare UV',
    ],
    icon: <LayersIcon className="h-5 w-5" aria-hidden />,
  },
  {
    id: 'promo-objects',
    title: 'Promo Objects',
    description: 'Produse personalizate pentru campanii și onboarding.',
    category: 'objects',
    benefits: [
      'Loturi flexibile',
      'Branding consistent',
      'Ambalare gata de livrare',
    ],
    icon: <SparkIcon className="h-5 w-5" aria-hidden />,
  },
  {
    id: 'textile-print',
    title: 'Textile Print',
    description: 'Tricouri, hanorace și accesorii pentru echipe sau merch.',
    category: 'textiles',
    benefits: [
      'Texturi plăcute la purtare',
      'Rezistență la spălări repetate',
      'Culori vibrante',
    ],
    icon: <ShieldIcon className="h-5 w-5" aria-hidden />,
  },
  {
    id: 'visual-design',
    title: 'Visual Design',
    description: 'Concept, adaptare și layout pentru print fizic.',
    category: 'design',
    benefits: [
      'Direcție artistică clară',
      'Fișiere pregătite de producție',
      'Aliniere cu brand guide',
    ],
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

export const ServiceHighlightsSection = () => (
  <SectionContainer variant="leftGlow">
    <SectionHeading
      centered
      eyebrow="Laser engraving"
      title="Categorii rapide pentru gravură personalizată"
      description="Selectează rapid tipul de proiect și verifică materialele pe care lucrăm cel mai des."
    />

    <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {serviceCategories.map((category) => (
        <PillButton
          key={category.label}
          label={category.label}
          icon={category.icon}
          className="justify-center"
        />
      ))}
    </div>

    <div className="card-premium mt-10 p-6">
      <h3 className="font-heading text-xl font-semibold">
        Materiale compatibile
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {materials.map((material) => (
          <Chip key={material} label={material} />
        ))}
      </div>
    </div>

    <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {engravingBenefits.map((benefit) => (
        <article
          key={benefit}
          className="card-premium flex items-start gap-2 p-4"
        >
          <CheckIcon
            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
            aria-hidden
          />
          <p className="text-sm text-muted">{benefit}</p>
        </article>
      ))}
    </div>
  </SectionContainer>
);

export const TechFeatureSplitSection = () => (
  <SectionContainer variant="splitGlow">
    <TechFeatureSplitSectionContent />
  </SectionContainer>
);

export const HowItWorksSection = () => (
  <SectionContainer variant="meshSoft">
    <div className="section-surface">
      <SectionHeading
        eyebrow="How it works"
        title="Un proces simplu, clar și previzibil"
        description="Fiecare etapă este documentată, ca să ai control complet de la brief la livrare."
      />

      <ol className="space-y-4">
        {processSteps.map((step, index) => (
          <ProcessStep
            key={step.title}
            index={index}
            title={step.title}
            description={step.description}
          />
        ))}
      </ol>

      <Link
        href="/contact"
        className="btn-primary mt-8"
        aria-label="Solicită oferta pentru proiectul tău"
      >
        Începe proiectul
      </Link>
    </div>
  </SectionContainer>
);

export const ServicesFilterSection = () => (
  <SectionContainer variant="rightGlow" className="section-bloom">
    <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
      <SectionHeading
        className="mb-0"
        eyebrow="Serviciile noastre"
        title="Servicii construite pentru branding memorabil"
        description="Filtrează rapid tipurile de servicii și găsește combinația potrivită pentru proiectul tău."
      />
    </div>

    <FilterTabs filters={serviceFilters} items={filterServices} />
  </SectionContainer>
);

const trustStats = [
  { value: '50+', label: 'Proiecte finalizate' },
  { value: '48h', label: 'Timp mediu de livrare' },
  { value: '100%', label: 'Clienți satisfăcuți' },
  { value: '4+', label: 'Ani de experiență' },
];

const processTimeline = [
  {
    num: '01',
    title: 'Ne trimiți detaliile',
    desc: 'Dimensiuni, suprafață, stil, termen și locație.',
  },
  {
    num: '02',
    title: 'Validăm designul',
    desc: 'Adaptăm materialele grafice pentru un rezultat impecabil.',
  },
  {
    num: '03',
    title: 'Programăm execuția',
    desc: 'Stabilim calendarul ideal și confirmăm toate detaliile.',
  },
  {
    num: '04',
    title: 'Printăm & predăm',
    desc: 'Execuție atentă, curată, cu predare finală și recomandări.',
  },
];

export const ServicesHeroSection = () => (
  <section
    className="relative isolate flex min-h-[580px] items-center overflow-hidden px-4 py-24 md:min-h-[80vh] md:px-8"
    style={{
      backgroundImage:
        "linear-gradient(135deg, rgba(6,9,16,0.96) 0%, rgba(6,9,16,0.74) 50%, rgba(6,9,16,0.97) 100%), radial-gradient(circle at 75% 15%, rgba(0,217,255,0.2), transparent 33%), radial-gradient(circle at 18% 85%, rgba(122,92,255,0.22), transparent 35%), url('/images/home/hero.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  >
    <div
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.03)_0%,transparent_40%)]"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg to-transparent"
      aria-hidden
    />

    <div className="relative mx-auto w-full max-w-5xl">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            SDG Print — Timișoara
          </span>
        </div>

        <h1 className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-[1.1] text-text sm:text-5xl md:text-6xl">
          Două tehnologii.{' '}
          <span className="bg-gradient-to-r from-primary via-cyan-300 to-accent bg-clip-text text-transparent">
            Rezultate de neratat.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Print UV direct pe perete și gravare / debitare laser CO₂ — plus
          obiecte personalizate și textile pentru branding complet.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Cere ofertă personalizată
          </Link>
          <Link href="/portofoliu" className="btn-secondary">
            Vezi portofoliu
          </Link>
        </div>

        <div className="mt-12 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              emoji: '🖨️',
              title: 'Print UV pe perete',
              desc: 'Direct pe suprafață, fără autocolant. Înălțime max. 290 cm, culori CMYK.',
              border: 'border-primary/30',
              bg: 'bg-primary/5',
            },
            {
              emoji: '⚡',
              title: 'Gravare laser CO₂',
              desc: 'Precizie industrială pe lemn, acril, piele, sticlă și multe altele.',
              border: 'border-accent/30',
              bg: 'bg-accent/5',
            },
            {
              emoji: '👕',
              title: 'Print textile',
              desc: 'Tricouri, hanorace și șepci personalizate pentru echipe și evenimente.',
              border: 'border-white/15',
              bg: 'bg-white/5',
            },
            {
              emoji: '🎁',
              title: 'Obiecte personalizate',
              desc: 'Căni, accesorii și produse promo cu print de înaltă calitate.',
              border: 'border-white/15',
              bg: 'bg-white/5',
            },
          ].map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl border ${s.border} ${s.bg} p-5 text-left backdrop-blur-sm`}
            >
              <p className="text-2xl">{s.emoji}</p>
              <h2 className="mt-2 font-heading text-base font-semibold text-text">
                {s.title}
              </h2>
              <p className="mt-1 text-sm text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent"
      aria-hidden
    />
  </section>
);

export const ServicesAlternatingSection = () => (
  <SectionContainer variant="default">
    <SectionHeading
      eyebrow="Ce oferim"
      title="Serviciile noastre"
      description="Selectează un serviciu pentru a vedea detaliile."
    />
    <ServicesInteractiveComponent />
  </SectionContainer>
);

export const ServicesTrustSection = () => (
  <SectionContainer variant="leftGlow">
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {trustStats.map((stat) => (
        <div key={stat.label} className="card-premium p-6 text-center">
          <p className="font-heading text-4xl font-bold text-primary">
            {stat.value}
          </p>
          <p className="mt-2 text-sm text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  </SectionContainer>
);

export const ServicesProcessTimeline = () => (
  <SectionContainer variant="rightGlow">
    <SectionHeading eyebrow="Cum lucrăm" title="Proces simplu în 4 pași" />

    {/* Desktop: horizontal */}
    <div className="relative hidden md:flex">
      <div
        className="from-primary/10 via-primary/50 to-primary/10 absolute left-8 right-8 top-8 h-px bg-gradient-to-r"
        aria-hidden
      />
      {processTimeline.map((step) => (
        <div
          key={step.num}
          className="relative flex flex-1 flex-col items-center px-4 text-center"
        >
          <div className="border-primary/40 shadow-primary/10 relative z-10 flex h-16 w-16 items-center justify-center rounded-full border bg-bg font-heading text-xl font-bold text-primary shadow-lg">
            {step.num}
          </div>
          <h3 className="mt-4 font-medium">{step.title}</h3>
          <p className="mt-2 text-sm text-muted">{step.desc}</p>
        </div>
      ))}
    </div>

    {/* Mobile: vertical */}
    <div className="relative flex flex-col md:hidden">
      <div
        className="from-primary/10 via-primary/50 to-primary/10 absolute bottom-8 left-8 top-8 w-px bg-gradient-to-b"
        aria-hidden
      />
      {processTimeline.map((step) => (
        <div key={step.num} className="flex gap-6 pb-10 last:pb-0">
          <div className="border-primary/40 shadow-primary/10 relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border bg-bg font-heading text-xl font-bold text-primary shadow-lg">
            {step.num}
          </div>
          <div className="pt-3">
            <h3 className="font-medium">{step.title}</h3>
            <p className="mt-1 text-sm text-muted">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionContainer>
);

/* ─────────────────────────────────────────────────────── Wall Print UV ─── */

const wallPrintSpecs = [
  { label: 'Înălțime maximă', value: '290 cm' },
  { label: 'Viteză print', value: '2–6 m²/oră' },
  { label: 'Tip print', value: 'Direct pe suprafață' },
  { label: 'Tehnologie', value: 'UV, uscare instant' },
  { label: 'Inaltime minima', value: 'De la 40cm' },
];

const wallPrintAdvantages = [
  'Print direct pe perete — fără folie, fără lipire',
  'Design permanent și rezistent la uzură',
  'Culori vii și realiste, sistem CMYK',
  'Execuție rapidă, fără deranj în spațiu',
  'Potrivit pentru spații comerciale și rezidențiale',
  'Fără miros neplăcut, non-toxic',
];

const wallPrintSurfaces = [
  'Pereți tencuiți / gletuiți',
  'Lemn și MDF',
  'Sticlă',
  'Metal',
  'Plastic rigid',
  'Beton',
];

const wallPrintUseCases = [
  { label: 'HoReCa', desc: 'Hoteluri, restaurante, cafenele' },
  { label: 'Birouri', desc: 'Showroom-uri și spații de lucru' },
  { label: 'Retail', desc: 'Magazine și spații comerciale' },
  { label: 'Educație', desc: 'Școli, săli de conferință' },
  { label: 'Rezidențial', desc: 'Decor interior premium' },
  { label: 'Industrial', desc: 'Spații de producție și depozite' },
];

const wallPrintCallouts = [
  {
    title: 'Transformă orice perete',
    body: 'Orice perete devine o operă de artă în câteva ore — fără autocolante, fără compromisuri.',
  },
  {
    title: 'Start rapid',
    body: 'Sistem complet disponibil, execuție rapidă, training inclus. Profit imediat din personalizare vizuală.',
  },
];

export const WallPrintSection = () => (
  <SectionContainer variant="splitGlow">
    <div className="section-surface section-bloom">
      <SectionHeading
        eyebrow="Print UV pe perete"
        title="Print UV direct pe perete"
        description="Realizăm print direct pe perete și pe alte suprafețe rigide, fără autocolant, fără lipire și fără compromisuri. Design permanent, rezistent și cu impact vizual puternic."
      />

      {/* Specs grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {wallPrintSpecs.map((spec) => (
          <article key={spec.label} className="card-premium p-4 text-center">
            <p className="font-heading text-lg font-bold text-primary">
              {spec.value}
            </p>
            <p className="mt-1 text-xs text-muted">{spec.label}</p>
          </article>
        ))}
      </div>

      {/* Advantages + surfaces */}
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="card-premium p-6">
          <h3 className="font-heading text-lg font-semibold">
            Avantaje principale
          </h3>
          <ul className="mt-4 space-y-2.5">
            {wallPrintAdvantages.map((adv) => (
              <li
                key={adv}
                className="flex items-start gap-2 text-sm text-muted"
              >
                <CheckIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden
                />
                <span>{adv}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <div className="card-premium p-6">
            <h3 className="font-heading text-lg font-semibold">
              Pe ce suprafețe printăm
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {wallPrintSurfaces.map((s) => (
                <Chip key={s} label={s} />
              ))}
            </div>
          </div>
          <div className="card-premium p-6">
            <h3 className="font-heading text-lg font-semibold">
              Unde se folosește
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {wallPrintUseCases.map((uc) => (
                <div key={uc.label} className="flex items-start gap-2">
                  <span
                    className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  <div>
                    <p className="text-sm font-medium">{uc.label}</p>
                    <p className="text-xs text-muted">{uc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Callout cards */}
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {wallPrintCallouts.map((c) => (
          <article
            key={c.title}
            className="border-primary/20 bg-primary/5 rounded-2xl border p-5"
          >
            <h4 className="font-heading text-base font-semibold text-primary">
              {c.title}
            </h4>
            <p className="mt-2 text-sm text-muted">{c.body}</p>
          </article>
        ))}
      </div>

      <Link href="/contact" className="btn-primary mt-8">
        Cere ofertă pentru wall print
      </Link>
    </div>
  </SectionContainer>
);

/* ──────────────────────────────────────────────────── Laser CO₂ Section ─── */

const laserMaterials = [
  'Lemn (MDF, placaj, masiv)',
  'Plexiglas / Acril',
  'Piele naturală și ecologică',
  'Hârtie și carton',
  'Textile (bumbac, poliester)',
  'Cauciuc (ștampile)',
  'Plastic (anumite tipuri)',
  'Sticlă (gravare)',
  'Plăci bicolore',
  'Silicon',
];

const laserServices = [
  'Cadouri personalizate (cutii, rame, trofee)',
  'Produse corporate (logo pe lemn / acril)',
  'Agende și portofele gravate',
  'Litere volumetrice',
  'Plăcuțe firme și semnalistică',
  'Decupaje precise și prototipuri',
  'Ștampile din cauciuc',
  'Gravură pe sticlă și piele',
  'Elemente decorative',
];

const laserBenefits = [
  {
    title: 'Precizie ridicată',
    desc: 'Ideală pentru detalii fine și texte mici',
  },
  { title: 'Tăiere + gravare', desc: 'Același echipament, rezultate complete' },
  { title: 'Execuție rapidă', desc: 'Producție repetabilă și constantă' },
  {
    title: 'Fără contact',
    desc: 'Nu deteriorează materialul în jurul zonei prelucrate',
  },
];

export const LaserCO2Section = () => (
  <SectionContainer variant="leftGlow">
    <div className="section-surface">
      <SectionHeading
        eyebrow="Laser CO₂ profesional"
        title="Gravare și debitare laser CO₂ profesională"
        description="Folosim o mașină industrială laser CO₂ de înaltă precizie pentru gravare și debitare pe o gamă largă de materiale. Finisaje curate, detalii fine și acuratețe ridicată, fără contact direct cu materialul."
      />

      {/* Benefits row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {laserBenefits.map((b) => (
          <article key={b.title} className="card-premium p-5">
            <h3 className="font-heading text-base font-semibold text-primary">
              {b.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{b.desc}</p>
          </article>
        ))}
      </div>

      {/* Materials + services */}
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="card-premium p-6">
          <h3 className="font-heading text-lg font-semibold">
            Materiale compatibile
          </h3>
          <p className="mt-2 text-sm text-muted">
            Aceste echipamente sunt folosite în publicitate, cadouri
            personalizate, producție, design interior și multe alte domenii.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {laserMaterials.map((m) => (
              <Chip key={m} label={m} />
            ))}
          </div>
        </div>

        <div className="card-premium p-6">
          <h3 className="font-heading text-lg font-semibold">
            Servicii realizate
          </h3>
          <ul className="mt-4 space-y-2">
            {laserServices.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-muted">
                <CheckIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden
                />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Industry callout */}
      <div className="border-accent/20 bg-accent/5 mt-5 rounded-2xl border p-5">
        <p className="text-sm leading-relaxed text-muted">
          <span className="font-semibold text-text">Industrii deservite: </span>
          publicitate și semnalistică, cadouri personalizate și corporate
          gifting, producție și prototipare, design interior, evenimente și
          activări de brand.
        </p>
      </div>

      <Link href="/contact" className="btn-primary mt-8">
        Cere ofertă pentru gravare laser
      </Link>
    </div>
  </SectionContainer>
);

/* ─────────────────────────────────────────────── Product Showcase (orig) ─── */

export const ProductShowcaseSection = () => (
  <SectionContainer variant="leftGlow">
    <div className="section-surface">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <SectionHeading
          className="mb-0"
          eyebrow="Objects & textiles"
          title="Categorii populare pentru obiecte și textile"
          description="Mixăm funcționalitatea cu designul pentru produse care se remarcă imediat."
        />
        <Link
          href="/contact"
          className="btn-primary self-start"
          aria-label="Solicită o ofertă pentru obiecte și textile"
        >
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
            <ShowcaseRow
              key={row.title}
              icon={row.icon}
              title={row.title}
              description={row.description}
              tag={row.tag}
            />
          ))}
        </div>
      </div>
    </div>
  </SectionContainer>
);
