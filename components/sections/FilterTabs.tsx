'use client';

import { KeyboardEvent, ReactNode, useMemo, useState } from 'react';
import Link from 'next/link';
import { PillButton } from '@/components/sections/Chip';
import { CheckIcon } from '@/components/sections/SectionIcons';

interface ServiceFilter {
  id: string;
  label: string;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  benefits: string[];
  icon: ReactNode;
}

interface FilterTabsProps {
  filters: ServiceFilter[];
  items: ServiceItem[];
}

export const FilterTabs = ({ filters, items }: FilterTabsProps) => {
  const [activeFilter, setActiveFilter] = useState(filters[0]?.id ?? 'all');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return items;
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;

    event.preventDefault();
    let nextIndex = index;

    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % filters.length;
    }

    if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + filters.length) % filters.length;
    }

    if (event.key === 'Home') {
      nextIndex = 0;
    }

    if (event.key === 'End') {
      nextIndex = filters.length - 1;
    }

    const nextTab = filters[nextIndex];
    setActiveFilter(nextTab.id);
    document.getElementById(`services-tab-${nextTab.id}`)?.focus();
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2" role="tablist" aria-label="Filtre servicii">
        {filters.map((filter, index) => (
          <PillButton
            key={filter.id}
            label={filter.label}
            role="tab"
            id={`services-tab-${filter.id}`}
            ariaControls={`services-panel-${filter.id}`}
            ariaSelected={activeFilter === filter.id}
            tabIndex={activeFilter === filter.id ? 0 : -1}
            isActive={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          />
        ))}
      </div>

      <div id={`services-panel-${activeFilter}`} role="tabpanel" aria-labelledby={`services-tab-${activeFilter}`} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {filteredItems.map((item) => (
          <article key={item.id} className="card-premium flex h-full flex-col p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
              {item.icon}
            </div>
            <h3 className="mt-4 font-heading text-2xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-muted">{item.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {item.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-secondary mt-5 w-fit text-sm" aria-label={`Află mai multe despre ${item.title}`}>
              Learn more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};
