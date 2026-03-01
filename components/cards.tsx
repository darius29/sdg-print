import Image from 'next/image';
import Link from 'next/link';
import { PortfolioItem, Service, Testimonial } from '@/lib/types';

export const ServiceCard = ({ service }: { service: Service }) => (
  <article className="card-premium p-6">
    <p className="text-2xl" aria-hidden>{service.icon}</p>
    <h3 className="mt-4 font-heading text-xl font-semibold">{service.title}</h3>
    <p className="mt-3 text-sm text-muted">{service.shortDescription}</p>
    <Link href="/servicii" className="mt-5 inline-block text-sm font-medium text-accent">Detalii →</Link>
  </article>
);

export const PortfolioCard = ({ item, onOpen }: { item: PortfolioItem; onOpen: () => void }) => (
  <button onClick={onOpen} className="card-premium overflow-hidden text-left" aria-label={`Deschide proiectul ${item.title}`}>
    <Image src={item.images[0]} alt={item.title} width={700} height={500} className="h-52 w-full object-cover" />
    <div className="p-5">
      <p className="text-xs uppercase tracking-widest text-accent">{item.category}</p>
      <h3 className="mt-2 font-heading text-xl">{item.title}</h3>
      <p className="mt-2 text-sm text-muted">{item.location}</p>
    </div>
  </button>
);

export const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <article className="card-premium p-6">
    <p className="text-amber-400">{'★'.repeat(item.rating)}</p>
    <p className="mt-4 text-muted">“{item.text}”</p>
    <p className="mt-5 font-medium">{item.name}</p>
    {item.company ? <p className="text-sm text-muted">{item.company}</p> : null}
  </article>
);
