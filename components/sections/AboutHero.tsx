'use client';

import Link from 'next/link';
import { CountUp } from '@/components/CountUp';
import { TypeLoopWord } from '@/components/TypeLoopWord';
import { useInViewOnce } from '@/hooks/useInViewOnce';

const HERO_WORDS = ['spații', 'tricouri', 'obiecte', 'căni'];
const COUNT_DURATION_MS = 1500;

const stats = [
  {
    value: '500+',
    label: 'Proiecte realizate',
    animated: true,
    end: 500,
    suffix: '+',
  },
  {
    value: '2880 DPI',
    label: 'Rezoluție maximă',
    animated: true,
    end: 2880,
    suffix: ' DPI',
  },
  {
    value: 'UV Ink',
    label: 'Rezistență ridicată',
    animated: false,
  },
  {
    value: 'Național',
    label: 'Proiecte în toată țara',
    animated: false,
  },
] as const;

export function AboutHero() {
  const { ref, isInView } = useInViewOnce<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section className="section-container">
      <div className="from-surface-2/80 via-surface/85 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b to-bg p-8 shadow-[var(--shadow-md)] md:p-12 lg:p-16">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              'radial-gradient(circle at 14% 20%, rgba(0,217,255,0.15), transparent 36%), radial-gradient(circle at 84% 18%, rgba(122,92,255,0.15), transparent 34%), radial-gradient(circle at 50% 120%, rgba(46,230,166,0.10), transparent 42%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(6,9,16,0.52)_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          aria-hidden
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.9)_0.45px,transparent_0.45px)',
            backgroundSize: '3px 3px',
          }}
        />

        <div className="relative mx-auto text-center">
          <h1
            className="font-heading text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
            aria-label="Print care transformă spații în experiențe memorabile"
          >
            Print care transformă{' '}
            <span className="inline-block text-accent" aria-hidden="true">
              <TypeLoopWord words={HERO_WORDS} />
            </span>{' '}
            în experiențe memorabile
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted md:text-lg">
            Suntem o echipă din Timișoara care transformă idei în suprafețe cu
            impact vizual real pentru persoane fizice și companii din toată
            România.
          </p>

          <Link href="/contact" className="btn-primary mt-8">
            Cere ofertă personalizată
          </Link>

          <div
            ref={ref}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <article
                key={stat.label}
                tabIndex={0}
                className="card-premium focus-ring hover:border-primary/40 flex h-full min-h-32 flex-col justify-between p-5 text-left"
              >
                <p className="font-heading text-3xl font-semibold text-text md:text-4xl">
                  {stat.animated ? (
                    <>
                      <CountUp
                        end={stat.end}
                        durationMs={COUNT_DURATION_MS}
                        startAnimation={isInView}
                      />
                      {stat.suffix}
                    </>
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
