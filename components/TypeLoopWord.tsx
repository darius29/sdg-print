'use client';

import { useEffect, useMemo, useState } from 'react';
import type { CSSProperties } from 'react';

interface TypeLoopWordProps {
  words: string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
  className?: string;
}

export function TypeLoopWord({
  words,
  typingSpeedMs = 80,
  deletingSpeedMs = 50,
  pauseMs = 1000,
  className,
}: TypeLoopWordProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(words[0] ?? '');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(media.matches);

    updatePreference();
    media.addEventListener('change', updatePreference);

    return () => media.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || words.length <= 1) {
      setDisplayedWord(words[0] ?? '');
      return;
    }

    const currentWord = words[wordIndex] ?? '';
    const nextWord = words[(wordIndex + 1) % words.length] ?? '';

    if (isPaused) {
      const pauseTimer = window.setTimeout(() => {
        setIsPaused(false);
        if (isDeleting) {
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setIsDeleting(false);
        } else {
          setIsDeleting(true);
        }
      }, pauseMs);

      return () => window.clearTimeout(pauseTimer);
    }

    const stepTimer = window.setTimeout(
      () => {
        if (isDeleting) {
          const nextDisplay = currentWord.slice(0, displayedWord.length - 1);
          setDisplayedWord(nextDisplay);

          if (nextDisplay.length === 0) {
            setIsPaused(true);
          }
          return;
        }

        const nextDisplay = nextWord.slice(0, displayedWord.length + 1);
        setDisplayedWord(nextDisplay);

        if (nextDisplay === nextWord) {
          setIsPaused(true);
        }
      },
      isDeleting ? deletingSpeedMs : typingSpeedMs,
    );

    return () => window.clearTimeout(stepTimer);
  }, [
    deletingSpeedMs,
    displayedWord,
    isDeleting,
    isPaused,
    pauseMs,
    prefersReducedMotion,
    typingSpeedMs,
    wordIndex,
    words,
  ]);

  const longestWordLength = useMemo(
    () => words.reduce((maxLength, word) => Math.max(maxLength, word.length), 0),
    [words],
  );

  const currentWord = prefersReducedMotion ? words[0] ?? '' : displayedWord;

  return (
    <span
      className={`inline-flex min-w-[calc(var(--type-word-length)*1ch)] items-baseline ${className ?? ''}`.trim()}
      style={{ '--type-word-length': longestWordLength } as CSSProperties}
      aria-live="off"
    >
      <span>{currentWord}</span>
      {!prefersReducedMotion ? (
        <span className="ml-0.5 h-[1.1em] w-[2px] animate-type-caret bg-primary" aria-hidden="true" />
      ) : null}
    </span>
  );
}
