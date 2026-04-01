import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeading } from '@/components/SectionHeading';
import { Section } from '@/components/sections/Section';
import { canonical, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Solicită ofertă personalizată pentru print pe perete, gravare laser și personalizare. Program, metode de plată și hartă.',
  alternates: { canonical: canonical('/contact') },
};

const workingHours = [
  { zile: 'Luni – Vineri', ore: '09:00 – 18:00' },
  { zile: 'Sâmbătă', ore: '10:00 – 14:00' },
  { zile: 'Duminică', ore: 'Închis' },
];

const paymentMethods = [
  { label: 'Transfer bancar', icon: '🏦' },
  { label: 'Card bancar', icon: '💳' },
  { label: 'Numerar', icon: '💵' },
  { label: 'Factură cu termen (firme)', icon: '🧾' },
];

export default function ContactPage() {
  return (
    <Section variant="splitGlow">
      <SectionHeading
        title="Contact"
        subtitle="Trimite-ne detaliile proiectului și revenim rapid cu o ofertă."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-5">
          {/* Contact info */}
          <div className="card-premium space-y-3 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
              Date de contact
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-text">
                {siteConfig.city}, {siteConfig.country}
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-medium text-primary hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent"
                >
                  Facebook →
                </a>
              </p>
            </div>
          </div>

          {/* Working hours */}
          <div className="card-premium space-y-3 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
              Program de lucru
            </h3>
            <ul className="space-y-2">
              {workingHours.map(({ zile, ore }) => (
                <li key={zile} className="flex justify-between gap-4 text-sm">
                  <span className="text-muted">{zile}</span>
                  <span className="text-right font-medium text-text">
                    {ore}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment methods */}
          <div className="card-premium space-y-3 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
              Metode de plată
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {paymentMethods.map(({ label, icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-slate-700/60 bg-surface px-3 py-2 text-xs text-muted"
                >
                  <span aria-hidden="true">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <iframe
            title="Hartă Timișoara"
            src="https://maps.google.com/maps?q=Timisoara&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="h-56 w-full rounded-2xl border border-slate-700 sm:h-72 md:h-80"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
}
