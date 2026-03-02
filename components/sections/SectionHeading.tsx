interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  centered,
  className,
}: SectionHeadingProps) => (
  <div
    className={`${centered ? 'mx-auto text-center' : ''} mb-10 max-w-3xl ${className ?? ''}`.trim()}
  >
    {eyebrow ? (
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
    ) : null}
    <h2 className="mt-3 font-heading text-3xl font-semibold md:text-4xl">{title}</h2>
    <div className={`${centered ? 'mx-auto' : ''} relative mt-3 h-1 w-24 overflow-hidden rounded bg-primary/20`} aria-hidden>
      <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary-2" />
    </div>
    {description ? <p className="mt-4 text-muted">{description}</p> : null}
  </div>
);
