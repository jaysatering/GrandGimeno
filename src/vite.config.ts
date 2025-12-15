import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'build',
    assetsInlineLimit: 0,
  },
  optimizeDeps: {
    exclude: ['figma:asset/*'],
  },
});