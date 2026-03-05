import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { Section } from '@/components/sections/Section';
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
    <Section variant="meshSoft">
      <SectionHeading title="Testimoniale" subtitle="Păreri de la clienți mulțumiți din diferite industrii." />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}
