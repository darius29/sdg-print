import { z } from 'zod';

export const contactSchema = z.object({
  nume: z.string().min(2, 'Numele este obligatoriu.'),
  telefon: z.string().min(8, 'Telefon invalid.'),
  email: z.string().email('Email invalid.'),
  tipServiciu: z.string().min(1, 'Selectează tipul serviciului.'),
  locatie: z.string().optional(),
  mesaj: z.string().min(10, 'Mesajul trebuie să conțină minim 10 caractere.'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
