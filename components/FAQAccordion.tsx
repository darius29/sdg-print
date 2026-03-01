'use client';

import { useState } from 'react';
import { FaqItem } from '@/lib/types';

export const FAQAccordion = ({ items }: { items: FaqItem[] }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="card-premium">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between p-5 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              id={`faq-trigger-${item.id}`}
            >
              <span className="font-medium">{item.question}</span>
              <span aria-hidden>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen ? (
              <div
                id={`faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-trigger-${item.id}`}
                className="border-t border-slate-800 px-5 pb-5 text-muted"
              >
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
