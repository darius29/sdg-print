import type { Metadata } from 'next';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { SectionHeading } from '@/components/SectionHeading';
import { beforeAfterItems } from '@/content/beforeAfter';
import { canonical } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Before / After',
  description: 'Compară transformările înainte și după pentru proiectele SDG PRINT.',
  alternates: { canonical: canonical('/before-after') },
};

export default function BeforeAfterPage() {
  return (
    <section className="section-container">
      <SectionHeading title="Before / After" subtitle="Comparatoare interactive pentru proiectele noastre." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{beforeAfterItems.map((item) => <BeforeAfterSlider key={item.id} item={item} />)}</div>
    </section>
  );
}
