const WINDOW_MS = 60_000; // 1 minut
const MAX_REQUESTS = 5;

// Map: ip -> timestamps ale request-urilor din fereastra curentă
const store = new Map<string, number[]>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  const timestamps = (store.get(ip) ?? []).filter((t) => t > windowStart);
  timestamps.push(now);
  store.set(ip, timestamps);

  return timestamps.length > MAX_REQUESTS;
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return 'unknown';
}
