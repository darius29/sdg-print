# SDG PRINT & Design

Site de prezentare construit cu Next.js App Router + TypeScript + Tailwind.

## Setup

1. Instalează dependențele: `npm install`
2. Copiază `.env.example` în `.env.local`
3. Rulează: `npm run dev`

## MVP

- Formul de contact trimite email prin SMTP (`/api/contact`).
- Upload fișier este planificat pentru următoarea versiune.
- Structura conținutului este data-driven în `content/*`, pregătită pentru migrare CMS.

## Imagini demo (regenerabile)

- Rulează `npm run generate:images` pentru a regenera setul de imagini SVG din `public/images/*`.
- Imaginile sunt folosite în secțiunile Portofoliu, Before/After și Despre Noi.
