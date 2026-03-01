import { Service } from '@/lib/types';

export const services: Service[] = [
  {
    id: 'wall-print',
    icon: '🧱',
    title: 'Print pe perete (Wall Print)',
    shortDescription: 'Transformăm pereții în puncte de atracție cu print UV direct.',
    description:
      'Ideal pentru HoReCa, birouri, clinici, locuințe și showroom-uri. Fără tapet sau folie, cu culori vibrante și durabilitate excelentă.',
    applications: ['lemn natural', 'MDF', 'acril', 'piele', 'plastic', 'placaj', 'materiale speciale'],
  },
  {
    id: 'tricouri-hanorace',
    icon: '👕',
    title: 'Tricouri & Hanorace',
    shortDescription: 'Personalizare textile pentru branduri, echipe și cadouri unice.',
    description:
      'Lucrăm atât cu designul clientului, cât și cu design creat de echipa SDG. Acceptăm serii mici și volume mari pentru companii.',
    applications: ['comenzi individuale', 'uniforme business', 'merchandising', 'evenimente'],
  },
  {
    id: 'cani-obiecte',
    icon: '☕',
    title: 'Căni & Obiecte promoționale',
    shortDescription: 'Branding memorabil pentru campanii, cadouri corporate sau personale.',
    description:
      'Personalizăm căni și obiecte promoționale pentru vizibilitate de brand, pachete promo și cadouri de impact.',
    applications: ['branding corporate', 'cadouri', 'campanii promo', 'kit-uri onboarding'],
  },
  {
    id: 'sepci-textile',
    icon: '🧢',
    title: 'Șepci & Textile',
    shortDescription: 'Textile personalizate pentru evenimente, echipe și merchandising.',
    description:
      'Soluții versatile pentru uniforme, evenimente și colecții personalizate, cu focus pe calitate și consistență.',
    applications: ['uniforme', 'event kits', 'merch', 'echipe sportive'],
  },
];
