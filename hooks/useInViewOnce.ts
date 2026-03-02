'use client';

import { useEffect, useRef, useState } from 'react';

interface UseInViewOnceOptions {
  rootMargin?: string;
  threshold?: number;
}

export function useInViewOnce<T extends HTMLElement>({
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.2,
}: UseInViewOnceOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current || isInView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isInView, rootMargin, threshold]);

  return { ref, isInView };
}
