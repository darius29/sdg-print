import type { Metadata } from 'next';
import { canonical } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Politica de cookies',
  alternates: { canonical: canonical('/cookies') },
};

export default function CookiesPage() {
  return <section className="section-container"><h1 className="font-heading text-3xl">Politica de cookies</h1><p className="mt-4 text-muted">Folosim cookies esențiale pentru funcționarea site-ului și analiză minimă de trafic.</p></section>;
}
