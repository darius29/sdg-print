import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';
import { contactSchema } from '@/lib/schemas';
import { isRateLimited, getClientIp } from '@/lib/rateLimit';

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Prea multe cereri. Încearcă din nou peste un minut.' },
      { status: 429 },
    );
  }

  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Date invalide', details: parsed.error.flatten() }, { status: 400 });
    }

    await sendContactEmail(parsed.data);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Eroare la trimitere email.', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 },
    );
  }
}
