import { ReactNode } from 'react';

interface ShowcaseCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  badges: string[];
}

export const ShowcaseCard = ({ icon, title, description, badges }: ShowcaseCardProps) => (
  <article className="card-premium p-6 md:p-7">
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
      {icon}
    </div>
    <h3 className="mt-5 font-heading text-2xl font-semibold">{title}</h3>
    <p className="mt-3 text-sm text-muted">{description}</p>
    <div className="mt-5 flex flex-wrap gap-2">
      {badges.map((badge) => (
        <span key={badge} className="rounded-full border border-slate-700 bg-surface/60 px-3 py-1 text-xs text-muted">
          {badge}
        </span>
      ))}
    </div>
  </article>
);

interface ShowcaseRowProps {
  icon: ReactNode;
  title: string;
  description: string;
  tag: string;
}

export const ShowcaseRow = ({ icon, title, description, tag }: ShowcaseRowProps) => (
  <article className="card-premium flex items-center gap-4 p-4">
    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent">
      {icon}
    </div>
    <div className="min-w-0 flex-1">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="font-heading text-lg font-semibold">{title}</h4>
        <span className="rounded-full border border-slate-700 bg-surface px-2 py-0.5 text-[11px] uppercase tracking-wide text-muted">
          {tag}
        </span>
      </div>
      <p className="mt-1 text-sm text-muted">{description}</p>
    </div>
    <span className="text-lg text-accent" aria-hidden>
      →
    </span>
  </article>
);
