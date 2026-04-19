'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileMenu } from '@/components/navigation/MobileMenu';
import { siteConfig } from '@/lib/site';

export const StickyHeader = () => {
  const pathname = usePathname();

  return (
    <header className="bg-bg/90 sticky top-0 z-30 border-b border-slate-800 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="font-heading text-lg font-bold">
          SDG PRINT & Design
        </Link>

        <nav className="hidden items-center gap-4 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition hover:text-accent ${pathname === item.href ? 'text-accent' : 'text-muted'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/contact" className="btn-primary text-sm">
            Cere ofertă personalizată
          </Link>
        </div>

        <MobileMenu
          navItems={siteConfig.nav}
          ctaHref="/contact"
          ctaLabel="Cere ofertă"
        />
      </div>
    </header>
  );
};
