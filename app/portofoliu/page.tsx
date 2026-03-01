import type { Metadata } from 'next';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { SectionHeading } from '@/components/SectionHeading';
import { canonical } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Portofoliu',
  description: 'Lucrări SDG PRINT & Design pentru spații rezidențiale, comerciale și textile.',
  alternates: { canonical: canonical('/portofoliu') },
};

export default function PortfolioPage() {
  return (
    <section className="section-container">
      <SectionHeading title="Portofoliu" subtitle="Exemple reale de proiecte livrate în Timișoara și în țară." />
      <PortfolioGrid />
    </section>
  );
}
