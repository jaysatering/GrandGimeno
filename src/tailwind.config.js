/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.tsx",
    "./App.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./imports/**/*.{js,ts,jsx,tsx}",
    "./config/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System Colors - Using RGB format for opacity support
        primary: 'rgb(102 156 196 / <alpha-value>)',
        charcoal: 'rgb(82 85 87 / <alpha-value>)',
        ivory: 'rgb(238 237 225 / <alpha-value>)',
        bone: 'rgb(238 237 225 / <alpha-value>)',
        blue: 'rgb(102 156 196 / <alpha-value>)',
        
        // Semantic colors
        background: 'rgb(238 237 225 / <alpha-value>)',
        foreground: 'rgb(82 85 87 / <alpha-value>)',
        'primary-foreground': 'rgb(238 237 225 / <alpha-value>)',
        muted: 'rgb(106 107 109 / <alpha-value>)',
        'muted-foreground': 'rgb(106 107 109 / <alpha-value>)',
        border: 'rgb(212 211 202 / <alpha-value>)',
        
        // UI colors
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
        secondary: 'rgb(245 244 237 / <alpha-value>)',
        'secondary-foreground': 'rgb(82 85 87 / <alpha-value>)',
        accent: 'rgb(245 244 237 / <alpha-value>)',
        'accent-foreground': 'rgb(82 85 87 / <alpha-value>)',
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
        'full-container': 'var(--container-full)',
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
