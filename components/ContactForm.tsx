'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactFormValues, contactSchema } from '@/lib/schemas';

const options = ['Wall Print', 'Tricouri & Hanorace', 'Căni', 'Șepci & Textile', 'Design'];

export const ContactForm = () => {
  const [status, setStatus] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('');
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus('Mesaj trimis cu succes! Revenim rapid cu oferta.');
      reset();
      return;
    }

    setStatus('Nu am putut trimite mesajul acum. Te rugăm încearcă din nou.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-premium space-y-4 p-6">
      <p className="text-xs text-muted">Upload fișier: disponibil în versiunea următoare (MVP fără upload).</p>
      <div>
        <label className="mb-1 block text-sm">Nume *</label>
        <input {...register('nume')} className="w-full rounded-lg border border-slate-700 bg-bg p-3" />
        {errors.nume ? <p className="mt-1 text-xs text-red-400">{errors.nume.message}</p> : null}
      </div>
      <div>
        <label className="mb-1 block text-sm">Telefon *</label>
        <input {...register('telefon')} className="w-full rounded-lg border border-slate-700 bg-bg p-3" />
      </div>
      <div>
        <label className="mb-1 block text-sm">Email *</label>
        <input type="email" {...register('email')} className="w-full rounded-lg border border-slate-700 bg-bg p-3" />
      </div>
      <div>
        <label className="mb-1 block text-sm">Tip serviciu *</label>
        <select {...register('tipServiciu')} className="w-full rounded-lg border border-slate-700 bg-bg p-3">
          <option value="">Selectează...</option>
          {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm">Locație</label>
        <input {...register('locatie')} className="w-full rounded-lg border border-slate-700 bg-bg p-3" />
      </div>
      <div>
        <label className="mb-1 block text-sm">Mesaj *</label>
        <textarea {...register('mesaj')} rows={5} className="w-full rounded-lg border border-slate-700 bg-bg p-3" />
      </div>
      <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
        {isSubmitting ? 'Se trimite...' : 'Trimite cererea'}
      </button>
      {status ? <p className="text-sm text-muted">{status}</p> : null}
    </form>
  );
};
