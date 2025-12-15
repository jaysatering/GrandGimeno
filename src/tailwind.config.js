/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Grand Gimeno Design System Colors
        charcoal: '#525557',
        ivory: '#EEEDE1',
        blue: '#669CC4',
        bone: '#EEEDE1',
        
        // Semantic color mappings
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