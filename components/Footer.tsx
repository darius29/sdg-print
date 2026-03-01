import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export const Footer = () => (
  <footer className="border-t border-slate-800 bg-surface">
    <div className="section-container grid gap-10 md:grid-cols-4 md:py-12">
      <div>
        <h3 className="font-heading text-lg font-semibold">SDG PRINT & Design</h3>
        <p className="mt-3 text-sm text-muted">Print premium pentru pereți, textile și obiecte personalizate în Timișoara și România.</p>
      </div>
      <div>
        <h4 className="font-semibold">Navigare</h4>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {siteConfig.nav.slice(0, 6).map((link) => (
            <li key={link.href}><Link href={link.href} className="hover:text-accent">{link.label}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold">Contact</h4>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>{siteConfig.city}, {siteConfig.country}</li>
          <li><a href={`tel:${siteConfig.phone}`} className="hover:text-accent">{siteConfig.phone}</a></li>
          <li><a href={`mailto:${siteConfig.email}`} className="hover:text-accent">{siteConfig.email}</a></li>
          <li><a href={siteConfig.facebook} className="hover:text-accent" target="_blank">Facebook</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold">Legal</h4>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li><Link href="/privacy" className="hover:text-accent">Politica de confidențialitate</Link></li>
          <li><Link href="/cookies" className="hover:text-accent">Politica de cookies</Link></li>
        </ul>
      </div>
    </div>
  </footer>
);
