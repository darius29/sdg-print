import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/sections/Section';
import { SectionHeading } from '@/components/sections/SectionHeading';
import {
  BoltIcon,
  CheckIcon,
  LayersIcon,
  PaletteIcon,
  ShieldIcon,
  SparkIcon,
} from '@/components/sections/SectionIcons';
import { SVGProps } from 'react';

// ─── Icons ────────────────────────────────────────────────────────────────────

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

// ─── 1. Povestea noastră ──────────────────────────────────────────────────────

export const AboutStorySection = () => (
  <Section variant="leftGlow">
    <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
      {/* Text */}
      <div className="flex-1">
        <SectionHeading
          eyebrow="Povestea noastră"
          title="Din pasiune pentru detalii"
          className="mb-6"
        />
        <div className="space-y-4 text-muted">
          <p>
            SDG Print & Design s-a născut din convingerea că personalizarea unui spațiu
            sau a unui produs trebuie să fie accesibilă, rapidă și de calitate reală.
            Am pornit ca un atelier mic din Timișoara, cu un singur printer UV, și am
            crescut pas cu pas, proiect cu proiect.
          </p>
          <p>
            Astăzi lucrăm cu antreprenori, agenții de interior, branduri naționale și
            persoane fizice din toată România — de la un tricou personalizat pentru un
            eveniment de familie, până la muraluri de zeci de metri pătrați pentru
            spații comerciale premium.
          </p>
          <p>
            Ceea ce ne diferențiază nu este doar tehnologia, ci modul în care tratăm
            fiecare comandă: cu atenție, comunicare transparentă și dorința sinceră ca
            rezultatul final să depășească așteptările.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            Timișoara
          </span>
          <span className="rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm text-accent">
            Print UV direct
          </span>
          <span className="rounded-full border border-slate-600 bg-slate-800/50 px-4 py-1.5 text-sm text-muted">
            4+ ani experiență
          </span>
        </div>
      </div>

      {/* Image */}
      <div className="relative flex-1">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 shadow-2xl shadow-primary/10">
          <Image
            src="/images/portfolio/receptie-corporate-1.svg"
            alt="Recepție corporate personalizată de SDG Print"
            width={600}
            height={450}
            className="h-80 w-full object-cover md:h-96"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block rounded-xl border border-white/10 bg-bg/80 px-3 py-1.5 text-xs text-muted backdrop-blur-sm">
              Proiect: Recepție corporate — Timișoara
            </span>
          </div>
        </div>
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-primary/15 blur-3xl" aria-hidden />
      </div>
    </div>
  </Section>
);

// ─── 2. Tehnologia noastră ────────────────────────────────────────────────────

const techCards = [
  {
    icon: LayersIcon,
    title: 'Print UV direct pe suprafață',
    description:
      'Cernelurile UV se fixează direct pe perete, metal, sticlă sau lemn fără tapet sau folie intermediară. Rezultatul este net și durabil.',
    badge: '2880 DPI',
  },
  {
    icon: SparkIcon,
    title: 'Culori vibrante, rezistente',
    description:
      'Formulele UV sunt rezistente la UV, umiditate și frecare. Culorile rămân vii ani de zile fără să pălească sau să se exfolieze.',
    badge: 'UV-curat',
  },
  {
    icon: BoltIcon,
    title: 'Execuție rapidă',
    description:
      'De la confirmare la predare, procesul nostru este optimizat pentru a livra în 48h pentru comenzi standard, fără să compromidem calitatea.',
    badge: '48h livrare',
  },
  {
    icon: PaletteIcon,
    title: 'Design adaptat pe brief',
    description:
      'Nu folosim template-uri. Fiecare design este creat sau adaptat specific pentru suprafața, locația și identitatea vizuală a clientului.',
    badge: 'Full custom',
  },
  {
    icon: ShieldIcon,
    title: 'Suprafețe multiple',
    description:
      'Printăm pe gresie, beton, MDF, metal, textile și obiecte promoționale cu aceeași acuratețe, indiferent de textură sau dimensiune.',
    badge: '10+ materiale',
  },
  {
    icon: LayersIcon,
    title: 'Fără deteriorarea suprafeței',
    description:
      'Procesul de aplicare este neinvaziv. Nu există risc de deteriorare a peretelui sau suprafeței — ideal pentru spații închiriate sau renovate.',
    badge: 'Non-invaziv',
  },
];

