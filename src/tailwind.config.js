/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./App.tsx",
    "./main.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./imports/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#525557',
        ivory: '#EEEDE1',
        blue: '#669CC4',
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
        border: '#52555726',
        bone: '#EEEDE1',
      },
      fontFamily: {
        sans: ['Cormorant Garamond', 'ui-serif', 'Georgia', 'serif'],
        mono: ['Space Mono', 'ui-monospace', 'monospace'],
      },
      spacing: {
        'section': '128px',
        'section-mobile': '80px',
      },
      borderRadius: {
        sm: '2px',
        md: '4px',
        lg: '8px',
      },
    },
  },
  plugins: [],
}
