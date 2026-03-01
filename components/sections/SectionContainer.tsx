import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export const SectionContainer = ({ children, className }: SectionContainerProps) => (
  <section className={`section-container ${className ?? ''}`.trim()}>{children}</section>
);
