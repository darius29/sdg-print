'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

type SectionVariant = 'default' | 'leftGlow' | 'rightGlow' | 'splitGlow' | 'meshSoft';

interface SectionProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  variant?: SectionVariant;
}

export const Section = ({
  children,
  className,
  contentClassName,
  variant = 'default',
}: SectionProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section-shell section-variant-${variant} reveal-section ${isVisible ? 'is-visible' : ''} ${className ?? ''}`.trim()}
    >
      <div className={`section-container ${contentClassName ?? ''}`.trim()}>{children}</div>
    </section>
  );
};
