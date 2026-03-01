import nodemailer from 'nodemailer';

export const sendContactEmail = async (payload: {
  nume: string;
  telefon: string;
  email: string;
  tipServiciu: string;
  locatie?: string;
  mesaj: string;
}) => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO ?? 'dariusgabriel52@gmail.com';

  if (!host || !user || !pass) {
    throw new Error('Lipsesc variabilele SMTP (SMTP_HOST, SMTP_USER, SMTP_PASS).');
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `SDG Website <${user}>`,
    to,
    replyTo: payload.email,
    subject: `Cerere ofertă nouă - ${payload.tipServiciu}`,
    text: `Nume: ${payload.nume}\nTelefon: ${payload.telefon}\nEmail: ${payload.email}\nServiciu: ${payload.tipServiciu}\nLocație: ${payload.locatie ?? '-'}\n\nMesaj:\n${payload.mesaj}`,
  });
};
