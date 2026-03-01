'use client';

import Image from 'next/image';
import { KeyboardEvent, PointerEvent, useState } from 'react';
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
  const [position, setPosition] = useState(50);
  const updateFromPointer = (clientX: number, container: HTMLElement) => {
    const rect = container.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(nextPosition));
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    container.setPointerCapture(event.pointerId);
    updateFromPointer(event.clientX, container);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    if (!container.hasPointerCapture(event.pointerId)) {
      return;
    }

    updateFromPointer(event.clientX, container);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const keyDelta: Record<string, number> = {
      ArrowLeft: -1,
      ArrowRight: 1,
      Home: -100,
      End: 100,
    };

    if (!(event.key in keyDelta)) {
      return;
    }

    event.preventDefault();
    if (event.key === 'Home') {
      setPosition(0);
      return;
    }

    if (event.key === 'End') {
      setPosition(100);
      return;
    }

    setPosition((current) => clamp(current + keyDelta[event.key]));
  };

  return (
    <article className="card-premium overflow-hidden p-4">
      <div
        className={`${styles.comparison} relative aspect-[4/3] md:aspect-[16/9]`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
      >
        <Image
          src={beforeImage}
          alt={`${title} înainte`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className={styles.reveal} style={{ width: `${position}%` }}>
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
          className={styles.divider}
          style={{ left: `${position}%` }}
          aria-hidden
        />

        <button
          type="button"
          role="slider"
          tabIndex={0}
          aria-label={`Comparație imagini ${title}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          onKeyDown={onKeyDown}
          className={styles.handle}
          style={{ left: `${position}%` }}
        >
          <span className={styles.chevrons}>
            <ChevronIcon direction="left" />
            <ChevronIcon direction="right" />
          </span>
        </button>
      </div>

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
