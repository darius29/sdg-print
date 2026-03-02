'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { portfolioItems } from '@/content/portfolio';
import { PortfolioCard } from '@/components/cards';
import { Reveal } from '@/components/Reveal';

const filters = ['Toate', 'Residential', 'Commercial', 'Textile', 'Custom'] as const;

type FilterType = (typeof filters)[number];

export const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('Toate');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const items = useMemo(() => {
    if (activeFilter === 'Toate') return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const activeItem = portfolioItems.find((item) => item.id === activeId);

  useEffect(() => {
    if (!activeItem) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveId(null);
        return;
      }

      if (event.key === 'ArrowRight') {
        setActiveImageIndex((index) => (index + 1) % activeItem.images.length);
      }

      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((index) => (index - 1 + activeItem.images.length) % activeItem.images.length);
      }

      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', keyHandler);
    const focusable = dialogRef.current?.querySelector<HTMLElement>('button');
    focusable?.focus();

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', keyHandler);
      previouslyFocused.current?.focus();
    };
  }, [activeItem]);

  useEffect(() => {
    if (!activeItem) return;
    const nextImage = activeItem.images[(activeImageIndex + 1) % activeItem.images.length];
    const prevImage = activeItem.images[(activeImageIndex - 1 + activeItem.images.length) % activeItem.images.length];
    [nextImage, prevImage].forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [activeImageIndex, activeItem]);

  const openProject = (id: string) => {
    setActiveId(id);
    setActiveImageIndex(0);
  };

  const closeDialog = () => setActiveId(null);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3" role="tablist" aria-label="Filtrare portofoliu">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(filter)}
              className={`motion-base focus-ring rounded-full border px-4 py-2 text-sm ${isActive ? 'border-primary bg-primary/10 text-primary shadow-glow' : 'border-border text-muted hover:border-primary/50 hover:text-text'}`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Reveal key={item.id}>
            <PortfolioCard item={item} onOpen={() => openProject(item.id)} />
          </Reveal>
        ))}
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="presentation"
          onClick={closeDialog}
        >
          <div
            ref={dialogRef}
            className="card-premium max-h-[92vh] w-full max-w-5xl overflow-y-auto border-white/20 bg-surface-2/95 p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`Galerie pentru ${activeItem.title}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-heading text-2xl">{activeItem.title}</h3>
                <p className="mt-1 text-sm text-muted">{activeItem.category} • {activeItem.location}</p>
              </div>
              <button onClick={closeDialog} className="focus-ring rounded-full border border-border px-3 py-1 text-sm text-muted hover:text-text" aria-label="Închide galeria">
                Închide ✕
              </button>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border bg-bg/40">
              <Image
                src={activeItem.images[activeImageIndex]}
                alt={`${activeItem.title} imagine ${activeImageIndex + 1}`}
                width={1200}
                height={820}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/80 to-transparent p-4 text-sm text-muted">
                {activeItem.description}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button onClick={() => setActiveImageIndex((index) => (index - 1 + activeItem.images.length) % activeItem.images.length)} className="focus-ring motion-base rounded-full border border-border px-4 py-2 text-sm hover:border-primary/70 hover:text-primary" aria-label="Imagine anterioară">← Previous</button>
              <p className="text-xs uppercase tracking-[0.24em] text-muted">{activeImageIndex + 1} / {activeItem.images.length}</p>
              <button onClick={() => setActiveImageIndex((index) => (index + 1) % activeItem.images.length)} className="focus-ring motion-base rounded-full border border-border px-4 py-2 text-sm hover:border-primary/70 hover:text-primary" aria-label="Imagine următoare">Next →</button>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-4">
              {activeItem.images.map((image, index) => (
                <button
                  key={image}
                  className={`motion-base focus-ring overflow-hidden rounded-xl border ${index === activeImageIndex ? 'border-primary shadow-glow' : 'border-border hover:border-primary/40'}`}
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Selectează imaginea ${index + 1}`}
                >
                  <Image src={image} alt={`${activeItem.title} miniatură ${index + 1}`} width={320} height={220} className="h-20 w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
