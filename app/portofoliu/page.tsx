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
    <section
      className="section-container section-bloom"
      style={{
        backgroundImage:
          "linear-gradient(150deg, rgba(6, 9, 16, 0.82), rgba(6, 9, 16, 0.98)), url('/images/process/process-3.svg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <SectionHeading title="Portofoliu" subtitle="Exemple reale de proiecte livrate în Timișoara și în țară." />
      <PortfolioGrid />
    </section>
  );
}
