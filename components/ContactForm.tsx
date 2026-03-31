'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactFormValues, contactSchema } from '@/lib/schemas';

const options = ['Wall Print', 'Gravare / Debitare Laser', 'Tricouri & Hanorace', 'Căni', 'Șepci & Textile', 'Design'];

const inputClass =
  'w-full rounded-lg border border-slate-700 bg-bg px-4 py-3 text-sm text-text transition-colors placeholder:text-muted focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20';

const inputErrorClass =
  'w-full rounded-lg border border-red-500/70 bg-bg px-4 py-3 text-sm text-text transition-colors placeholder:text-muted focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/20';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const statusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    return () => {
      if (statusTimerRef.current) clearTimeout(statusTimerRef.current);
    };
  }, []);

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('idle');
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus('success');
      reset();
      statusTimerRef.current = setTimeout(() => setStatus('idle'), 6000);
      return;
    }

    setStatus('error');
    statusTimerRef.current = setTimeout(() => setStatus('idle'), 6000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="card-premium space-y-5 p-6" aria-label="Formular de contact">
      <div>
        <label htmlFor="contact-nume" className="mb-1.5 block text-sm font-medium">
          Nume <span aria-hidden className="text-red-400">*</span>
        </label>
        <input
          id="contact-nume"
          {...register('nume')}
          aria-invalid={!!errors.nume}
          aria-describedby={errors.nume ? 'error-nume' : undefined}
          placeholder="Numele tău"
          className={errors.nume ? inputErrorClass : inputClass}
        />
        {errors.nume && (
          <p id="error-nume" role="alert" className="mt-1.5 text-xs text-red-400">
            {errors.nume.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-telefon" className="mb-1.5 block text-sm font-medium">
          Telefon <span aria-hidden className="text-red-400">*</span>
        </label>
        <input
          id="contact-telefon"
          {...register('telefon')}
          type="tel"
          aria-invalid={!!errors.telefon}
          aria-describedby={errors.telefon ? 'error-telefon' : undefined}
          placeholder="07xx xxx xxx"
          className={errors.telefon ? inputErrorClass : inputClass}
        />
        {errors.telefon && (
          <p id="error-telefon" role="alert" className="mt-1.5 text-xs text-red-400">
            {errors.telefon.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
          Email <span aria-hidden className="text-red-400">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          {...register('email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'error-email' : undefined}
          placeholder="email@exemplu.ro"
          className={errors.email ? inputErrorClass : inputClass}
        />
        {errors.email && (
          <p id="error-email" role="alert" className="mt-1.5 text-xs text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-serviciu" className="mb-1.5 block text-sm font-medium">
          Tip serviciu <span aria-hidden className="text-red-400">*</span>
        </label>
        <select
          id="contact-serviciu"
          {...register('tipServiciu')}
          aria-invalid={!!errors.tipServiciu}
          aria-describedby={errors.tipServiciu ? 'error-serviciu' : undefined}
          className={errors.tipServiciu ? inputErrorClass : inputClass}
        >
          <option value="">Selectează serviciul...</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.tipServiciu && (
          <p id="error-serviciu" role="alert" className="mt-1.5 text-xs text-red-400">
            {errors.tipServiciu.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-locatie" className="mb-1.5 block text-sm font-medium">
          Locație
        </label>
        <input
          id="contact-locatie"
          {...register('locatie')}
          placeholder="Orașul tău"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-mesaj" className="mb-1.5 block text-sm font-medium">
          Mesaj <span aria-hidden className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-mesaj"
          {...register('mesaj')}
          rows={5}
          aria-invalid={!!errors.mesaj}
          aria-describedby={errors.mesaj ? 'error-mesaj' : undefined}
          placeholder="Descrie pe scurt proiectul tău..."
          className={errors.mesaj ? inputErrorClass : inputClass}
        />
        {errors.mesaj && (
          <p id="error-mesaj" role="alert" className="mt-1.5 text-xs text-red-400">
            {errors.mesaj.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? 'Se trimite...' : 'Trimite cererea'}
      </button>

      {status !== 'idle' && (
        <div
          role="status"
          aria-live="polite"
          className={`rounded-xl border px-4 py-3 text-sm ${
            status === 'success'
              ? 'border-accent/30 bg-accent/10 text-accent'
              : 'border-red-500/30 bg-red-500/10 text-red-400'
          }`}
        >
          {status === 'success'
            ? '✓ Mesaj trimis cu succes! Revenim rapid cu oferta.'
            : '✗ Nu am putut trimite mesajul. Te rugăm încearcă din nou.'}
        </div>
      )}
    </form>
  );
};
