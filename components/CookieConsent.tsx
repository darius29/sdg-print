'use client';

import Link from 'next/link';
import { useCookieConsent } from '@/lib/cookie-consent-context';

export const CookieConsent = () => {
  const { bannerVisible, dismiss } = useCookieConsent();

  if (!bannerVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Consimțământ cookies"
      className="bg-bg/95 fixed bottom-0 left-0 right-0 z-[70] border-t border-slate-700/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:px-8">
        <div className="flex-1">
          <p className="text-sm font-medium text-text">Folosim cookie-uri 🍪</p>
          <p className="mt-1 text-xs leading-relaxed text-muted">
            Folosim cookie-uri esențiale pentru funcționarea site-ului și, cu
            acordul tău, cookie-uri de analiză pentru a-l îmbunătăți. Nu vindem
            date personale.{' '}
            <Link href="/cookies" className="text-primary hover:underline">
              Politica de cookies
            </Link>
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2 sm:flex-nowrap">
          <button
            type="button"
            onClick={() => dismiss('essential')}
            className="min-h-[44px] flex-1 rounded-full border border-slate-600 bg-transparent px-4 py-2 text-sm font-medium text-muted transition hover:border-slate-400 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:flex-none"
          >
            Doar esențiale
          </button>
          <button
            type="button"
            onClick={() => dismiss('accepted')}
            className="btn-primary min-h-[44px] flex-1 px-5 py-2 text-sm sm:flex-none"
          >
            Accept toate
          </button>
        </div>
      </div>
    </div>
  );
};
