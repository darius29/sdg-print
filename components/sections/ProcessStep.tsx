interface ProcessStepProps {
  index: number;
  title: string;
  description: string;
}

export const ProcessStep = ({ index, title, description }: ProcessStepProps) => (
  <li className="relative pl-16">
    <span className="absolute left-0 top-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/60 bg-accent/10 font-heading text-sm font-semibold text-accent">
      {String(index + 1).padStart(2, '0')}
    </span>
    <article className="card-premium p-5">
      <h3 className="font-heading text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </article>
  </li>
);
