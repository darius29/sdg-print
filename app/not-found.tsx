import Link from 'next/link';
import { Section } from '@/components/sections/Section';

const quickLinks = [
  { href: '/', label: 'Acasă' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/portofoliu', label: 'Portofoliu' },
  { href: '/contact', label: 'Contact' },
];

export default function NotFound() {
  return (
    <Section variant="splitGlow">
      <div className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        {/* Big 404 */}
        <p
          className="select-none font-heading text-[clamp(6rem,20vw,14rem)] font-bold leading-none"
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 50%, var(--primary-2) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            opacity: 0.25,
          }}
          aria-hidden
        >
          404
        </p>

        <div className="-mt-4 md:-mt-8">
          <h1 className="font-heading text-3xl font-semibold md:text-4xl">
            Pagina nu a fost găsită
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-muted">
            Link-ul pe care l-ai accesat nu mai există sau a fost mutat. Folosește
            navigarea de mai jos pentru a reveni pe site.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.href === '/contact'
                  ? 'btn-primary'
                  : 'btn-secondary'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="mt-12 text-xs text-muted">
          Ai nevoie de ajutor?{' '}
          <Link href="/contact" className="text-primary hover:underline">
            Contactează-ne
          </Link>
        </p>
      </div>
    </Section>
  );
}
