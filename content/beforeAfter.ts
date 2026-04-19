import { BeforeAfterItem } from '@/lib/types';

export const beforeAfterItemsHomepage: BeforeAfterItem[] = [
  {
    id: 'ba1',
    title: 'Recepție clinică',
    surface: 'Perete lavabil',
    duration: '1 zi',
    description:
      'Transformare completă a recepției într-un spațiu modern și memorabil — de la perete simplu la identitate vizuală clară, calmă și profesională.',
    beforeImage: '/images/before-after/after1.png',
    afterImage: '/images/before-after/before1.jpg',
  },
  {
    id: 'ba2',
    title: 'Showroom auto',
    surface: 'MDF',
    duration: '6 ore',
    description:
      'Accent vizual de brand pentru showroom — experiență mai puternică pentru clienți și imagine premium pentru spațiul de prezentare.',
    beforeImage: '/images/before-after/after1.png',
    afterImage: '/images/before-after/before1.jpg',
  },
  {
    id: 'ba3',
    title: 'Birou creativ',
    surface: 'Perete gletuit',
    duration: '1 zi',
    description:
      'Spațiu creativ personalizat pentru echipă și clienți — grafică motivațională și identitate vizuală care inspiră și definește cultura companiei.',
    beforeImage: '/images/before-after/after1.png',
    afterImage: '/images/before-after/before1.jpg',
  },
];

export interface BeforeAfterMaterialGroup {
  id: string;
  label: string;
  description: string;
  items: BeforeAfterItem[];
}

