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
    className={`${centered ? 'mx-auto text-center' : ''} relative mb-10 max-w-3xl ${className ?? ''}`.trim()}
  >
    <span
      className="bg-primary/10 pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-full blur-2xl"
      aria-hidden
    />
    {eyebrow ? (
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
    ) : null}
    <h2 className="relative mt-3 font-heading text-3xl font-semibold md:text-4xl">
      <span className="bg-gradient-to-r from-text via-cyan-100 to-text bg-clip-text text-transparent">
        {title}
      </span>
    </h2>
    <div
      className={`${centered ? 'mx-auto' : ''} bg-primary/20 relative mt-3 h-1 w-24 overflow-hidden rounded`}
      aria-hidden
    >
      <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary-2" />
    </div>
    {description ? <p className="mt-4 text-muted">{description}</p> : null}
  </div>
);
