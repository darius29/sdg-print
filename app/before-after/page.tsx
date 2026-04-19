import type { Metadata } from 'next';
import { BeforeAfterCard } from '@/components/BeforeAfterSlider';
import { SectionHeading } from '@/components/SectionHeading';
import { Section } from '@/components/sections/Section';
import { beforeAfterByMaterial } from '@/content/beforeAfter';
import { canonical } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Before / After',
  description: 'Compară transformările înainte și după pe cele mai utilizate materiale: pereți, lemn, sticlă, metal și plastic.',
  alternates: { canonical: canonical('/before-after') },
};

export default function BeforeAfterPage() {
  return (
    <Section variant="rightGlow">
      <SectionHeading
        title="Before / After"
        subtitle="Comparatoare interactive pe cele mai utilizate materiale — trage sliderul și descoperă transformarea."
      />

      <div className="flex flex-col gap-20">
        {beforeAfterByMaterial.map((group) => (
          <div key={group.id} id={group.id}>
            {/* Material heading */}
            <div className="mb-8 flex flex-col gap-1 border-l-2 border-primary/60 pl-4">
              <h2 className="font-heading text-2xl font-semibold text-text md:text-3xl">
                {group.label}
              </h2>
              <p className="text-sm text-muted">{group.description}</p>
            </div>

            {/* 3 sliders */}
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {group.items.map((item) => (
                <BeforeAfterCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
