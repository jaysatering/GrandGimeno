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
        sans: ['Cormorant Garamond', 'ui-serif', 'Georgia', 'serif'],
        mono: ['Space Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}