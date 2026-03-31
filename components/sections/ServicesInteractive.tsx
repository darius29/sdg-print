'use client';

import { useState } from 'react';
import Link from 'next/link';
import { services } from '@/content/services';
import { CheckIcon } from '@/components/sections/SectionIcons';

export const ServicesInteractive = () => {
  const [active, setActive] = useState(services[0].id);
  const [openMobile, setOpenMobile] = useState<string | null>(services[0].id);

  const selected = services.find((s) => s.id === active) ?? services[0];

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Desktop: split panel */}
      <div className="hidden md:grid md:grid-cols-[1fr_1.4fr] md:gap-6">
        {/* Left: service list */}
        <div className="flex flex-col gap-2">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActive(service.id)}
              className={`group flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-200 ${
                active === service.id
                  ? 'border-primary/50 bg-primary/10 shadow-lg shadow-primary/10'
                  : 'border-slate-700/50 bg-bg hover:border-primary/30 hover:bg-primary/5'
              }`}
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-2xl transition-colors duration-200 ${
                  active === service.id
                    ? 'border-primary/40 bg-primary/10'
                    : 'border-slate-700/50 bg-slate-800/50 group-hover:border-primary/20'
                }`}
              >
                {service.icon}
              </span>
              <div className="min-w-0">
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-200 ${
                    active === service.id ? 'text-primary' : 'text-muted'
                  }`}
                >
                  {`0${index + 1}`}
                </p>
                <p className="mt-0.5 font-medium leading-tight">{service.title}</p>
                <p className="mt-1 truncate text-xs text-muted">{service.shortDescription}</p>
              </div>
              {active === service.id && (
                <span className="ml-auto shrink-0 text-primary">→</span>
              )}
            </button>
          ))}
        </div>

        {/* Right: detail panel */}
        <div
          key={selected.id}
          className="card-premium flex flex-col justify-between gap-6 p-8 animate-in fade-in slide-in-from-right-4 duration-300"
        >
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-4xl">
                {selected.icon}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                  Serviciu
                </p>
                <h2 className="font-heading text-2xl font-semibold">{selected.title}</h2>
              </div>
            </div>

            <p className="mt-6 text-muted">{selected.description}</p>

            <ul className="mt-6 grid grid-cols-2 gap-3">
              {selected.applications.map((app) => (
                <li key={app} className="flex items-center gap-2 text-sm text-muted">
                  <CheckIcon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/contact" className="btn-primary w-fit">
            Cere ofertă pentru {selected.title.toLowerCase()}
          </Link>
        </div>
      </div>

      {/* Mobile: accordion */}
      <div className="flex flex-col gap-2 md:hidden">
        {services.map((service, index) => {
          const isOpen = openMobile === service.id;
          return (
            <div
              key={service.id}
              className={`rounded-2xl border transition-colors duration-200 ${
                isOpen ? 'border-primary/50 bg-primary/5' : 'border-slate-700/50 bg-bg'
              }`}
            >
              <button
                onClick={() => setOpenMobile(isOpen ? null : service.id)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/50 text-xl">
                  {service.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                    {`0${index + 1}`}
                  </p>
                  <p className="font-medium">{service.title}</p>
                </div>
                <span
                  className={`shrink-0 text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                >
                  ↓
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <p className="text-sm text-muted">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.applications.map((app) => (
                      <li key={app} className="flex items-center gap-2 text-sm text-muted">
                        <CheckIcon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary mt-4 inline-flex text-sm">
                    Cere ofertă
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
