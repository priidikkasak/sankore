import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-light': '#D4A017',
        'gold-muted': 'rgba(201,168,76,0.15)',
        'gold-border': 'rgba(201,168,76,0.3)',
        black: '#0A0A0A',
        'warm-black': '#0D0B08',
        'dark-gold': '#13110A',
        cream: '#F5F0E8',
        'cream-muted': 'rgba(245,240,232,0.6)',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
