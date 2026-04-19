'use client';

import { useEffect, useState } from 'react';
import { useCookieConsent } from '@/lib/cookie-consent-context';

const ArrowUpIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { bannerVisible } = useCookieConsent();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Înapoi sus"
      className={`fixed right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-surface/80 text-muted shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
        bannerVisible ? 'bottom-[16.5rem] sm:bottom-[11.5rem]' : 'bottom-24'
      } ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUpIcon />
    </button>
  );
};
