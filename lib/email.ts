import { Resend } from 'resend';

export const sendContactEmail = async (payload: {
  nume: string;
  telefon: string;
  email: string;
  tipServiciu: string;
  locatie?: string;
  mesaj: string;
}) => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('Lipsește variabila RESEND_API_KEY.');
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO ?? 'dariusgabriel52@gmail.com';

  await resend.emails.send({
    from: 'SDG Website <onboarding@resend.dev>',
    to,
    replyTo: payload.email,
    subject: `Cerere ofertă nouă - ${payload.tipServiciu}`,
    text: `Nume: ${payload.nume}\nTelefon: ${payload.telefon}\nEmail: ${payload.email}\nServiciu: ${payload.tipServiciu}\nLocație: ${payload.locatie ?? '-'}\n\nMesaj:\n${payload.mesaj}`,
  });
};
