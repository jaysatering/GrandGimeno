/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
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
        primary: '#669CC4',
        'primary-foreground': '#EEEDE1',
        muted: '#f5f4ed',
        'muted-foreground': '#6a6b6d',
        border: '#d4d3ca',
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
        secondary: '#f5f4ed',
        'secondary-foreground': '#525557',
        accent: '#f5f4ed',
        'accent-foreground': '#525557',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-serif', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      spacing: {
        'section': 'var(--spacing-section)',
        'section-mobile': 'var(--spacing-section-mobile)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
      },
    },
  },
  plugins: [],
}