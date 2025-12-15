# Grand Gimeno Design System

## Overview
All design tokens are centralized in `/styles/globals.css` and `/tailwind.config.js`. Update these files to change the entire site's appearance.

## Colors

### Primary Palette
- **Primary (Blue)**: `#669CC4` - Use `text-primary` or `bg-primary`
- **Charcoal**: `#525557` - Use `text-charcoal` or `bg-charcoal`
- **Ivory/Bone**: `#EEEDE1` - Use `text-ivory` or `bg-ivory`

### Semantic Colors
- **Background**: `#EEEDE1` - Use `bg-background`
- **Foreground**: `#525557` - Use `text-foreground`
- **Border**: `rgba(82, 85, 87, 0.15)` - Use `border-border`

### Usage in Components
All color utilities are hardcoded in `/styles/globals.css` under `@layer utilities` for maximum reliability:
- `text-primary` - Blue text
- `bg-primary` - Blue background
- `bg-primary/90` - Blue with 90% opacity
- `text-foreground/60` - Charcoal with 60% opacity

## Typography

### Font Families
- **Display/Body**: Cormorant Garamond (loaded from Google Fonts)
- **Mono/Accents**: Space Mono (loaded from Google Fonts)

### Usage
```html
<!-- Headings automatically use Cormorant Garamond -->
<h1>Automatic font</h1>

<!-- Mono accent text -->
<p class="mono">UPPERCASE MONO TEXT</p>
```

### Specifications
- **h1**: 600 weight, -0.02em tracking, line-height 1
- **h2**: 600 weight, -0.01em tracking, line-height 1.1
- **h3**: 500 weight, -0.01em tracking, line-height 1.2
- **p**: 400 weight, line-height 1.6
- **.mono**: 400 weight, 0.3em tracking, uppercase, 9px

## Spacing

### CSS Variables (Editable)
```css
--spacing-section: 128px;        /* Large section spacing */
--spacing-section-mobile: 80px;  /* Mobile section spacing */
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
--spacing-3xl: 64px;
--spacing-4xl: 96px;
```

### Utility Classes
```html
<section class="section-spacing">
  <!-- Automatically uses 128px on desktop, 80px on mobile -->
</section>
```

## Container Widths

### CSS Variables
```css
--container-text: 1200px;     /* Text-heavy content */
--container-content: 1400px;  /* General content */
--container-wide: 1600px;     /* Wide layouts */
--container-full: 1800px;     /* Full-width sections */
```

### Utility Classes
```html
<div class="container-text">Narrow content</div>
<div class="container-content">Standard content</div>
<div class="container-wide">Wide content</div>
<div class="container-full">Full-width content</div>
```

## Border Radius

### CSS Variables
```css
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
```

### Utility Classes
```html
<div class="radius-sm">Small radius</div>
<div class="radius-md">Medium radius</div>
<div class="radius-lg">Large radius</div>
```

## Updating the Design System

### To Change Colors
Edit `/styles/globals.css`:
```css
:root {
  --color-primary: #669CC4;  /* Change this */
}
```

Then update the utility class:
```css
.text-primary {
  color: #669CC4 !important;  /* Change this too */
}
```

### To Change Spacing
Edit `/styles/globals.css`:
```css
:root {
  --spacing-section: 128px;  /* Desktop spacing */
  --spacing-section-mobile: 80px;  /* Mobile spacing */
}
```

All components using `section-spacing` class will automatically update.

### To Change Typography
Edit `/styles/globals.css`:
```css
:root {
  --font-sans: 'Cormorant Garamond', ui-serif, Georgia, serif;
  --font-mono: 'Space Mono', ui-monospace, monospace;
}
```

Update the font imports at the top of the file if changing fonts entirely.

## Components Using Design System

All components now reference CSS variables:
- ✅ `/pages/LandingPage.tsx` - Uses all color utilities
- ✅ `/pages/PrivateProfile.tsx` - Uses all color utilities
- ✅ `/pages/ThankYou.tsx` - Uses all color utilities
- ✅ `/components/ui/button.tsx` - Uses `bg-primary`
- ✅ All UI components - Use semantic color tokens

## Mobile Responsiveness

All spacing utilities automatically adjust:
```css
@media (max-width: 1023px) {
  .section-spacing {
    margin-bottom: var(--spacing-section-mobile);  /* 80px */
  }
}
```

## Vercel Deployment

All utilities are **hardcoded in CSS with `!important`** to ensure they survive Tailwind's JIT compilation and purging on Vercel.
