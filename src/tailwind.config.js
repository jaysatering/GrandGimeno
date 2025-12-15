/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./main.tsx",
    "./App.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./imports/**/*.{js,ts,jsx,tsx}",
    "./config/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Critical layout utilities - FORCE inclusion for Vercel
    'mx-auto',
    'max-w-xs',
    'max-w-sm',
    'max-w-md',
    'max-w-lg',
    'max-w-xl',
    'max-w-2xl',
    'max-w-3xl',
    'max-w-4xl',
    'max-w-5xl',
    'max-w-6xl',
    'max-w-7xl',
    'max-w-full',
    'w-full',
    'h-full',
    
    // Flexbox centering
    'flex',
    'items-center',
    'justify-center',
    'justify-between',
    'items-start',
    'items-end',
    'flex-col',
    'flex-row',
    'gap-2',
    'gap-4',
    'gap-6',
    'gap-8',
    'gap-12',
    'gap-20',
    
    // Text alignment
    'text-center',
    'text-left',
    'text-right',
    
    // Grid layout
    'grid',
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-12',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
    'lg:grid-cols-4',
    'col-span-4',
    'col-span-5',
    'col-span-7',
    'col-span-8',
    'col-span-12',
    'lg:col-span-4',
    'lg:col-span-5',
    'lg:col-span-7',
    'lg:col-span-8',
    
    // Positioning
    'relative',
    'absolute',
    'fixed',
    'top-0',
    'left-0',
    'right-0',
    'bottom-0',
    'left-1/2',
    'bottom-8',
    '-translate-x-1/2',
    
    // Spacing
    'mb-12',
    'mb-16',
    'mb-20',
    'mb-24',
    'mb-32',
    'mb-48',
    'mb-64',
    'mt-16',
    'mt-32',
    'mt-48',
    'px-6',
    'px-10',
    'py-2',
    'py-3',
    'py-5',
    'pb-8',
    'pt-12',
    'lg:mb-12',
    'lg:mb-16',
    'lg:mb-32',
    'lg:px-12',
    'lg:pb-64',
    'space-y-4',
    'space-y-6',
    'space-y-12',
    'space-y-16',
    'space-y-32',
    'gap-x-20',
    'gap-y-32',
    
    // Display
    'hidden',
    'block',
    'lg:hidden',
    'lg:block',
    
    // Z-index
    'z-50',
    
    // Overflow
    'overflow-hidden',
    
    // Aspect ratios
    'aspect-square',
    'aspect-[3/2]',
    'aspect-[4/5]',
    'aspect-[3/4]',
    'aspect-[16/9]',
    'aspect-[21/9]',
    
    // Object fit
    'object-cover',
    'object-top',
    'object-center',
    
    // Opacity
    'opacity-0',
    'opacity-1',
    
    // Transitions
    'transition-colors',
    'transition-opacity',
    'duration-200',
    
    // Borders
    'border',
    'border-b',
    'border-t',
    
    // Shadows
    'shadow-lg',
    
    // Animations
    'animate-bounce',
    
    // Hover states
    'hover:opacity-90',
    'hover:text-primary',
    'group-hover:opacity-100',
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