import type { Metadata } from 'next';
import { Section } from '@/components/sections/Section';
import { canonical } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Politica de confidențialitate',
  alternates: { canonical: canonical('/privacy') },
};

export default function PrivacyPage() {
  return (
    <Section variant="default">
      <h1 className="font-heading text-3xl">Politica de confidențialitate</h1>
      <p className="mt-4 text-muted">Colectăm date doar pentru răspuns la cereri și comunicare comercială. Nu vindem date personale.</p>
    </Section>
  );
}
