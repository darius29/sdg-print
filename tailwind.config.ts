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
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        border: 'var(--border)',
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        'surface-2': 'var(--surface-2)',
      },
      fontFamily: {
        heading: ['var(--font-sora)'],
        body: ['var(--font-inter)'],
      },
      boxShadow: {
        glow: '0 0 20px var(--glow-1)',
        soft: 'var(--shadow-soft)',
        md: 'var(--shadow-md)',
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
