/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System Colors - Using RGB format for opacity support
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        charcoal: 'rgb(var(--color-charcoal) / <alpha-value>)',
        ivory: 'rgb(var(--color-ivory) / <alpha-value>)',
        bone: 'rgb(var(--color-ivory) / <alpha-value>)',
        blue: 'rgb(var(--color-primary) / <alpha-value>)',
        
        // Semantic colors
        background: 'rgb(var(--color-ivory) / <alpha-value>)',
        foreground: 'rgb(var(--color-charcoal) / <alpha-value>)',
        'primary-foreground': 'rgb(var(--color-ivory) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--color-muted) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        
        // UI colors
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
        secondary: 'rgb(245 244 237 / <alpha-value>)',
        'secondary-foreground': 'rgb(var(--color-charcoal) / <alpha-value>)',
        accent: 'rgb(245 244 237 / <alpha-value>)',
        'accent-foreground': 'rgb(var(--color-charcoal) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      spacing: {
        // Design System Spacing
        'section': 'var(--space-section)',
        'section-mobile': 'var(--space-section-mobile)',
      },
      maxWidth: {
        // Design System Containers
        'text': 'var(--container-text)',
        'content': 'var(--container-content)',
        'wide': 'var(--container-wide)',
        'full': 'var(--container-full)',
      },
      borderRadius: {
        // Design System Border Radius
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
      },
    },
  },
  plugins: [],
}