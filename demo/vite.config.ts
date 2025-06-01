import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@gm/ui': '../src',
    },
  },
  // Optimisations pour les performances
  server: {
    fs: {
      allow: ['..'], // Permet l'accès au dossier parent
    },
  },
  build: {
    // Optimisation pour le build de production
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
  },
  optimizeDeps: {
    // Pre-bundle des dépendances pour la vitesse
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
    ],
  },
}) 