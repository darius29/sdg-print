import Image from 'next/image';
import Link from 'next/link';
import { PortfolioItem, Service, Testimonial } from '@/lib/types';

export const ServiceCard = ({ service }: { service: Service }) => (
  <article className="card-premium motion-base p-6">
    <p className="text-2xl" aria-hidden>{service.icon}</p>
    <h3 className="mt-4 font-heading text-xl font-semibold">{service.title}</h3>
    <p className="mt-3 text-sm text-muted">{service.shortDescription}</p>
    <Link href="/servicii" className="focus-ring mt-5 inline-block text-sm font-medium text-primary">Detalii →</Link>
  </article>
);

export const PortfolioCard = ({ item, onOpen }: { item: PortfolioItem; onOpen: () => void }) => (
  <button
    onClick={onOpen}
    className="card-premium focus-ring motion-base group overflow-hidden text-left"
    aria-label={`Deschide proiectul ${item.title}`}
  >
    <div className="relative overflow-hidden">
      <Image
        src={item.images[0]}
        alt={item.title}
        width={700}
        height={500}
        className="h-52 w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/15 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="inline-flex rounded-full border border-primary/40 bg-bg/70 px-3 py-1 text-xs font-medium text-primary">View project</span>
      </div>
    </div>
    <div className="p-5">
      <p className="text-xs uppercase tracking-widest text-primary">{item.category}</p>
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
