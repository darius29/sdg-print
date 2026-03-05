import { ReactNode } from 'react';
import { Section } from '@/components/sections/Section';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'leftGlow' | 'rightGlow' | 'splitGlow' | 'meshSoft';
  contentClassName?: string;
}

export const SectionContainer = ({
  children,
  className,
  variant = 'default',
  contentClassName,
}: SectionContainerProps) => (
  <Section className={className} variant={variant} contentClassName={contentClassName}>
    {children}
  </Section>
);
