import type { Metadata } from 'next';
import { FAQAccordion } from '@/components/FAQAccordion';
import { SectionHeading } from '@/components/SectionHeading';
import { Section } from '@/components/sections/Section';
import { faqItems } from '@/content/faq';
import { canonical } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Întrebări frecvente',
  description: 'Răspunsuri la cele mai frecvente întrebări despre serviciile SDG PRINT.',
  alternates: { canonical: canonical('/faq') },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <Section variant="leftGlow">
      <SectionHeading title="FAQ" subtitle="Tot ce trebuie să știi înainte de a începe proiectul." />
      <FAQAccordion items={faqItems} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </Section>
  );
}
