import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { TestimonialCard } from '@/components/cards';
import { testimonials } from '@/content/testimonials';
import { canonical } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Testimoniale',
  description: 'Recenzii reale de la clienții SDG PRINT & Design.',
  alternates: { canonical: canonical('/testimoniale') },
};

export default function TestimonialsPage() {
  return (
    <section className="section-container">
      <SectionHeading title="Testimoniale" subtitle="Păreri de la clienți mulțumiți din diferite industrii." />
      <div className="grid gap-5 md:grid-cols-3">{testimonials.map((item) => <TestimonialCard key={item.id} item={item} />)}</div>
      <div className="mt-10 grid grid-cols-2 gap-3 opacity-60 md:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => <div key={i} className="rounded-lg border border-slate-700 p-4 text-center text-sm">Logo {i + 1}</div>)}
      </div>
    </section>
  );
}
