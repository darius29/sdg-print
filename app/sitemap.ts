import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

const routes = ['', '/despre-noi', '/servicii', '/portofoliu', '/before-after', '/testimoniale', '/faq', '/contact', '/privacy', '/cookies'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
