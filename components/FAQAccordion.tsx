'use client';

import { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import { FaqItem } from '@/lib/types';
import { FaqAccordionItem } from '@/components/FaqAccordionItem';

export const FAQAccordion = ({ items }: { items: FaqItem[] }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const [query, setQuery] = useState('');
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return items;
    }

    return items.filter((item) => {
      const content = `${item.question} ${item.answer}`.toLowerCase();
      return content.includes(normalized);
    });
  }, [items, query]);

  useEffect(() => {
    if (!filteredItems.some((item) => item.id === openId)) {
      setOpenId(filteredItems[0]?.id ?? null);
    }
  }, [filteredItems, openId]);

  const handleArrowNavigation = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      return;
    }

    event.preventDefault();

    const lastIndex = filteredItems.length - 1;
    let nextIndex = currentIndex;

    if (event.key === 'ArrowDown') {
      nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    }

    if (event.key === 'ArrowUp') {
      nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    }

    if (event.key === 'Home') {
      nextIndex = 0;
    }

    if (event.key === 'End') {
      nextIndex = lastIndex;
    }

    buttonRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="section-bloom bg-surface/35 rounded-3xl border border-white/10 p-4 shadow-[var(--shadow-soft)] md:p-6">
      <label
        htmlFor="faq-search"
        className="mb-3 block text-sm font-medium text-slate-200"
      >
        Caută întrebări
      </label>
      <input
        id="faq-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Caută după cuvinte cheie"
        className="focus-ring mb-6 w-full rounded-xl border border-white/15 bg-slate-950/55 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400"
      />

      {filteredItems.length > 0 ? (
        <div className="space-y-4">
          {filteredItems.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <FaqAccordionItem
                key={item.id}
                item={item}
                isOpen={isOpen}
                onToggle={() => setOpenId(isOpen ? null : item.id)}
                onKeyDown={(event) => handleArrowNavigation(event, index)}
                buttonRef={(element) => {
                  buttonRefs.current[index] = element;
                }}
              />
            );
          })}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-white/20 bg-slate-950/40 px-4 py-6 text-center text-sm text-muted">
          Nu am găsit rezultate. Încearcă un alt cuvânt cheie.
        </p>
      )}
    </div>
  );
};
