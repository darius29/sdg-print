import { PortfolioItem } from '@/lib/types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Murala corporate recepție',
    category: 'Commercial',
    location: 'Timișoara',
    description: 'Identitate vizuală imprimată direct pe peretele recepției.',
    images: ['/images/portfolio-1.jpg', '/images/portfolio-2.jpg'],
  },
  {
    id: 'p2',
    title: 'Dormitor cu accent artistic',
    category: 'Residential',
    location: 'Arad',
    description: 'Print decorativ pe perete pentru un spațiu personalizat.',
    images: ['/images/portfolio-3.jpg', '/images/portfolio-4.jpg'],
  },
  {
    id: 'p3',
    title: 'Colecție tricouri eveniment',
    category: 'Textile',
    location: 'Cluj-Napoca',
    description: 'Seria completă de tricouri personalizate pentru eveniment.',
    images: ['/images/portfolio-5.jpg', '/images/portfolio-6.jpg'],
  },
  {
    id: 'p4',
    title: 'Pachet promo personalizat',
    category: 'Custom',
    location: 'București',
    description: 'Mix de produse promo pentru lansare de brand.',
    images: ['/images/portfolio-7.jpg', '/images/portfolio-8.jpg'],
  },
];
