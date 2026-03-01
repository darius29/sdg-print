import { PortfolioItem } from '@/lib/types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Murala corporate recepție',
    category: 'Commercial',
    location: 'Timișoara',
    description: 'Identitate vizuală imprimată direct pe peretele recepției.',
    images: ['/images/portfolio/receptie-corporate-1.svg', '/images/portfolio/receptie-corporate-2.svg'],
  },
  {
    id: 'p2',
    title: 'Dormitor cu accent artistic',
    category: 'Residential',
    location: 'Arad',
    description: 'Print decorativ pe perete pentru un spațiu personalizat.',
    images: ['/images/portfolio/dormitor-artistic-1.svg', '/images/portfolio/dormitor-artistic-2.svg'],
  },
  {
    id: 'p3',
    title: 'Colecție tricouri eveniment',
    category: 'Textile',
    location: 'Cluj-Napoca',
    description: 'Seria completă de tricouri personalizate pentru eveniment.',
    images: ['/images/portfolio/tricouri-eveniment-1.svg', '/images/portfolio/tricouri-eveniment-2.svg'],
  },
  {
    id: 'p4',
    title: 'Pachet promo personalizat',
    category: 'Custom',
    location: 'București',
    description: 'Mix de produse promo pentru lansare de brand.',
    images: ['/images/portfolio/pachet-promo-1.svg', '/images/portfolio/pachet-promo-2.svg'],
  },
];
