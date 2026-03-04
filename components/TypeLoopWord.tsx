'use client';

import type { CSSProperties } from 'react';
import { useEffect, useMemo, useState } from 'react';

interface TypeLoopWordProps {
  words: string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
  className?: string;
  caretClassName?: string;
}

type Phase = 'pause' | 'deleting' | 'typing';

export function TypeLoopWord({
  words,
  typingSpeedMs = 80,
  deletingSpeedMs = 50,
  pauseMs = 1000,
  className,
  caretClassName,
}: TypeLoopWordProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState((words[0] ?? '').length); // pornește cu primul cuvânt complet
  const [phase, setPhase] = useState<Phase>('pause');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(media.matches);

    updatePreference();
    media.addEventListener('change', updatePreference);
    return () => media.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || words.length <= 1) {
      setWordIndex(0);
      setCharIndex((words[0] ?? '').length);
      setPhase('pause');
      return;
    }

    const currentWord = words[wordIndex] ?? '';

    const delay =
      phase === 'pause'
        ? pauseMs
        : phase === 'deleting'
          ? deletingSpeedMs
          : typingSpeedMs;

    const t = window.setTimeout(() => {
      if (phase === 'pause') {
        // după pauză, începem ștergerea cuvântului curent
        setPhase('deleting');
        return;
      }

      if (phase === 'deleting') {
        if (charIndex > 0) {
          setCharIndex((c) => c - 1);
          return;
        }

        // am șters complet -> trecem imediat la următorul cuvânt și începem typing (fără pauză pe gol)
        setWordIndex((i) => (i + 1) % words.length);
        setCharIndex(0);
        setPhase('typing');
        return;
      }

      // phase === 'typing'
      if (charIndex < currentWord.length) {
        setCharIndex((c) => c + 1);
        return;
      }

      // cuvânt complet -> pauză -> apoi ștergere
      setPhase('pause');
    }, delay);

    return () => window.clearTimeout(t);
  }, [
    charIndex,
    deletingSpeedMs,
    pauseMs,
    phase,
    prefersReducedMotion,
    typingSpeedMs,
    wordIndex,
    words,
  ]);

  const longestWordLength = useMemo(
    () =>
      words.reduce((maxLength, word) => Math.max(maxLength, word.length), 0),
    [words],
  );

  const currentWord = prefersReducedMotion
    ? (words[0] ?? '')
    : (words[wordIndex] ?? '').slice(0, charIndex);

  return (
    <span
      className={`inline-flex min-w-[calc(var(--type-word-length)*1ch)] items-baseline ${className ?? ''}`.trim()}
      style={{ '--type-word-length': longestWordLength } as CSSProperties}
      aria-live="off"
    >
      <span>{currentWord}</span>
      {!prefersReducedMotion ? (
        <span
          className={`animate-type-caret ml-0.5 h-[1.1em] w-[2px] ${caretClassName ?? 'bg-primary'}`.trim()}
          aria-hidden="true"
        />
      ) : null}
    </span>
  );
}
