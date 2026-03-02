interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading = ({
  title,
  subtitle,
  centered,
}: SectionHeadingProps) => (
  <div
    className={`relative mb-10 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`.trim()}
  >
    <span
      className="bg-primary/10 pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-full blur-2xl"
      aria-hidden
    />
    <h2 className="relative font-heading text-3xl font-semibold md:text-4xl">
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
    {subtitle ? <p className="mt-4 text-muted">{subtitle}</p> : null}
  </div>
);
