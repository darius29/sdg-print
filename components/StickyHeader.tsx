'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MobileMenu } from '@/components/navigation/MobileMenu';
import { siteConfig } from '@/lib/site';

export const StickyHeader = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 backdrop-blur transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-bg/95 shadow-[0_4px_24px_rgba(2,9,21,0.5)]'
          : 'border-b border-transparent bg-bg/70'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="font-heading text-lg font-bold">
          SDG PRINT & Design
        </Link>

        <nav className="hidden items-center gap-3 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative pb-0.5 text-sm transition-colors duration-200 hover:text-accent ${
                pathname === item.href ? 'text-accent' : 'text-muted'
              }`}
            >
              {item.label}
              <span
                aria-hidden
                className={`absolute bottom-0 left-0 h-px w-full origin-left rounded-full bg-accent transition-transform duration-300 ${
                  pathname === item.href ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/contact" className="btn-primary text-sm">
            Cere ofertă
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