export const AboutTechSection = () => (
  <Section variant="rightGlow">
    <SectionHeading
      eyebrow="Tehnologia noastră"
      title="Ce face printul nostru diferit"
      description="Nu toate printurile sunt la fel. Iată ce înseamnă concret tehnologia UV directă pe care o folosim."
    />
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {techCards.map((card) => (
        <article
          key={card.title}
          className="card-premium group flex flex-col gap-4 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
        >
          <div className="flex items-start justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-colors duration-300 group-hover:border-accent/50 group-hover:bg-accent/20">
              <card.icon className="h-5 w-5" aria-hidden />
            </div>
            <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary">
              {card.badge}
            </span>
          </div>
          <div>
            <h3 className="font-medium">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

// ─── 3. Comparație vizuală ────────────────────────────────────────────────────

const comparisonRows = [
  {
    criteriu: 'Aplicare',
    sdg: 'Direct pe suprafață, fără intermediar',
    clasic: 'Tapet sau folie aplicată separat',
  },
  {
    criteriu: 'Durabilitate',
    sdg: 'UV-rezistent, ani de zile fără degradare',
    clasic: 'Se dezlipește, pălește în timp',
  },
  {
    criteriu: 'Personalizare',
    sdg: 'Orice design, orice dimensiune',
    clasic: 'Limitată la modele disponibile',
  },
  {
    criteriu: 'Timp execuție',
    sdg: 'Livrare în 48h pentru standard',
    clasic: 'Zile sau săptămâni pentru custom',
  },
  {
    criteriu: 'Suprafețe compatibile',
    sdg: 'Beton, metal, lemn, sticlă, textile',
    clasic: 'Doar suprafețe plane netede',
  },
  {
    criteriu: 'Risc deteriorare',
    sdg: 'Zero — proces complet neinvaziv',
    clasic: 'Risc la dezlipire sau umiditate',
  },
];

export const AboutComparisonSection = () => (
  <Section variant="leftGlow">
    <SectionHeading
      eyebrow="De ce SDG Print"
      title="Print UV vs. metode clasice"
      description="O comparație directă între ceea ce oferim noi și soluțiile tradiționale de personalizare."
    />
    <div className="overflow-hidden rounded-2xl border border-slate-700/60">
      {/* Header */}
      <div className="grid grid-cols-[1fr_1.2fr_1.2fr] border-b border-slate-700/60 bg-slate-800/60">
        <div className="p-4 text-sm font-semibold text-muted">Criteriu</div>
        <div className="border-l border-slate-700/60 p-4 text-sm font-semibold text-primary">
          SDG Print
        </div>
        <div className="border-l border-slate-700/60 p-4 text-sm font-semibold text-muted">
          Metoda clasică
        </div>
      </div>
      {/* Rows */}
      {comparisonRows.map((row, i) => (
        <div
          key={row.criteriu}
          className={`grid grid-cols-[1fr_1.2fr_1.2fr] border-b border-slate-700/40 last:border-0 ${i % 2 === 0 ? 'bg-transparent' : 'bg-slate-800/20'}`}
        >
          <div className="p-4 text-sm font-medium">{row.criteriu}</div>
          <div className="flex items-start gap-2 border-l border-slate-700/40 p-4">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            <span className="text-sm text-muted">{row.sdg}</span>
          </div>
          <div className="flex items-start gap-2 border-l border-slate-700/40 p-4">
            <XIcon className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" aria-hidden />
            <span className="text-sm text-muted">{row.clasic}</span>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

// ─── 4. Galerie atelier ───────────────────────────────────────────────────────

const galleryImages = [
  {
    src: '/images/process/process-1.svg',
    alt: 'Echipament de print UV în atelier SDG',
    caption: 'Printer UV de ultimă generație',
    span: 'large',
  },
  {
    src: '/images/process/process-2.svg',
    alt: 'Pregătirea fișierelor de print',
    caption: 'Pregătire și validare design',
    span: 'small',
  },
  {
    src: '/images/process/process-3.svg',
    alt: 'Execuție print pe suprafață',
    caption: 'Execuție pe suprafață finală',
    span: 'small',
  },
] as const;

export const AboutGallerySection = () => (
  <Section variant="meshSoft">
    <SectionHeading
      eyebrow="Atelierul nostru"
      title="Echipamente & proces"
      description="Un atelier modern, cu echipamente calibrate și un proces riguros de la pregătire la predare."
    />
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* Large image */}
      <div className="group relative overflow-hidden rounded-2xl border border-slate-700/50">
        <Image
          src={galleryImages[0].src}
          alt={galleryImages[0].alt}
          width={700}
          height={500}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full md:min-h-[400px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="rounded-lg border border-white/10 bg-bg/80 px-3 py-1.5 text-xs text-muted backdrop-blur-sm">
            {galleryImages[0].caption}
          </span>
        </div>
      </div>
      {/* Two stacked images */}
      <div className="flex flex-col gap-4">
        {[galleryImages[1], galleryImages[2]].map((img) => (
          <div key={img.src} className="group relative overflow-hidden rounded-2xl border border-slate-700/50">
            <Image
              src={img.src}
              alt={img.alt}
              width={700}
              height={350}
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="rounded-lg border border-white/10 bg-bg/80 px-3 py-1.5 text-xs text-muted backdrop-blur-sm">
                {img.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

// ─── 5. Preview portofoliu ────────────────────────────────────────────────────

const portfolioPreviews = [
  {
    src: '/images/portfolio/receptie-corporate-2.svg',
    alt: 'Recepție corporate personalizată',
    title: 'Recepție corporate',
    category: 'Wall Print',
  },
  {
    src: '/images/portfolio/tricouri-eveniment-1.svg',
    alt: 'Tricouri eveniment personalizate',
    title: 'Tricouri eveniment',
    category: 'Textile',
  },
  {
    src: '/images/portfolio/dormitor-artistic-1.svg',
    alt: 'Dormitor cu mural artistic',
    title: 'Mural dormitor artistic',
    category: 'Rezidențial',
  },
];

export const AboutPortfolioPreview = () => (
  <Section variant="rightGlow">
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <SectionHeading
        eyebrow="Din portofoliu"
        title="Câteva dintre proiectele noastre"
        className="mb-0"
      />
      <Link href="/portofoliu" className="btn-secondary shrink-0 self-start sm:self-auto">
        Vezi tot portofoliul →
      </Link>
    </div>
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      {portfolioPreviews.map((item) => (
        <Link
          key={item.src}
          href="/portofoliu"
          className="group relative overflow-hidden rounded-2xl border border-slate-700/50"
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={400}
            height={300}
            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              {item.category}
            </span>
            <p className="mt-1 font-medium">{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  </Section>
);
