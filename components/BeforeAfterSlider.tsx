'use client';

import Image from 'next/image';
import {
  KeyboardEvent,
  PointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { BeforeAfterItem } from '@/lib/types';
import styles from './BeforeAfterSlider.module.css';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title: string;
  surface: string;
  duration: string;
  description: string;
}

const clamp = (value: number) => Math.min(100, Math.max(0, value));

const ChevronIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
    <path
      d={
        direction === 'left'
          ? 'M14.5 5.5L8 12l6.5 6.5'
          : 'M9.5 5.5L16 12l-6.5 6.5'
      }
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  title,
  surface,
  duration,
  description,
}: BeforeAfterSliderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isReady, setIsReady] = useState(false);
  // ariaValue is the only React state for position — updated on drag end / keyboard
  const [ariaValue, setAriaValue] = useState(50);

  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLButtonElement>(null);
  // positionRef tracks current value without triggering re-renders
  const positionRef = useRef(50);

  // Direct DOM update — zero React re-renders during drag
  const applyPosition = useCallback((pos: number) => {
    const clamped = clamp(pos);
    positionRef.current = clamped;
    // clip-path masks the after layer without resizing the image
    if (revealRef.current)
      revealRef.current.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
    if (dividerRef.current) dividerRef.current.style.left = `${clamped}%`;
    if (handleRef.current) handleRef.current.style.left = `${clamped}%`;
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reduceMotion) {
      setIsReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsReady(true);
        // Initial reveal sweep — transition is active here (not dragging)
        applyPosition(32);
        window.setTimeout(() => applyPosition(50), 360);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [applyPosition]);

  const getPositionFromPointer = (
    clientX: number,
    container: HTMLElement,
  ): number => {
    const rect = container.getBoundingClientRect();
    return clamp(((clientX - rect.left) / rect.width) * 100);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    applyPosition(getPositionFromPointer(event.clientX, event.currentTarget));
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    applyPosition(getPositionFromPointer(event.clientX, event.currentTarget));
  };

  const onPointerUp = () => {
    setIsDragging(false);
    // Sync aria value once on release
    setAriaValue(Math.round(positionRef.current));
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const keyDelta: Record<string, number> = {
      ArrowLeft: -1,
      ArrowRight: 1,
      PageDown: -10,
      PageUp: 10,
      Home: -100,
      End: 100,
    };

    if (!(event.key in keyDelta)) return;
    event.preventDefault();

    const next =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? 100
          : clamp(positionRef.current + keyDelta[event.key]);

    applyPosition(next);
    setAriaValue(Math.round(next));
  };

  return (
    <article className="card-premium overflow-hidden p-4">
      <div
        ref={containerRef}
        className={`${styles.comparison} ${isReady ? styles.ready : ''} ${isDragging ? styles.isDragging : ''} relative aspect-[4/3] md:aspect-[16/9]`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <Image
          src={beforeImage}
          alt={`${title} înainte`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div ref={revealRef} className={styles.reveal} style={{ clipPath: 'inset(0 50% 0 0)' }}>
          <Image
            src={afterImage}
            alt={`${title} după`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <span className={`${styles.badge} ${styles.badgeLeft}`}>
          {beforeLabel}
        </span>
        <span className={`${styles.badge} ${styles.badgeRight}`}>
          {afterLabel}
        </span>

        <div
          ref={dividerRef}
          className={styles.divider}
          style={{ left: '50%' }}
          aria-hidden
        />

        <button
          ref={handleRef}
          type="button"
          role="slider"
          tabIndex={0}
          aria-label={`Comparație imagini ${title}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={ariaValue}
          onKeyDown={onKeyDown}
          className={`${styles.handle} ${isDragging ? styles.dragging : ''}`}
          style={{ left: '50%' }}
        >
          <span className={styles.chevrons}>
            <ChevronIcon direction="left" />
            <ChevronIcon direction="right" />
          </span>
        </button>
      </div>

      <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted">
        Folosește mouse-ul/touch sau tastele pentru comparație.
      </p>
      <h3 className="mt-4 font-heading text-xl">{title}</h3>
      <p className="text-sm text-muted">
        Suprafață: {surface} • Durată: {duration}
      </p>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </article>
  );
};

export const BeforeAfterCard = ({ item }: { item: BeforeAfterItem }) => (
  <BeforeAfterSlider
    beforeImage={item.beforeImage}
    afterImage={item.afterImage}
    title={item.title}
    surface={item.surface}
    duration={item.duration}
    description={item.description}
  />
);
