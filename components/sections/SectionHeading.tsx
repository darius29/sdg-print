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
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
    ) : null}
    <h2 className="mt-3 font-heading text-3xl font-semibold md:text-4xl">{title}</h2>
    <div className={`${centered ? 'mx-auto' : ''} mt-3 h-1 w-24 rounded bg-accent`} aria-hidden />
    {description ? <p className="mt-4 text-muted">{description}</p> : null}
  </div>
);
