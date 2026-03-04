'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';

type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  navItems: NavItem[];
  pathname: string;
  ctaHref?: string;
  ctaLabel?: string;
};

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const MobileMenu = ({
  navItems,
  pathname,
  ctaHref = '/contact',
  ctaLabel = 'Cere ofertă',
}: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }

      if (event.key !== 'Tab') {
        return;
      }

      const panel = panelRef.current;
      if (!panel) {
        return;
      }

      const focusableElements = panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const panel = panelRef.current;
      const button = buttonRef.current;
      const target = event.target as Node;

      if (!panel || panel.contains(target) || button?.contains(target)) {
        return;
      }

      setIsOpen(false);
    };

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);

    const focusableElements = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    focusableElements?.[0]?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      buttonRef.current?.focus();
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label={isOpen ? 'Închide meniul de navigare' : 'Deschide meniul de navigare'}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((current) => !current)}
        className="relative z-[60] inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 bg-bg/80 text-slate-100 transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        <span className="sr-only">Meniu principal</span>
        <span className="relative h-5 w-6">
          <span
            className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-all duration-300 ease-out motion-reduce:transition-none ${
              isOpen ? 'translate-y-[9px] rotate-45' : ''
            }`}
          />
          <span
            className={`absolute left-0 top-[9px] h-0.5 w-6 bg-current transition-all duration-300 ease-out motion-reduce:transition-none ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-0 top-[18px] h-0.5 w-6 bg-current transition-all duration-300 ease-out motion-reduce:transition-none ${
              isOpen ? '-translate-y-[9px] -rotate-45' : ''
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
      />

      <aside
        id={panelId}
        ref={panelRef}
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[86vw] max-w-sm flex-col border-l border-slate-700 bg-bg/95 shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
          <p className="font-heading text-base font-semibold text-slate-100">Meniu</p>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 pb-8 pt-3" aria-label="Navigare mobilă">
          <ul className="divide-y divide-slate-800 border-y border-slate-800">
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className={`transition duration-300 ease-out motion-reduce:transition-none ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 35}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`block py-4 text-base ${pathname === item.href ? 'text-accent' : 'text-slate-100'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={ctaHref}
            onClick={closeMenu}
            className="btn-primary mt-6 inline-flex w-full justify-center"
          >
            {ctaLabel}
          </Link>
        </nav>
      </aside>
    </div>
  );
};
