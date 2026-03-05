import Link from 'next/link';
import { Section } from '@/components/sections/Section';

interface Props {
  title: string;
  description: string;
}

export const CTASection = ({ title, description }: Props) => (
  <Section variant="splitGlow">
    <div className="card-premium bg-hero-overlay p-8 md:p-12">
      <h2 className="font-heading text-3xl font-semibold md:text-4xl">{title}</h2>
      <p className="mt-4 max-w-3xl text-muted">{description}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/contact" className="btn-primary">Cere ofertă personalizată</Link>
        <Link href="/portofoliu" className="btn-secondary">Vezi portofoliul</Link>
      </div>
    </div>
  </Section>
);
