import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeading } from '@/components/SectionHeading';
import { canonical, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Solicită ofertă personalizată pentru print pe perete, textile și promoționale.',
  alternates: { canonical: canonical('/contact') },
};

export default function ContactPage() {
  return (
    <section className="section-container">
      <SectionHeading title="Contact" subtitle="Trimite-ne detaliile proiectului și revenim rapid cu o ofertă." />
      <div className="grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-6">
          <div className="card-premium p-6 text-muted">
            <p>Timișoara</p>
            <p><a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></p>
            <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
            <p><a href={siteConfig.facebook} target="_blank">Facebook</a></p>
          </div>
          <iframe
            title="Hartă Timișoara"
            src="https://maps.google.com/maps?q=Timisoara&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="h-80 w-full rounded-2xl border border-slate-700"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
