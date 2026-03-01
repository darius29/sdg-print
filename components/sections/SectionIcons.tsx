import { SVGProps } from 'react';

const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const SparkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/></svg>
);
export const LayersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/></svg>
);
export const ShieldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}><path d="M12 3l7 3v6c0 4.4-2.9 7.8-7 9-4.1-1.2-7-4.6-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>
);
export const BoltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg>
);
export const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}><path d="M5 12l5 5L19 8"/></svg>
);
export const CogIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 20.4a1.7 1.7 0 0 0-1 1.55V22a2 2 0 1 1-4 0v-.05A1.7 1.7 0 0 0 9 20.4a1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.05A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 3.6a1.7 1.7 0 0 0 1-1.55V2a2 2 0 1 1 4 0v.05A1.7 1.7 0 0 0 15 3.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.56.2 1.06.58 1.35 1.1"/></svg>
);
export const PaletteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}><path d="M12 3a9 9 0 1 0 0 18h1.2a2.3 2.3 0 0 0 0-4.6h-.6a2.6 2.6 0 0 1 0-5.2H14a3 3 0 0 0 3-3A5 5 0 0 0 12 3z"/><circle cx="7.5" cy="10" r="1"/><circle cx="9.5" cy="7" r="1"/><circle cx="14.5" cy="7" r="1"/></svg>
);
