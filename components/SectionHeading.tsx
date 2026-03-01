interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading = ({ title, subtitle, centered }: SectionHeadingProps) => (
  <div className={centered ? 'mx-auto mb-10 max-w-3xl text-center' : 'mb-10 max-w-3xl'}>
    <h2 className="font-heading text-3xl font-semibold md:text-4xl">{title}</h2>
    <div className="mt-3 h-1 w-24 rounded bg-accent" aria-hidden />
    {subtitle ? <p className="mt-4 text-muted">{subtitle}</p> : null}
  </div>
);
