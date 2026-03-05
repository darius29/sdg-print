import { KeyboardEventHandler, RefCallback } from 'react';
import { FaqItem } from '@/lib/types';

interface FaqAccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  onKeyDown: KeyboardEventHandler<HTMLButtonElement>;
  buttonRef: RefCallback<HTMLButtonElement>;
}

export const FaqAccordionItem = ({
  item,
  isOpen,
  onToggle,
  onKeyDown,
  buttonRef,
}: FaqAccordionItemProps) => {
  const panelId = `faq-panel-${item.id}`;
  const triggerId = `faq-trigger-${item.id}`;

  return (
    <article
      className={`card-premium overflow-hidden border transition-all duration-300 motion-reduce:transition-none ${
        isOpen
          ? 'border-cyan-300/50 bg-[color:color-mix(in_srgb,var(--surface-2)_84%,white_4%)] shadow-[0_22px_55px_rgba(18,214,207,0.12)]'
          : 'bg-surface/90 border-white/10 hover:border-cyan-300/35'
      }`}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={onToggle}
        onKeyDown={onKeyDown}
        className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={triggerId}
      >
        <span className="text-base font-semibold leading-snug text-slate-100 md:text-lg">
          {item.question}
        </span>
        <span
          aria-hidden
          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-200 transition-transform duration-300 motion-reduce:transition-none ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <svg
            viewBox="0 0 20 20"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M5 8l5 5 5-5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        className={`grid overflow-hidden border-t border-white/10 transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            className="px-5 pb-5 pt-4 text-sm leading-7 text-muted md:px-6 md:text-base"
          >
            {item.answer}
          </div>
        </div>
      </div>
    </article>
  );
};
