'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type AmbientVariant = 'left' | 'right' | 'center';

interface AmbientSectionProps {
  children: ReactNode;
  variant?: AmbientVariant;
  className?: string;
  surfaceClassName?: string;
}

export const AmbientSection = ({
  children,
  variant = 'left',
  className,
  surfaceClassName,
}: AmbientSectionProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -12% 0px' },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`section-container ambient-region ambient-${variant} ${isVisible ? 'is-visible' : ''} ${className ?? ''}`.trim()}
    >
      <div
        className={`section-surface ambient-surface ${surfaceClassName ?? ''}`.trim()}
      >
        {children}
      </div>
      <span className="ambient-separator" aria-hidden />
    </section>
  );
};
