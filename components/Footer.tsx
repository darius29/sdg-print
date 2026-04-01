import Link from 'next/link';
import { siteConfig } from '@/lib/site';

const workingHours = [
  { zile: 'Luni – Vineri', ore: '09:00 – 18:00' },
  { zile: 'Sâmbătă', ore: '10:00 – 14:00' },
  { zile: 'Duminică', ore: 'Închis' },
];

const paymentMethods = [
  'Transfer bancar',
  'Card bancar',
  'Numerar',
  'Factură cu termen (firme)',
];

const serviceLinks = [
  { href: '/servicii', label: 'Toate serviciile' },
  { href: '/servicii#wall-print', label: 'Print UV pe perete' },
  { href: '/servicii#laser-co2', label: 'Gravare laser CO₂' },
  { href: '/pregatire-fisiere', label: 'Pregătire fișiere' },
  { href: '/before-after', label: 'Before / After' },
  { href: '/portofoliu', label: 'Portofoliu' },
];

export const Footer = () => (
  <footer className="border-t border-slate-800 bg-surface">
    <div className="section-container grid gap-10 md:grid-cols-2 md:py-12 lg:grid-cols-4">
      {/* Brand */}
      <div className="lg:col-span-1">
        <h3 className="font-heading text-lg font-semibold">
          SDG PRINT & Design
        </h3>
        <p className="mt-3 text-sm text-muted">
          Print UV direct pe perete și gravare laser CO₂ în Timișoara și toată
          România.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {paymentMethods.map((m) => (
            <span
              key={m}
              className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-muted"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* Servicii */}
      <div>
        <h4 className="font-semibold">Servicii</h4>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {serviceLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-accent">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact + program */}
      <div>
        <h4 className="font-semibold">Contact</h4>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>
            {siteConfig.city}, {siteConfig.country}
          </li>
          <li>
            <a href={`tel:${siteConfig.phone}`} className="hover:text-accent">
              {siteConfig.phone}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </li>
          <li>
            <a
              href={siteConfig.facebook}
              className="hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>

        <h4 className="mt-5 font-semibold">Program</h4>
        <ul className="mt-3 space-y-1.5 text-sm">
          {workingHours.map(({ zile, ore }) => (
            <li key={zile} className="flex justify-between gap-4 text-muted">
              <span>{zile}</span>
              <span className="text-right">{ore}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h4 className="font-semibold">Legal</h4>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>
            <Link href="/termeni" className="hover:text-accent">
              Termeni și condiții
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:text-accent">
              Politica de confidențialitate
            </Link>
          </li>
          <li>
            <Link href="/cookies" className="hover:text-accent">
              Politica de cookies
            </Link>
          </li>
          <li>
            <a
              href="https://anpc.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              ANPC
            </a>
          </li>
          <li>
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              Soluționare litigii (SAL)
            </a>
          </li>
        </ul>

        <h4 className="mt-5 font-semibold">Informații</h4>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>
            <Link href="/pregatire-fisiere" className="hover:text-accent">
              Pregătire fișiere
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:text-accent">
              Întrebări frecvente
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-accent">
              Cere ofertă
            </Link>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-slate-800">
      <div className="section-container flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} SDG PRINT & Design. Toate drepturile
          rezervate.
        </p>
        <p>
          Zona de acoperire:{' '}
          <span className="text-text">
            Timișoara, Arad, Cluj-Napoca și toată România
          </span>
        </p>
      </div>
    </div>
  </footer>
);
