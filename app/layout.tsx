import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { AmbientBackground } from '@/components/AmbientBackground';
import { CookieConsent } from '@/components/CookieConsent';
import { FloatingContact } from '@/components/FloatingContact';
import { CookieConsentProvider } from '@/lib/cookie-consent-context';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { StickyHeader } from '@/components/StickyHeader';
import { canonical, siteConfig } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });

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
    title: 'SDG PRINT & Design — Print UV & Gravare Laser Timișoara',
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: '/images/home/hero.png',
        width: 1200,
        height: 630,
        alt: 'SDG PRINT & Design — Print UV direct pe perete, gravare laser CO₂, Timișoara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDG PRINT & Design — Print UV & Gravare Laser Timișoara',
    description: siteConfig.description,
    images: ['/images/home/hero.png'],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/home/hero.png`,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  areaServed: 'Romania',
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.city,
    addressCountry: 'RO',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '14:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicii SDG PRINT & Design',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Print UV direct pe perete' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gravare laser CO₂' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Print textile' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Obiecte personalizate' } },
    ],
  },
  sameAs: [siteConfig.facebook],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <head>
        <link rel="preload" href="/images/home/hero.png" as="image" fetchPriority="high" />
      </head>
      <body className={`${inter.variable} ${sora.variable}`}>
        <AmbientBackground />
        <div className="site-shell">
          <StickyHeader />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
        <CookieConsentProvider>
          <CookieConsent />
          <FloatingContact />
          <ScrollToTop />
        </CookieConsentProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </body>
    </html>
  );
}
