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
}: SectionHeadingProps) => {
  const accentChunk = title.slice(0, 3);
  const restTitle = title.slice(3);

  return (
    <div
      className={`${centered ? 'mx-auto text-center' : ''} relative mb-10 max-w-3xl ${className ?? ''}`.trim()}
    >
      <span
        className="bg-primary/10 pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-full blur-2xl"
        aria-hidden
      />
      <span
        className="from-primary/12 to-primary-2/12 pointer-events-none absolute -left-3 top-2 h-16 w-52 rounded-full bg-gradient-to-r via-blue-400/10 blur-2xl"
        aria-hidden
      />
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="relative mt-3 font-heading text-3xl font-semibold md:text-4xl">
        <span className="bg-gradient-to-r from-text via-cyan-100 to-text bg-clip-text text-transparent">
          <span className="bg-gradient-to-r from-cyan-300 via-primary to-blue-300 bg-clip-text text-transparent">
            {accentChunk}
          </span>
          {restTitle}
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
};
