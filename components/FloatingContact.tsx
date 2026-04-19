'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCookieConsent } from '@/lib/cookie-consent-context';
import { siteConfig } from '@/lib/site';

const whatsappNumber = siteConfig.phone.replace(/^0/, '40').replace(/\s/g, '');
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Bun%C4%83%20ziua%2C%20a%C8%99%20dori%20o%20ofert%C4%83%20personalizat%C4%83.`;

const PhoneIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.86-.86a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.5v2.42z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.524 5.847L.057 23.428a.75.75 0 00.914.914l5.626-1.479A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.359-.213-3.72.977.995-3.644-.234-.374A9.818 9.818 0 1112 21.818z" />
  </svg>
);

const MailIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
  </svg>
);

const CloseIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const ChatIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

const actions = [
  {
    key: 'phone',
    label: 'Sună acum',
    href: `tel:${siteConfig.phone}`,
    icon: <PhoneIcon />,
    colorClass: 'border-primary/40 bg-primary/10 text-primary hover:bg-primary/20',
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    href: whatsappUrl,
    external: true,
    icon: <WhatsAppIcon />,
    colorClass: 'border-green-500/40 bg-green-500/10 text-green-400 hover:bg-green-500/20',
  },
  {
    key: 'email',
    label: 'Cere ofertă',
    href: '/contact',
    icon: <MailIcon />,
    colorClass: 'border-accent/40 bg-accent/10 text-accent hover:bg-accent/20',
  },
];

export const FloatingContact = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { bannerVisible } = useCookieConsent();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div
      className={`fixed right-5 z-50 flex flex-row items-end gap-3 transition-all duration-300 ${
        bannerVisible ? 'bottom-[12rem] sm:bottom-28' : 'bottom-6'
      } ${
        visible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label="Contact rapid"
    >
      {/* Action items */}
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-200 ${
          open ? 'pointer-events-auto translate-x-0 opacity-100' : 'pointer-events-none translate-x-4 opacity-0'
        }`}
        aria-hidden={!open}
      >
        {actions.map((action) => (
          <Link
            key={action.key}
            href={action.href}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noopener noreferrer' : undefined}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 rounded-full border px-4 py-2.5 text-sm font-medium shadow-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 ${action.colorClass}`}
            tabIndex={open ? 0 : -1}
          >
            <span className="shrink-0">{action.icon}</span>
            <span>{action.label}</span>
          </Link>
        ))}
      </div>

      {/* Main toggle button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Închide meniul de contact' : 'Deschide opțiuni de contact'}
        aria-expanded={open}
        className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        style={{
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
          boxShadow: '0 8px 28px rgba(0,217,255,0.35)',
        }}
      >
        {/* Pulse ring — visible when closed */}
        {!open && (
          <span
            className="absolute inset-0 animate-ping rounded-full opacity-30"
            style={{ background: 'var(--primary)' }}
            aria-hidden
          />
        )}
        <span className={`transition-transform duration-200 text-bg ${open ? 'rotate-45 scale-90' : ''}`}>
          {open ? <CloseIcon /> : <ChatIcon />}
        </span>
      </button>
    </div>
  );
};
