import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => (
  <article
    className={`card-premium h-full p-5 focus-within:ring-2 focus-within:ring-accent/70 ${className ?? ''}`.trim()}
  >
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
      {icon}
    </div>
    <h3 className="mt-4 font-heading text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-muted">{description}</p>
  </article>
);
