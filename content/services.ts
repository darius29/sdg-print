import { Service } from '@/lib/types';

export const services: Service[] = [
  {
    id: 'wall-print',
    icon: '🖨️',
    title: 'Print UV direct pe perete',
    shortDescription:
      'Print direct pe suprafață, fără autocolant, fără lipire. Impact vizual imediat.',
    description:
      'Realizăm print direct pe perete și pe alte suprafețe rigide, fără autocolant, fără lipire și fără compromisuri. Obții un design permanent, rezistent și cu impact vizual puternic pentru orice spațiu comercial sau rezidențial.',
    applications: [
      'fără folie, fără lipire',
      'design permanent și rezistent',
      'culori vii CMYK',
      'execuție rapidă în teren',
      'suprafețe multiple',
      'potrivit spații comerciale',
    ],
  },
  {
    id: 'laser-co2',
    icon: '⚡',
    title: 'Gravare și debitare laser CO₂',
    shortDescription:
      'Precizie industrială pentru gravare și tăiere pe lemn, acril, piele și multe altele.',
    description:
      'Folosim o mașină industrială laser CO₂ de înaltă precizie pentru gravare și debitare pe o gamă largă de materiale. Finisaje curate, detalii fine și acuratețe ridicată, fără contact direct cu materialul — ideal pentru produse personalizate și producție mică/medie.',
    applications: [
      'precizie ridicată',
      'tăiere și gravare',
      'produse personalizate',
      'producție repetabilă',
      'cadouri corporate',
      'semnalistică și branding',
    ],
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
    applications: [
      'calitate pe termen lung',
      'fără compromisuri',
      'detalii fine',
      'merchandising',
    ],
  },
];
