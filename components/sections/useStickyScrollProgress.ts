'use client';

import { RefObject, useEffect, useState } from 'react';

export const useStickyScrollProgress = (
  sectionRef: RefObject<HTMLElement | null>,
) => {
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateReducedMotion = () => setReducedMotion(mediaQuery.matches);

    updateReducedMotion();
    mediaQuery.addEventListener('change', updateReducedMotion);

    return () => {
      mediaQuery.removeEventListener('change', updateReducedMotion);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || reducedMotion) {
      setProgress(0);
      return;
    }

    let rafId = 0;
    let isVisible = false;

    const updateProgress = () => {
      rafId = 0;

      if (!isVisible) {
        return;
      }

      const bounds = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollRange = bounds.height + viewportHeight;
      const covered = viewportHeight - bounds.top;
      const nextProgress = Math.max(0, Math.min(1, covered / scrollRange));

      setProgress(nextProgress);
    };

    const requestUpdate = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;

        if (isVisible) {
          requestUpdate();
        }
      },
      { threshold: 0, rootMargin: '200px 0px' },
    );

    observer.observe(section);
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    requestUpdate();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);

      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [reducedMotion, sectionRef]);

  return { progress, reducedMotion };
};
