export const siteConfig = {
  name: 'SDG PRINT & Design',
  description:
    'Print direct pe perete, textile și obiecte personalizate în Timișoara și toată România.',
  url: 'https://sdgprint.ro',
  phone: '0722333444',
  email: 'dariusgabriel52@gmail.com',
  city: 'Timișoara',
  country: 'România',
  facebook: 'https://www.facebook.com/profile.php?id=61587649299641',
  nav: [
    { href: '/', label: 'Acasă' },
    { href: '/despre-noi', label: 'Despre Noi' },
    { href: '/servicii', label: 'Servicii' },
    { href: '/portofoliu', label: 'Portofoliu' },
    { href: '/before-after', label: 'Before/After' },
    { href: '/testimoniale', label: 'Testimoniale' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ],
};

export const canonical = (path = '/') => `${siteConfig.url}${path}`;
