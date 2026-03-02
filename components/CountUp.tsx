'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end: number;
  durationMs?: number;
  startAnimation: boolean;
}

export function CountUp({
  end,
  durationMs = 1500,
  startAnimation,
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startAnimation || hasAnimated.current) {
      return;
    }

    hasAnimated.current = true;

    if (typeof window === 'undefined') {
      setValue(end);
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setValue(end);
      return;
    }

    const animationStart = performance.now();
    let frameId = 0;

    const animate = (timestamp: number) => {
      const elapsed = timestamp - animationStart;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setValue(Math.round(end * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [durationMs, end, startAnimation]);

  return <>{value}</>;
}
