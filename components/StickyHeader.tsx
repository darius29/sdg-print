'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/site';

export const StickyHeader = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="font-heading text-lg font-bold">SDG PRINT & Design</Link>
        <nav className="hidden items-center gap-4 md:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className={`text-sm transition hover:text-accent ${pathname === item.href ? 'text-accent' : 'text-muted'}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:0722333444" aria-label="Sună acum" className="rounded-full border border-slate-700 p-2 text-sm md:hidden">📞</a>
          <Link href="/contact" className="btn-primary text-sm">Cere ofertă personalizată</Link>
        </div>
      </div>
    </header>
  );
};
