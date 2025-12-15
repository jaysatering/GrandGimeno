/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-primary',
    'bg-primary',
    'border-primary',
    'text-primary-foreground',
    'bg-primary-foreground',
    'text-charcoal',
    'bg-charcoal',
    'text-ivory',
    'bg-ivory',
    'text-blue',
    'bg-blue',
    'text-bone',
    'bg-bone',
    'text-foreground',
    'bg-foreground',
    'text-background',
    'bg-background',
    'text-muted',
    'bg-muted',
    'text-muted-foreground',
    'bg-muted-foreground',
    'border-border',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#525557',
        ivory: '#EEEDE1',
        blue: '#669CC4',
        bone: '#EEEDE1',
        background: '#EEEDE1',
        foreground: '#525557',
        primary: {
          DEFAULT: '#669CC4',
          foreground: '#EEEDE1',
        },
        muted: {
          DEFAULT: '#f5f4ed',
          foreground: '#6a6b6d',
        },
        border: 'rgba(82, 85, 87, 0.15)',
      },
      fontFamily: {
        sans: ['Cormorant Garamond', 'ui-serif', 'Georgia', 'serif'],
        mono: ['Space Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}