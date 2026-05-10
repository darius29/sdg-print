import Image from 'next/image';
import Link from 'next/link';
import { PortfolioItem, Service } from '@/lib/types';

export const ServiceCard = ({ service }: { service: Service }) => (
  <article className="card-premium motion-base p-6">
    <p className="text-2xl" aria-hidden>
      {service.icon}
    </p>
    <h3 className="mt-4 line-clamp-2 font-heading text-xl font-semibold">
      {service.title}
    </h3>
    <p className="mt-3 line-clamp-3 text-sm text-muted">
      {service.shortDescription}
    </p>
    <Link
      href="/servicii"
      className="focus-ring mt-5 inline-block text-sm font-medium text-primary hover:text-accent"
    >
      Detalii →
    </Link>
  </article>
);

export const PortfolioCard = ({
  item,
  onOpen,
}: {
  item: PortfolioItem;
  onOpen: () => void;
}) => (
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
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="h-52 w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
      />
      <div className="from-bg/85 via-bg/15 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="border-primary/40 bg-bg/70 inline-flex rounded-full border px-3 py-1 text-xs font-medium text-primary">
          Vezi proiectul
        </span>
      </div>
    </div>
    <div className="p-5">
      <p className="text-xs uppercase tracking-widest text-primary">
        {item.category}
      </p>
      <h3 className="mt-2 line-clamp-2 font-heading text-xl">{item.title}</h3>
      <p className="mt-2 text-sm text-muted">{item.location}</p>
    </div>
  </button>
);
