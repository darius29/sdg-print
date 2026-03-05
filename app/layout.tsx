import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { AmbientBackground } from '@/components/AmbientBackground';
import { Footer } from '@/components/Footer';
import { StickyHeader } from '@/components/StickyHeader';
import { canonical, siteConfig } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Print pe perete în Timișoara | SDG PRINT & Design',
    template: '%s | SDG PRINT & Design',
  },
  description: siteConfig.description,
  alternates: { canonical: canonical('/') },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: 'SDG PRINT & Design',
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  areaServed: 'Romania',
  address: { '@type': 'PostalAddress', addressLocality: siteConfig.city, addressCountry: 'RO' },
  telephone: siteConfig.phone,
  email: siteConfig.email,
  sameAs: [siteConfig.facebook],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body className={`${inter.variable} ${sora.variable}`}>
        <AmbientBackground />
        <div className="site-shell">
          <StickyHeader />
          <main>{children}</main>
          <Footer />
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </body>
    </html>
  );
}
