interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading = ({
  title,
  subtitle,
  centered,
}: SectionHeadingProps) => {
  const accentChunk = title.slice(0, 3);
  const restTitle = title.slice(3);

  return (
    <div
      className={`relative mb-10 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`.trim()}
    >
      <span
        className="bg-primary/10 pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-full blur-2xl"
        aria-hidden
      />
      <span
        className="from-primary/12 to-primary-2/12 pointer-events-none absolute -left-3 top-2 h-16 w-52 rounded-full bg-gradient-to-r via-blue-400/10 blur-2xl"
        aria-hidden
      />
      <h2 className="relative font-heading text-3xl font-semibold md:text-4xl">
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
      {subtitle ? <p className="mt-4 text-muted">{subtitle}</p> : null}
    </div>
  );
};