export const beforeAfterByMaterial: BeforeAfterMaterialGroup[] = [
  {
    id: 'pereti',
    label: 'Pereți',
    description:
      'Print UV direct pe pereți lavabili, gletuiți sau tencuiți — rezultate durabile cu culori vii.',
    items: [
      {
        id: 'p1',
        title: 'Recepție clinică',
        surface: 'Perete lavabil',
        duration: '1 zi',
        description:
          'De la perete simplu la identitate vizuală clară și profesională — transformare completă a recepției.',
        beforeImage: '/images/before-after/after4.png',
        afterImage: '/images/before-after/before4.png',
      },
      {
        id: 'p2',
        title: 'Birou creativ',
        surface: 'Perete gletuit',
        duration: '1 zi',
        description:
          'Grafică motivațională și identitate de brand care inspiră echipa și impresionează vizitatorii.',
        beforeImage: '/images/before-after/after5.png',
        afterImage: '/images/before-after/before5.png',
      },
      {
        id: 'p3',
        title: 'Restaurant & cafenea',
        surface: 'Perete tencuit',
        duration: '2 zile',
        description:
          'Atmosferă unică prin ilustrații custom pe pereți — brandingul devine parte din experiența clienților.',
        beforeImage: '/images/before-after/after6.png',
        afterImage: '/images/before-after/before5.png',
      },
    ],
  },
  {
    id: 'lemn',
    label: 'Lemn',
    description:
      'Print UV pe MDF, PAL, lemn masiv sau furnir — detalii fine, culori stabile și aderență excelentă.',
    items: [
      {
        id: 'l1',
        title: 'Mobilier showroom',
        surface: 'MDF vopsit',
        duration: '4 ore',
        description:
          'Personalizare mobilier cu grafică de brand — aspect premium și consistență vizuală în întregul showroom.',
        beforeImage: '/images/before-after/after7.png',
        afterImage: '/images/before-after/before5.png',
      },
      {
        id: 'l2',
        title: 'Uși interioare',
        surface: 'PAL melaminat',
        duration: '3 ore',
        description:
          'Uși standard transformate în elemente de design — print UV cu rezoluție înaltă direct pe suprafața PAL.',
        beforeImage: '/images/before-after/after1.png',
        afterImage: '/images/before-after/before1.jpg',
      },
      {
        id: 'l3',
        title: 'Rafturi & display',
        surface: 'Lemn masiv',
        duration: '5 ore',
        description:
          'Rafturi personalizate pentru retail — logo, prețuri și grafică promoțională integrate direct în mobilier.',
        beforeImage: '/images/before-after/after1.png',
        afterImage: '/images/before-after/before1.jpg',
      },
    ],
  },
  {
    id: 'sticla',
    label: 'Sticlă',
    description:
      'Print UV pe sticlă călită sau laminată — folii decorative, branding și confidențialitate cu stil.',
    items: [
      {
        id: 's1',
        title: 'Vitrină magazin',
        surface: 'Sticlă securizată',
        duration: '2 ore',
        description:
          'Vitrină transformată în suport de comunicare — promo, ore program și identitate vizuală aplicate direct.',
        beforeImage: '/images/before-after/after1.png',
        afterImage: '/images/before-after/before1.jpg',
      },
      {
        id: 's2',
        title: 'Pereți birou',
        surface: 'Sticlă laminată',
        duration: '3 ore',
        description:
          'Pereți de sticlă cu grafică de brand — confidențialitate vizuală și estetică premium pentru open space.',
        beforeImage: '/images/before-after/before2.png',
        afterImage: '/images/before-after/after2.png',
      },
      {
        id: 's3',
        title: 'Ușă de intrare',
        surface: 'Sticlă călită',
        duration: '1 oră',
        description:
          'Prima impresie contează — logo și informații de contact aplicate pe ușa de intrare cu finisaj mat.',
        beforeImage: '/images/before-after/after3.png',
        afterImage: '/images/before-after/before3.png',
      },
    ],
  },
  {
    id: 'metal',
    label: 'Metal',
    description:
      'Print UV pe aluminiu, oțel, inox sau tablă vopsită — rezistență la intemperii și uzură.',
    items: [
      {
        id: 'm1',
        title: 'Panou exterior',
        surface: 'Tablă zincată',
        duration: '4 ore',
        description:
          'Panouri metalice pentru exterior cu print UV rezistent UV și apă — ideal pentru fațade comerciale.',
        beforeImage: '/images/before-after/after1.png',
        afterImage: '/images/before-after/before1.jpg',
      },
      {
        id: 'm2',
        title: 'Dulap industrial',
        surface: 'Tablă vopsită',
        duration: '3 ore',
        description:
          'Branding aplicat pe echipamente și dulapuri metalice — identificare rapidă și imagine profesională.',
        beforeImage: '/images/before-after/after1.png',
        afterImage: '/images/before-after/before1.jpg',
      },
      {
        id: 'm3',
        title: 'Vehicul comercial',
        surface: 'Caroserie aluminiu',
        duration: '1 zi',
        description:
          'Vehicul de firmă transformat în suport mobil de publicitate — print UV cu aderență maximă pe aluminiu.',
        beforeImage: '/images/before-after/after1.png',
        afterImage: '/images/before-after/before1.jpg',
      },
    ],
  },
  {
    id: 'plastic',
    label: 'Plastic',
    description:
      'Print UV pe PVC, acril, polistiren sau policarbonat — panouri ușoare, versatile și vibrant colorate.',
    items: [
      {
        id: 'pl1',
        title: 'Semnalistică PVC',
        surface: 'PVC expandat',
        duration: '2 ore',
        description:
          'Panouri de semnalistică interioară și exterioară — print UV cu negru intens și culori saturate pe PVC.',
        beforeImage: '/images/before-after/after1.png',
        afterImage: '/images/before-after/before1.jpg',
      },
      {
        id: 'pl2',
        title: 'Display acrilic',
        surface: 'Acril transparent',
        duration: '2 ore',
        description:
          'Display-uri și standuri din acril personalizate — efect de iluminare naturală cu print pe spate.',
        beforeImage: '/images/before-after/after1.png',
        afterImage: '/images/before-after/before1.jpg',
      },
      {
        id: 'pl3',
        title: 'Panou publicitar',
        surface: 'Policarbonat alveolar',
        duration: '3 ore',
        description:
          'Panouri ușoare pentru expoziții și târguri — montaj rapid, culori vii și suprafață rezistentă la zgârieturi.',
        beforeImage: '/images/before-after/after1.png',
        afterImage: '/images/before-after/before1.jpg',
      },
    ],
  },
];

export const beforeAfterItems: BeforeAfterItem[] =
  beforeAfterByMaterial.flatMap((g) => g.items);
