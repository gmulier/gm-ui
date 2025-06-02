import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@gm/ui': path.resolve(__dirname, '../ui/dist/index.esm.js'),
    },
  },
  // Performance optimizations
  server: {
    fs: {
      allow: ['../..'], // Allow access to parent folder (monorepo)
    },
  },
  build: {
    // Production build optimization
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
  },
  optimizeDeps: {
    // Pre-bundle dependencies for speed
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
    ],
  },
}) 