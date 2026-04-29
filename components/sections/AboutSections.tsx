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
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
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
            SDG Print & Design s-a născut din convingerea că personalizarea unui
            spațiu sau a unui produs trebuie să fie accesibilă, rapidă și de
            calitate reală. Am pornit ca un atelier mic din Timișoara, cu un
            singur printer UV, și am crescut pas cu pas, proiect cu proiect.
          </p>
          <p>
            Astăzi lucrăm cu antreprenori, agenții de interior, branduri
            naționale și persoane fizice din toată România de la un tricou
            personalizat pentru un eveniment de familie, până la muraluri de
            zeci de metri pătrați pentru spații comerciale premium.
          </p>
          <p>
            Ceea ce ne diferențiază nu este doar tehnologia, ci modul în care
            tratăm fiecare comandă: cu atenție, comunicare transparentă și
            dorința sinceră ca rezultatul final să depășească așteptările.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="border-primary/30 bg-primary/5 rounded-full border px-4 py-1.5 text-sm text-primary">
            Timișoara
          </span>
          <span className="border-accent/30 bg-accent/5 rounded-full border px-4 py-1.5 text-sm text-accent">
            Print UV direct
          </span>
          <span className="rounded-full border border-slate-600 bg-slate-800/50 px-4 py-1.5 text-sm text-muted">
            Execuție premium
          </span>
        </div>
      </div>

      {/* Image */}
      <div className="relative flex-1">
        <div className="border-primary/20 shadow-primary/10 relative overflow-hidden rounded-3xl border shadow-2xl">
          <Image
            src="/images/despre-noi/studio/about-us.png"
            alt="Recepție corporate personalizată de SDG Print"
            width={600}
            height={450}
            className="h-80 w-full object-cover md:h-96"
          />
          <div className="from-bg/60 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
        </div>
        {/* Decorative glow */}
        <div
          className="bg-primary/15 pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full blur-3xl"
          aria-hidden
        />
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
          className="card-premium hover:border-primary/40 hover:shadow-primary/10 group flex flex-col gap-4 p-6 transition-all duration-300 hover:shadow-lg"
        >
          <div className="flex items-start justify-between">
            <div className="border-accent/30 bg-accent/10 group-hover:border-accent/50 group-hover:bg-accent/20 flex h-11 w-11 items-center justify-center rounded-xl border text-accent transition-colors duration-300">
              <card.icon className="h-5 w-5" aria-hidden />
            </div>
            <span className="border-primary/20 bg-primary/5 rounded-full border px-2.5 py-0.5 text-xs font-medium text-primary">
              {card.badge}
            </span>
          </div>
          <div>
            <h3 className="font-medium">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {card.description}
            </p>
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
            <CheckIcon
              className="mt-0.5 h-4 w-4 shrink-0 text-accent"
              aria-hidden
            />
            <span className="text-sm text-muted">{row.sdg}</span>
          </div>
          <div className="flex items-start gap-2 border-l border-slate-700/40 p-4">
            <XIcon
              className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70"
              aria-hidden
            />
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
        <div className="from-bg/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-bg/80 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-muted backdrop-blur-sm">
            {galleryImages[0].caption}
          </span>
        </div>
      </div>
      {/* Two stacked images */}
      <div className="flex flex-col gap-4">
        {[galleryImages[1], galleryImages[2]].map((img) => (
          <div
            key={img.src}
            className="group relative overflow-hidden rounded-2xl border border-slate-700/50"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={700}
              height={350}
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="from-bg/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-bg/80 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-muted backdrop-blur-sm">
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

// ─── 5b. Echipamente ─────────────────────────────────────────────────────────

const echipamente = [
  {
    nume: 'Wall Printer UV',
    model: 'Sistem print UV direct pe perete',
    specs: [
      { label: 'Înălțime maximă print', value: '290 cm' },
      { label: 'Sistem culori', value: 'CMYK' },
      { label: 'Rezoluție maximă', value: '2880 DPI' },
      { label: 'Viteză', value: '2–6 m²/oră' },
      { label: 'Tehnologie cerneală', value: 'UV, uscare instant' },
      { label: 'Nivel miros', value: 'Low-odor, non-toxic' },
    ],
    desc: 'Echipament de ultimă generație pentru print direct pe suprafețe verticale. Calibrare optică automată, fără risc de deteriorare a suprafeței.',
    badge: 'Wall Print',
    badgeClass: 'border-primary/40 bg-primary/10 text-primary',
  },
  {
    nume: 'Junlong Laser CO₂',
    model: 'Mașină industrială gravare & debitare',
    specs: [
      { label: 'Tip laser', value: 'CO₂' },
      { label: 'Precizie', value: 'Industrială' },
      { label: 'Operație', value: 'Gravare + debitare' },
      { label: 'Materiale', value: '10+ tipuri' },
      { label: 'Contact material', value: 'Zero (non-contact)' },
      { label: 'Finisaj', value: 'Curat, fără bavuri' },
    ],
    desc: 'Laser CO₂ de înaltă precizie pentru gravare și debitare pe lemn, acril, piele, sticlă și alte materiale. Repetabilitate industrială pentru producție mică și medie.',
    badge: 'Laser CO₂',
    badgeClass: 'border-accent/40 bg-accent/10 text-accent',
  },
];

export const AboutEquipmentSection = () => (
  <Section variant="splitGlow">
    <SectionHeading
      eyebrow="Echipamentele noastre"
      title="Tehnologie de nivel industrial"
      description="Investim în echipamente de calitate pentru că rezultatele finale depind direct de precizia și fiabilitatea utilajelor folosite."
    />
    <div className="grid gap-6 lg:grid-cols-2">
      {echipamente.map((eq) => (
        <article key={eq.nume} className="card-premium p-6">
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <h3 className="font-heading text-xl font-semibold">{eq.nume}</h3>
              <p className="mt-0.5 text-sm text-muted">{eq.model}</p>
            </div>
            <span
              className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${eq.badgeClass}`}
            >
              {eq.badge}
            </span>
          </div>
          <p className="mb-5 text-sm text-muted">{eq.desc}</p>
          <div className="grid grid-cols-2 gap-2">
            {eq.specs.map(({ label, value }) => (
              <div
                key={label}
                className="bg-surface/50 rounded-xl border border-border px-3 py-2.5"
              >
                <p className="text-xs text-muted">{label}</p>
                <p className="mt-0.5 text-sm font-semibold text-text">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  </Section>
);

// ─── 5c. Zonă de acoperire ────────────────────────────────────────────────────

const judete = [
  'Timiș',
  'Arad',
  'Bihor',
  'Cluj',
  'Alba',
  'Hunedoara',
  'Caraș-Severin',
  'Mehedinți',
  'Mureș',
  'Sibiu',
];

export const AboutCoverageSection = () => (
  <Section variant="meshSoft">
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <SectionHeading
          eyebrow="Zona de acoperire"
          title="Lucrăm în Timișoara și toată România"
          description="Sediul principal este în Timișoara, dar ne deplasăm pentru proiecte de wall print în toată țara. Gravura laser și obiectele personalizate se expediază în toată România."
        />
        <div className="mt-2 space-y-4 text-sm text-muted">
          <div className="flex items-start gap-3">
            <span className="border-primary/40 bg-primary/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg">
              📍
            </span>
            <div>
              <p className="font-medium text-text">Sediu principal</p>
              <p>Timișoara, județul Timiș</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="border-accent/40 bg-accent/10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg">
              🚗
            </span>
            <div>
              <p className="font-medium text-text">
                Deplasare pentru wall print
              </p>
              <p>
                Vest, centru și nord-vest România. La cerere, național (tarif
                suplimentar transport).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-600 bg-slate-800/50 text-lg">
              📦
            </span>
            <div>
              <p className="font-medium text-text">Expediere națională</p>
              <p>
                Gravură laser, obiecte personalizate și textile — livrăm prin
                curier în toată România.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card-premium p-6">
        <p className="mb-4 text-sm font-semibold text-text">
          Județe cu acoperire frecventă
        </p>
        <div className="flex flex-wrap gap-2">
          {judete.map((judet) => (
            <span
              key={judet}
              className="border-primary/20 bg-primary/5 rounded-full border px-3 py-1.5 text-sm text-primary"
            >
              {judet}
            </span>
          ))}
          <span className="bg-surface/50 rounded-full border border-slate-700 px-3 py-1.5 text-sm text-muted">
            + toată România (la cerere)
          </span>
        </div>

        <div className="border-accent/20 bg-accent/5 mt-6 rounded-2xl border p-4 text-sm text-muted">
          <strong className="text-text">Ai un proiect în altă zonă?</strong>{' '}
          Contactează-ne — evaluăm fiecare proiect individual și găsim cea mai
          bună soluție logistică.
        </div>
      </div>
    </div>
  </Section>
);

// ─── 6. Preview portofoliu ────────────────────────────────────────────────────

export const AboutPortfolioPreview = () => (
  <Section variant="rightGlow">
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <SectionHeading
        eyebrow="Din portofoliu"
        title="Câteva dintre proiectele noastre"
        className="mb-0"
      />
      <Link
        href="/portofoliu"
        className="btn-secondary shrink-0 self-start sm:self-auto"
      >
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
          <div className="from-bg/90 via-bg/20 absolute inset-0 bg-gradient-to-t to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
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
