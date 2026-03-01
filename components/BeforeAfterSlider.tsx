'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BeforeAfterItem } from '@/lib/types';

export const BeforeAfterSlider = ({ item }: { item: BeforeAfterItem }) => {
  const [value, setValue] = useState(50);

  return (
    <article className="card-premium overflow-hidden p-4">
      <div className="relative h-64 overflow-hidden rounded-xl">
        <Image src={item.beforeImage} alt={`${item.title} înainte`} fill className="object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${value}%` }}>
          <Image src={item.afterImage} alt={`${item.title} după`} fill className="object-cover" />
        </div>
        <div className="absolute inset-y-0 w-1 bg-accent" style={{ left: `${value}%` }} aria-hidden />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-4 w-full"
        aria-label={`Slider comparație ${item.title}`}
      />
      <h3 className="mt-4 font-heading text-xl">{item.title}</h3>
      <p className="text-sm text-muted">Suprafață: {item.surface} • Durată: {item.duration}</p>
      <p className="mt-2 text-sm text-muted">{item.description}</p>
    </article>
  );
};
