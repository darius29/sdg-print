import { Service } from '@/lib/types';

export const services: Service[] = [
  {
    id: 'wall-print',
    icon: '🧱',
    title: 'Printare pe perete',
    shortDescription:
      'Muraluri HD direct pe pereți, pentru spații care impresionează instant.',
    description:
      'Print UV direct pe perete pentru spații comerciale și rezidențiale, cu rezoluție ridicată, culori durabile și aplicare rapidă.',
    applications: ['rezoluție ridicată', 'culori durabile', 'aplicare rapidă', 'suprafețe multiple'],
  },
  {
    id: 'obiecte-personalizate',
    icon: '🎁',
    title: 'Obiecte personalizate',
    shortDescription:
      'Căni, huse și cadouri corporate cu branding clar și finisaj premium.',
    description:
      'Personalizare pentru serii mici sau mari, ideale pentru activări de brand, pachete promoționale și cadouri memorabile.',
    applications: ['serii mici/mari', 'culori vibrante', 'mockup rapid', 'branding corporate'],
  },
  {
    id: 'print-textile',
    icon: '👕',
    title: 'Print textile',
    shortDescription:
      'Tricouri, hanorace și uniforme cu print clar, rezistent și confortabil.',
    description:
      'Soluții textile pentru echipe, evenimente și merchandising, cu atenție la detalii fine și rezistență în timp.',
    applications: ['calitate pe termen lung', 'fără compromisuri', 'detalii fine', 'merchandising'],
  },
  {
    id: 'design-personalizat',
    icon: '🎨',
    title: 'Design personalizat',
    shortDescription:
      'Concept + execuție pentru vizualuri care respectă identitatea brandului.',
    description:
      'Pornim de la brief și direcție vizuală clară, apoi livrăm design complet adaptat suprafeței și obiectivelor de business.',
    applications: ['brief & direcție', 'concept vizual', 'adaptare pe suport', 'coerență de brand'],
  },
];
