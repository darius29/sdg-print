import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F14',
        surface: '#10151C',
        text: '#FFFFFF',
        muted: '#B8C2CC',
        accent: '#00E5FF',
      },
      fontFamily: {
        heading: ['var(--font-sora)'],
        body: ['var(--font-inter)'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(0,229,255,0.35)',
      },
      backgroundImage: {
        'hero-overlay':
          'radial-gradient(circle at top right, rgba(0,229,255,0.18), transparent 45%), radial-gradient(circle at bottom left, rgba(0,229,255,0.09), transparent 50%)',
      },
    },
  },
  plugins: [],
};

export default config;
