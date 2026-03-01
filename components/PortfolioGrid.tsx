'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { portfolioItems } from '@/content/portfolio';
import { PortfolioCard } from '@/components/cards';

const filters = ['Toate', 'Residential', 'Commercial', 'Textile', 'Custom'] as const;

export const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('Toate');
  const [activeId, setActiveId] = useState<string | null>(null);

  const items = useMemo(() => {
    if (activeFilter === 'Toate') return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const activeItem = portfolioItems.find((item) => item.id === activeId);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm ${activeFilter === filter ? 'border-accent bg-accent/10 text-accent' : 'border-slate-700 text-muted'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <PortfolioCard key={item.id} item={item} onOpen={() => setActiveId(item.id)} />
        ))}
      </div>

      {activeItem ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-700 bg-surface p-6">
            <button onClick={() => setActiveId(null)} className="mb-4 text-sm text-muted">Închide ✕</button>
            <h3 className="font-heading text-2xl">{activeItem.title}</h3>
            <p className="mt-1 text-sm text-muted">{activeItem.category} • {activeItem.location}</p>
            <p className="mt-3 text-muted">{activeItem.description}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {activeItem.images.map((image, index) => (
                <Image key={image} src={image} alt={`${activeItem.title} ${index + 1}`} width={700} height={500} className="rounded-xl object-cover" />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
